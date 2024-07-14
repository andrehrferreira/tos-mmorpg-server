import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

export enum MapsInstanceType {
    NotSet,
    IndividualInstance,
    PartyInstance,
    GuildInstance
}

@Entity('server-maps')
@Index("idx_map_id", ["id"])
@Index("idx_map_accountId", ["accountId"])
@Index("idx_map_hashtag", ["hashtag"])
export class MapsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable : false })
    name: string;

    @Column({ nullable : false })
    levelInEngine: string;

    @Column({ default: false, nullable : false })
    instantiable: boolean;

    @Column({ default: MapsInstanceType.NotSet, nullable : true })
    instanceType: MapsInstanceType;

    @Column({ nullable : true })
    serverProxy: string;
}