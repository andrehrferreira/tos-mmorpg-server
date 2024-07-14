import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

@Entity('guilds')
@Index("idx_guild_id", ["id"])
@Index("idx_guild_owner", ["owner"])
export class GuildEntity {
    @PrimaryColumn({ nullable : false })
    id: string;

    @Column({ nullable : false, default: 1 })
    owner: string;

    @Column({ nullable : false })
    guildName: string;
    
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createAt: Date;

    @Column({ nullable : false, default: "[]" })
    members: string;

    @Column({ nullable : false, default: "{}" })
    flag: string;

    @Column({ nullable : false, default: 100 })
    maxMembers: number;

    @Column({ nullable : false, default: 1 })
    level: number;

    @Column({ nullable : false, default: "[]" })
    requests: string;
}