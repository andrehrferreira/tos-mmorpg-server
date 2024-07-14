import {
    Entity, PrimaryGeneratedColumn, Column, 
    Index, CreateDateColumn 
} from 'typeorm';

import { LogLevel } from '@enums';

@Entity('logs')
@Index("idx_logger_id", ["id"])
@Index("idx_logger_type", ["type"])
export class LogsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @Column({ nullable : false })
    type: string;

    @Column({ nullable : false, default: LogLevel.Info })
    level: LogLevel;

    @Column({ nullable : true })
    snapshot: string;
}