export interface AccountDTO {
    masterId: string;
    fingerprints?: string;
    plevel: number;
    pin?: string;
    optin: string;
    twoFactorEnabled: boolean;
    emailToken: string;
    emailValidation: boolean;
    block: boolean;
    blockTimeout: number;
    banned: boolean;
    bannedReason: string;
    banDatetime: Date;
}

export interface LoginDTO {
    email?: string;
    username: string;
    password: string;
    accountId?: string;
    agent?: string;
    fingerprint?: string;
    token?: string;
    code?: string;
    applicant?: string;
}

export interface BlockDTO {
    accountId: string;
    reason: string;
    time: number;
}