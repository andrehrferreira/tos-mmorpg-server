import * as crypto from 'crypto';
import * as CryptoJS from 'crypto-js';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
    public hashUsername(username: string): string {
        return crypto.createHash('sha1').update(username).digest('hex');
    }

    public hashPassword(password: string): string {
        return crypto.createHash('sha256').update(password).digest('hex');
    }

    public encryptEmail(email: string): string {
        return CryptoJS.AES.encrypt(email, process.env.TOS_EMAIL_SECRET).toString();
    }

    public decryptEmail(email: string): string {
        return CryptoJS.AES.decrypt(email, process.env.TOS_EMAIL_SECRET).toString(CryptoJS.enc.Utf8);
    }
}