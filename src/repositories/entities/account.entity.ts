/*import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { BaseEntity } from "./base.entity";

@Entity('accounts')
@Index("idx_account_masterId", ["masterId"])
@Index("idx_account_emailValidation", ["emailValidation"])
@Index("idx_account_username", ["username"])
@Index("idx_account_password", ["password"])
@Index("idx_account_login", ["username", "password"])
@Index("idx_account_pin", ["pin"])
@Index("idx_account_optin", ["optin"])
@Index("idx_account_block", ["block"])
@Index("idx_account_banned", ["banned"])
export class AccountEntity extends BaseEntity {
    @Column('uuid')
    masterId: string;
    
    @PrimaryGeneratedColumn('uuid')
    serverId: string;

    @Column('simple-array')
    othersId: string[];

    @Column({ nullable: true, unique: true })
    emailToken: string;

    @Column({ nullable: true })
    emailValidationCode: string;

    @Column({ nullable: false, default: false })
    emailValidation: boolean;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    emailLastSendCode: Date;

    @Column({ unique: true })
    username: string;

    @Column({ nullable: false })
    password: string;

    @Column({ default: 1 })
    plevel: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    lastLogin: Date;

    @Column({ nullable: true })
    pin: string;

    @Column({ nullable: false })
    optin: string;

    @Column({ nullable: false, default: false })
    twoFactorEnabled: boolean;

    @Column({ nullable: true })
    fingerprints: string;

    @Column({ nullable: false, default: false })
    block: boolean;

    @Column({ nullable: true })
    blockTimeout: number;

    @Column({ nullable: false, default: false })
    banned: boolean;

    @Column({ nullable: true })
    bannedReason: string;

    @Column({ nullable: true })
    banAdminId: string;

    @Column({ nullable: true })
    banDatetime: Date;

    @Column({ nullable: true })
    diffKey: string;
}*/