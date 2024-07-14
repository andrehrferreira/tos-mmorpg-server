import { 
	Controller, Post, Body, 
	Response, UseFilters, Query, UnauthorizedException
} from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from "rxjs";

import { ApiExcludeEndpoint, ApiExcludeController } from '@nestjs/swagger';

import { AuthService } from '@services';
import { HttpExceptionFilter } from '@utils';
import { Plevel } from '@enums';

@ApiExcludeController()
@Controller("dash")
export class DashboardAuthController {
	constructor(
		private readonly httpService: HttpService,
		private readonly authService: AuthService
	) {}

	@ApiExcludeEndpoint()
	@Post("/login")
	@UseFilters(new HttpExceptionFilter())
	async login(@Body() body, @Response() res, @Query("sendcode") sendcode) {	
		try {
			const validationRecaptcha = await firstValueFrom(
				this.httpService.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_PRIVATE}&response=${body.token}`),
			);
	  
			if (validationRecaptcha.data.success) {
				const data = await this.authService.login(body, Plevel.CommunityManager, validationRecaptcha.data, (sendcode === "true"));
				res.status(200).send({ status: 200, ...data });	
			} 
			else {
				throw new UnauthorizedException("reCAPTCHA validation failed");
			}
		} 
		catch (error) {
			throw new UnauthorizedException(error.message );
		}
	}
}
