import * as JWT from "jsonwebtoken";
import * as crypto from 'crypto';
import * as fs from "fs";
import { authenticator } from "otplib";
import { firstValueFrom } from "rxjs";
import { Model } from "mongoose";

import { InjectModel } from "@nestjs/mongoose";
import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";

import { IUser } from '@interfaces';
import { AccountDocument, LoginDTO } from "@repositories";
import { Plevel, Applicant, ApplicantByHeader } from "@enums";
import { GUID } from "@utils";

import { CryptoService } from "./utils/crypto.service";
import { RepositoryService } from "./utils/repository.service";
import { EmailService } from "./utils/email.service";
import { SteamService } from "./utils/steam.service";

@Injectable()
export class AuthService {
	constructor(
		@InjectModel("accounts") private accountModel: Model<AccountDocument>,	
		private readonly httpService: HttpService,
		private readonly configService: ConfigService,
		private readonly cryptoService: CryptoService,
		private readonly emailService: EmailService,
		private readonly steamService: SteamService,
		private repository: RepositoryService			
	){}

	createHash(){
        return Math.floor(100000 + Math.random() * 900000);
    }

	async getAllUsers(token: string){
		const decoded = JWT.decode(token, this.configService.get('TOS_JWT_SECRET'));
		const userInfo = await this.accountModel.findOne({ _id: decoded.data.masterId });

		if(userInfo.plevel >= Plevel.Administrator){
			const users = await this.accountModel.find({})
			.select({ 
				block: true, lastLogin: true, 
				banned: true, plevel: true, 
				hashtag: true, bannedReason: true
			})
			.lean();

			return users;
		}
		else{
			throw new UnauthorizedException("Your account does not have permission to access this functionality.");
		}
	}

	async createUser(user: IUser, token: string | null = null){
		const hashedUsername = this.cryptoService.hashUsername(user.email);
		const hashedPassword = this.cryptoService.hashPassword(user.password);
		const emailToken = this.cryptoService.encryptEmail(user.email);

		const checkAccountMaster = await this.accountModel
		.findOne({ username: hashedUsername })
		.select({ plevel: true });

		if(checkAccountMaster)
			throw new HttpException("The informed user already exists in the database", HttpStatus.BAD_REQUEST);

		if(user.plevel > 1){
			try{
				if(token){
					const decoded = JWT.decode(token, this.configService.get('TOS_JWT_SECRET'));
					const userInfo = await this.accountModel.findOne({ _id: decoded.data.masterId });

					if(userInfo.plevel < Plevel.Administrator)
						throw new HttpException("Only administrators can apply plevel when creating accounts", HttpStatus.BAD_REQUEST);
				}
				else {
					throw new HttpException("Only administrators can apply plevel when creating accounts", HttpStatus.BAD_REQUEST);
				}
			}
			catch(e){
				throw new HttpException("An error occurred when trying to validate your access token", HttpStatus.BAD_REQUEST);
			}			
		}

		const ref = (user.ref) ? user.ref : user.email.substring(0, 6);
			
		const accountMaster = await this.accountModel.insertMany({
			hashtag: `${ ref.substring(0,10).toUpperCase() }#${this.createHash()}`,
			username: hashedUsername, 
			password: hashedPassword,
			optin: authenticator.generateSecret(),
			emailToken,
			plevel: user.plevel || 1,
			othersId: [] 
		});

		if(accountMaster && accountMaster.length > 0) {
			//const serverAccount = await this.repository.singUp(accountMaster[0]._id.toString(), user.email, user.password);
			///return { ...serverAccount, status: 200 };
		}
		else{
			throw new HttpException("Error when trying to create account, try again in a few minutes", HttpStatus.BAD_REQUEST);
		}
	}

	async updateUser(user: IUser, accountId: string, token: string, system: boolean = false){
		const decoded = JWT.decode(token, this.configService.get('TOS_JWT_SECRET'));
		const userInfo = await this.accountModel.findOne({ _id: decoded.data.masterId });

		if(userInfo.plevel < Plevel.Administrator && !system)
			throw new HttpException("Only administrators can apply plevel when creating accounts", HttpStatus.BAD_REQUEST);

		await this.accountModel.updateOne({ _id: accountId }, { $set: { 
			plevel: user.plevel,
			banned: user.banned,
			bannedReason: (user.banned) ? user.bannedReason : null, 
			banAdminId: (user.banned) ? decoded.data.masterId : null,
			banDatetime: (user.banned) ? new Date() : null
		} });

		return true;
	}

