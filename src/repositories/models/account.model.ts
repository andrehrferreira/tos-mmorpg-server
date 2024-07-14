import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { now } from "mongoose";

export interface IAccount {
    hashtag: string;
    othersId?: string[];
    emailToken: string;
    emailValidationCode?: string;
    emailValidation: boolean;
    emailLastSendCode: Date;
    username: string;
    password: string;
    plevel: number;
    lastLogin: Date;
    pin?: string;
    optin?: string;
    twoFactorEnabled: boolean;
    fingerprints: string;
    block: boolean;
    blockTimeout: number;
    banned: boolean;
    bannedReason: string;
    banAdminId: string;
    banDatetime: Date;
}

@Schema({ timestamps: true, collection: "Accounts" })
export class AccountDocument extends Document implements IAccount {
    @Prop({ index: true, unique: true, required: true })
    hashtag: string;

    @Prop({ default: [] })
    othersId: string[];

    @Prop({ index:true, type: String, unique: true })
    emailToken: string;

    @Prop({ index:true, type: String })
    emailValidationCode: string;

    @Prop({ index: true, default: false, type: Boolean })
    emailValidation: boolean;

    @Prop({ default: now() })
    emailLastSendCode: Date;

    @Prop({ index:true, type: String, unique: true, required: true })
    username: string;

    @Prop({ index:true, type: String, required: true })
    password: string;

    @Prop({ default: 1, type: Number, required: true })
    plevel: number;

    @Prop({ default: now() })
    lastLogin: Date;

    @Prop({ type: String })
    pin: string;

    @Prop()
    optin: string;

    @Prop({ default: false })
    twoFactorEnabled: boolean;

    @Prop()
    fingerprints: string;

    @Prop({ default: false })
    block: boolean;

    @Prop()
    blockTimeout: number;

    @Prop({ default: false })
    banned: boolean;

    @Prop()
    bannedReason: string;

    @Prop()
    banAdminId: string;

    @Prop()
    banDatetime: Date;
}

export const AccountsSchema = SchemaFactory.createForClass(AccountDocument);
export default AccountsSchema;