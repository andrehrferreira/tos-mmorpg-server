import { PrimaryColumn, Entity, Column, Index } from 'typeorm';

@Entity('containers')
@Index("idx_container_containerId", ["containerId"])
export class ContainerEntity {
    @PrimaryColumn({ nullable : false })
    containerId: string;

    @Column({ nullable : false })
    characterId: string;

    @Column({ nullable : true })
    items: string;
}