	async updateAccountInformations(accountId: string, data: any){
		await this.accountModel.updateOne({ _id: accountId }, { $set: data });
	}

	async loginSteam(steamId: string, token: string){
		try {
			let authSteamValidade = await this.steamService.verifySteamToken(token);

			if(!authSteamValidade)
				authSteamValidade = await this.steamService.verifySteamToken(token, true);

			console.log(authSteamValidade);

			if(authSteamValidade && authSteamValidade.response.params.steamid === steamId){
				const steamAuthId = authSteamValidade.response.params.steamid;
				const hashedUsername = this.cryptoService.hashUsername(steamAuthId);
				let userInfo: any = await this.accountModel.findOne({ username: hashedUsername });
	
				if(!userInfo){
					const ref = steamId.replace("@", "").substring(0, 6);
					const emailToken = this.cryptoService.encryptEmail(steamId);
					const hashedPassword = this.cryptoService.hashPassword(GUID.Generate());
				
					await this.accountModel.insertMany({
						hashtag: `${ ref.substring(0,10).toUpperCase() }#${this.createHash()}`,
						username: hashedUsername, 
						password: hashedPassword,
						optin: authenticator.generateSecret(),
						emailToken,
						emailValidation: true,
						plevel: 1,
						othersId: [steamId] 
					});
	
					userInfo = await this.accountModel.findOne({ username: hashedUsername, password: hashedPassword });
				}
	
				if(!userInfo)
					throw new UnauthorizedException("It was not possible to log in because your username was not found or the password was invalid.");
	
				if(userInfo.banned)
					throw new UnauthorizedException("Your account is banned, if you have any questions or wish to dispute the ban, please contact support on our website https://talesofshadowland.com");
				
				if(userInfo.block) {
					if(userInfo.blockTimeout > new Date().getTime())
						throw new UnauthorizedException(`Your account is blocked until this date: ${new Date(userInfo.blockTimeout).toISOString()}`);
				}
	
				await this.accountModel.updateOne({ _id: userInfo._id }, { $set: { lastLogin: new Date() } });
	
				const tokenAuth = JWT.sign({			
					exp: Math.floor(Date.now()) + (60 * 60 * 24 * 1000),
					data: { 
						masterId: userInfo._id,
						applicant: "X-Unreal-Engine",
						plevel: userInfo.plevel
					}
				}, this.configService.get('TOS_JWT_SECRET'), { algorithm: "HS256" });
	
				return { token: tokenAuth, id: userInfo._id, plevel: userInfo.plevel };
			}
			else {
				return null;
			}
		}
		catch (e) {
			console.log(e);
			return null;
		}
	}

