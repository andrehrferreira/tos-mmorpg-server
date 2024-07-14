import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from "@nestjs-modules/mailer";
import { CryptoService } from './crypto.service';

@Injectable()
export class EmailService {
    constructor(
        private readonly cryptoService: CryptoService,
        private readonly mailerService: MailerService,
    ){ }

    sendEmail(template: string, subject: string, toEncrypt: string, context: any) {
        try{
            //const to = this.cryptoService.decryptEmail(toEncrypt);

            return this.mailerService.sendMail({
                to: toEncrypt, subject, context: { subject, ...context }, template,
                from: process.env.EMAIL_FROM,             
            }).then(async (success) => {
                Logger.log(`Email sent to ${toEncrypt} : ${success.messageId}`, "SendEmail");
            }).catch((err) => {
                Logger.error(err);
            });
        }
        catch{
            return null;
        }
    }
}