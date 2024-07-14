import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

@Entity('items')
@Index("idx_item_id", ["id"])
@Index("idx_item_owner", ["owner"])
@Index("idx_item_containerId", ["containerId"])
export class ItemEntity {
    @PrimaryColumn({ nullable : false })
    id: string;

    @Column({ nullable : false, default: 1 })
    owner: string;

    @Column({ nullable : false })
    itemName: string;

    @Column({ nullable : false, default: 1 })
    amount: number;
    
    @Column({ nullable : true })
    createByAdmin: string;

    @Column({ nullable : true })
    containerId: string;

    @Column({ nullable : true, default: 0 })
    slotId: number;

    @Column({ nullable : true })
    props: string
}