	async login(user: LoginDTO, minPlevel: Plevel = Plevel.CommunityManager, recaptchaData: any = null, sendCodeEmail: boolean = false){
		const username = (user.username) ? user.username : user.email;

		if(!username || !user.password)
			throw new UnauthorizedException("Username or password is invalid.");

		const hashedUsername = this.cryptoService.hashUsername(username);
        const hashedPassword = this.cryptoService.hashPassword(user.password);

		let userInfo: any = await this.accountModel.findOne({ username: hashedUsername, password: hashedPassword });
		const scope = ApplicantByHeader(user.applicant);

		if(!userInfo){
			const hasUser = await this.accountModel.findOne({ username: hashedUsername });

			if(!hasUser){
				const ref = username.replace("@", "").substring(0, 6);
				const emailToken = this.cryptoService.encryptEmail(username);
			
				await this.accountModel.insertMany({
					hashtag: `${ ref.substring(0,10).toUpperCase() }#${this.createHash()}`,
					username: hashedUsername, 
					password: hashedPassword,
					optin: authenticator.generateSecret(),
					emailToken,
					emailValidation: true,
					plevel: 1,
					othersId: [] 
				});

				userInfo = await this.accountModel.findOne({ username: hashedUsername, password: hashedPassword });
			}
		}

		if(!userInfo)
			throw new UnauthorizedException("It was not possible to log in because your username was not found or the password was invalid.");

		if(userInfo.banned)
			throw new UnauthorizedException("Your account is banned, if you have any questions or wish to dispute the ban, please contact support on our website https://talesofshadowland.com");
		
		if(userInfo.block) {
			if(userInfo.blockTimeout > new Date().getTime())
				throw new UnauthorizedException(`Your account is blocked until this date: ${new Date(userInfo.blockTimeout).toISOString()}`);
			//else 
			//	await this.repository.removeBlockAccount(userInfo._id);
		}
		
		if(userInfo.plevel < minPlevel) {
			/*await this.repository.createLogReport("Login::LowPlevel", LogLevel.Important, JSON.stringify({
				user: user.username,
				userInfo,
				recaptchaData
			}));*/

			throw new UnauthorizedException("Your user does not have permission to access this area.");
		}
		else {
			//Email validation
			if(!userInfo.emailValidation) {
				if(sendCodeEmail){
					const validationCode = Math.floor(100000 + Math.random() * 900000);
					const hashCode = crypto.createHash('sha1').update(validationCode.toString()).digest('hex');
					await this.accountModel.updateOne({ _id: userInfo._id }, { $set: { emailValidationCode: hashCode, emailLastSendCode: new Date() } });
					await this.emailService.sendEmail("emailValidation", "✔ Account validation", userInfo.emailToken, { code: validationCode });
				}
				
				return { requiredAction: "emailValidation", accountId: userInfo._id }
			}
				
			//Validate 2factor if was a administrator plevel
			if(!userInfo.twoFactorEnabled && userInfo.plevel > 1 && scope !== Applicant.Client) {
				const accountName = this.cryptoService.decryptEmail(userInfo.emailToken);				
				const chl = authenticator.keyuri(accountName, process.env.APP_NAME, userInfo.optin);

				return { 
					requiredAction: "enableTwoFactor", 
					accountId: userInfo._id,
					qr: `http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${chl}&chld=H|0` 
				}
			}
			
			//Validate fingerprint authorization session
			let fingerprints = [];
			try { fingerprints = JSON.parse(userInfo.fingerprints); } catch {}

			if(!fingerprints.includes(user.fingerprint) && userInfo.twoFactorEnabled && !user.code && scope !== Applicant.Client)
				return { requiredAction: "validateTwoFactor", accountId: userInfo._id }
			else if(!fingerprints.includes(user.fingerprint) && userInfo.twoFactorEnabled && user.code && scope !== Applicant.Client){
				const validateCode = authenticator.verify({ token: user.code, secret: userInfo.optin });

				if(validateCode){
					const newFingerprintsList = new Set([ ...fingerprints, user.fingerprint ]);

					await this.accountModel.updateOne({ _id: userInfo._id }, { $set: { 
						fingerprints: JSON.stringify(Array.from(newFingerprintsList))
					} });
				}
			}
		}

		await this.accountModel.updateOne({ _id: userInfo._id }, { $set: { lastLogin: new Date() } });
			
		const token = JWT.sign({			
			exp: Math.floor(Date.now()) + (60 * 60 * 24 * 1000),
			data: { 
				masterId: userInfo._id,
				applicant: user.applicant,
				plevel: userInfo.plevel
			}
		}, this.configService.get('TOS_JWT_SECRET'), { algorithm: "HS256" });

		return { token, id: userInfo._id, plevel: userInfo.plevel };
	}

