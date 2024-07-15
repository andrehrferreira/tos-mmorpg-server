import { Entity, PrimaryColumn, Column, Index } from 'typeorm';
import { BaseEntity } from './base.entity';
import { MapEventType } from "@enums";

@Entity('characters')
@Index("idx_character_id", ["id"])
@Index("idx_character_accountId", ["accountId"])
@Index("idx_character_hashtag", ["hashtag"])
export class CharacterEntity extends BaseEntity {
    @PrimaryColumn({ nullable : false })
    id: string;

    @Column({ nullable : false })
    accountId: string;

    @Column({ nullable : false, default: false })
    admin: boolean;

    @Column({ nullable : false })
    name: string;

    @Column({ nullable : false })
    hashtag: string;
    
    @Column({ nullable : false })
    visual: string;

    @Column({ nullable : true })
    guildId: string;

    @Column({ nullable : true })
    guildName: string;

    @Column({ nullable: false, default: 5 })
    speed: number;

    @Column({ nullable: false, default: 5 })
    adminSpeed: number;

    @Column({ nullable : false })
    skills: string;

    @Column({ nullable : true })
    proficiencies: string;

    @Column({ nullable : false })
    inventory: string;

    @Column({ nullable : false })
    inventoryId: string;

    @Column({ nullable : true })
    actionbar: string;

    @Column({ nullable : false, default: false })
    pvpflag: boolean;

    @Column({ nullable : false, default: 1 })
    str: number;

    @Column({ nullable : false, default: 1 })
    dex: number;

    @Column({ nullable : false, default: 1 })
    int: number;

    @Column({ nullable : false, default: 1 })
    vig: number;

    @Column({ nullable : false, default: 1 })
    agi: number;

    @Column({ nullable : false, default: 1 })
    luc: number;
    
    @Column({ nullable : false, default: 100 })
    life: number;

    @Column({ nullable : false, default: 10 })
    mana: number;

    @Column({ nullable : false, default: 10 })
    stamina: number;

    @Column({ nullable : false })
    map: string;

    @Column({ nullable : false })
    x: number;

    @Column({ nullable : false })
    y: number;

    @Column({ nullable : false })
    z: number;

    @Column({ nullable : false })
    r: number;

    @Column({ nullable : true })
    chestArmor: string;

    @Column({ nullable : true })
    helmetArmor: string;

    @Column({ nullable : true })
    bootsArmor: string;

    @Column({ nullable : true })
    glovesArmor: string;

    @Column({ nullable : true })
    pantsArmor: string;

    @Column({ nullable : true })
    robe: string;

    @Column({ nullable : true })
    cloak: string;

    @Column({ nullable : true })
    ring01: string;

    @Column({ nullable : true })
    ring02: string;

    @Column({ nullable : true })
    necklance: string;

    @Column({ nullable : true })
    offhand: string;

    @Column({ nullable : true })
    mainhand: string;

    @Column({ nullable : true })
    instrument: string;

    @Column({ nullable : true })
    pet: string;

    @Column({ nullable : true })
    mount: string;

    @Column({ nullable : true })
    pickaxetool: string;

    @Column({ nullable : true })
    axetool: string;

    @Column({ nullable : true })
    scythetool: string;

    @Column({ nullable : false, default: 0 })
    karma: number;

    @Column({ nullable : false, default: 0 })
    playerKills: number;

    @Column({ nullable : false, default: 0 })
    criminalStatus: number;

    @Column({ nullable : false, default: false })
    mounted: boolean;

    @Column({ nullable : true })
    mountId: string;

    @Column({ nullable : true })
    pets: string;

    @Column({ nullable : false, default: 0 })
    states: number;

    @Column({ nullable : false, default: 0 })
    statsPoints: number;

    @Column({ nullable : false, default: 225 })
    statsCap: number;

    @Column({ nullable : true })
    party: string;

    @Column({ nullable : false, default: 1 })
    dailyQuestsIndex: number;

    @Column({ nullable : false, default: "{}" })
    dailyQuestsMetadata: string;

    @Column({ nullable : false, default: "[]" })
    quests: string;

    @Column({ nullable : false, default: "[]" })
    friends: string;

    @Column({ nullable : false, default: "[]" })
    friendsRequests: string;

    //Events
    @Column({ nullable : true, default: false })
    inEvent: boolean;

    @Column({ nullable : true, default: MapEventType.None })
    eventMapType: MapEventType;

    @Column({ nullable : true, default: "" })
    eventMapId: string;

    @Column({ nullable : true, default: "" })
    eventMap: string;

    @Column({ nullable : true, default: 0 })
    eventX: number;

    @Column({ nullable : true, default: 0 })
    eventY: number;

    @Column({ nullable : true, default: 0 })
    eventZ: number;

    @Column({ nullable : true, default: "[]" })
    archivements: string;
}