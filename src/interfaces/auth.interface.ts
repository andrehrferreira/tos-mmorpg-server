export interface IUser {
    ref: string;
    username: string;
    email: string;
    plevel: number;
    password: string;
    fingerprint?: string;
    agent?: string;
    banned?: boolean;
    bannedReason?: string;
}