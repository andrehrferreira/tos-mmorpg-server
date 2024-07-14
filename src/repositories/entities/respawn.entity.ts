import { Entity, Column, Index, PrimaryColumn } from 'typeorm';

@Entity('respawns')
@Index("idx_respawn_id", ["id"])
@Index("idx_respawn_map", ["map"])
export class RespawnEntity {
    @PrimaryColumn({ nullable : false })
    id: string;

    @Column({ nullable : false })
    map: string;

    @Column({ nullable : false })
    x: number;

    @Column({ nullable : false })
    y: number;

    @Column({ nullable : false })
    z: number;

    @Column({ nullable : false, default: 60 })
    timer: number;

    @Column({ nullable : false })
    respawnOnStart: boolean;

    @Column({ nullable : false, default: 0 })
    timeout: number;

    @Column({ nullable : false })
    entities: string;
}