	async loginToServer(token: string){
		const decoded = JWT.decode(token, this.configService.get('TOS_JWT_SECRET'));
		
		const userInfo: any = await this.accountModel.findOne({ _id: decoded.data.masterId });

		if(userInfo){
			//let localUser = await this.repository.getAccount(decoded.data.masterId);

			//if(!localUser)
			//	localUser = await this.repository.singUpLocalAccount(userInfo._id, userInfo.username, userInfo.password, userInfo.emailToken, userInfo.optin);

			//if(localUser.banned)
			//	throw new UnauthorizedException("Your account is banned, if you have any questions or wish to dispute the ban, please contact support on our website https://talesofshadowland.com");
			
			/*if(localUser.block) {
				if(localUser.blockTimeout > new Date().getTime())
					throw new UnauthorizedException(`Your account is blocked until this date: ${new Date(localUser.blockTimeout).toISOString()}`);
				else 
					await this.repository.removeBlockAccount(localUser.masterId);
			}*/

			const createKeys = crypto.createDiffieHellman(512);
			createKeys.generateKeys();
			const publicKey = createKeys.getPublicKey('hex');

			/*await this.repository.updateAccountInformations(localUser.masterId, { 
				diffKey: createKeys.computeSecret(publicKey, "hex", "hex") 
			});*/

			/*const token = JWT.sign({			
				exp: Math.floor(Date.now()) + (60 * 60 * 24),
				data: { 
					masterId: userInfo._id,
					serverId: localUser.serverId,
					applicant: decoded.data.applicant,
					key: publicKey
				}
			}, this.configService.get('TOS_JWT_SECRET'), { algorithm: "HS256" });

			return { token };*/
		}
		else{
			throw new UnauthorizedException("It was not possible to log in because your username was not found or the password was invalid.");
		}
	}

	verify(token: string){
		try{
			const decoded = JWT.verify(
				token, 
				this.configService.get('TOS_JWT_SECRET'), 
				{ algorithm: "HS256" }
			);

			return decoded;
		}
		catch{ return false; }
	}

	decodeToken(token: string){
		try{
			const decoded = JWT.decode(
				token, 
				this.configService.get('TOS_JWT_SECRET'), 
				{ algorithm: "HS256" }
			);
			
			return decoded;
		}
		catch(e){
			console.log(e); 
			return false; 
		}
	}

	/*async changePassword(masterId: string, oldPassword: string, newPassword: string) : Promise<boolean> {
		return this.repository.changePassword(masterId, oldPassword, newPassword);
	}*/

	/*validateEmail(masterId: string, code: string) : Promise<boolean> {
		const hashedCode = crypto.createHash('sha1').update(code).digest('hex');
		return this.repository.validateEmail(masterId, hashedCode);
	}*/

	async enableT2f(payload: LoginDTO) {
		try{
			const validationRecaptcha = await firstValueFrom(
				this.httpService.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_PRIVATE}&response=${payload.token}`),
			);
	
			if (!validationRecaptcha.data.success)
				throw new UnauthorizedException("reCAPTCHA validation failed");

			const hashedUsername = this.cryptoService.hashUsername(payload.username);
        	const hashedPassword = this.cryptoService.hashPassword(payload.password);

			const userInfo = await this.accountModel.findOne({ username: hashedUsername, password: hashedPassword });
	
			if(!userInfo)
				throw new UnauthorizedException("It was not possible to log in because your username was not found or the password was invalid.");
	
			const validateCode = authenticator.verify({ token: payload.code, secret: userInfo.optin });
	
			if(!validateCode)
				throw new UnauthorizedException("Invalid code Unable to activate two-factor authentication.");
	
			let fingerprints = [];
			try { fingerprints = JSON.parse(userInfo.fingerprints); } catch {}
			const newFingerprintsList = new Set([ ...fingerprints, payload.fingerprint ]);

			await this.accountModel.updateOne({ _id: userInfo._id }, { $set: {
				twoFactorEnabled: true,
				fingerprints: JSON.stringify(Array.from(newFingerprintsList))
			} });
				
			return { status: 200 };
		}
		catch(e){
			return { status: 500, message: e.message };
		}		
	}

	async banAccount(
		accountId: string,
		bannedReason: string,
		banAdminId: string
	) {
		await this.accountModel.updateOne({ _id: accountId }, { $set: { 
			banned: true,
			bannedReason: bannedReason, 
			banAdminId: banAdminId,
			banDatetime: new Date()
		} });
	}

	async sendSteamEmail(){
		let emails = new Set([...fs.readFileSync("sended.txt", "utf-8").split("\r\n")]);

		//await this.emailService.sendEmail("emailPesquisa", "😀 Tales Of Shadowland - Pesquisa", "test-1dyac9sm0@srv1.mail-tester.com", {});
		
		for (const email of emails) {
			await this.emailService.sendEmail("emailPesquisa", "😀 Tales Of Shadowland - Pesquisa", email, {});
			console.log(`Email enviado para: ${email}`);
			await new Promise(resolve => setTimeout(resolve, 2000));
		}

		console.log(`Finalizado!`);
	}
}
