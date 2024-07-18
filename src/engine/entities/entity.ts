import { Subject, Subscription } from "rxjs";
import { GUID } from "@utils";
import { Logger } from "@nestjs/common";

import { 
    Maps, Transform, Vector3, 
    BaseAction, Actions, Respawn,
    Condition, ConditionType, Container, Team,
    Player, WeaponType, Loot, Random, Party, 
    BuffDebuff, Guild, QueueBuffer
} from "@engine";

import { 
    ICheckHit, ICheckHitAutoAttack, 
    ILevelExperience, ISkillValue 
} from "@interfaces";

import { 
    ActionCostType, Dices, DamageType, SkillName, 
    getSkillNameString, EventType, HealType,
    StatusType 
} from "@enums";

import { 
    Packet, packetActionAreaEntity,
    packetActionEntity, packetCancelTargetEntity,
    packetHealEntity, packetPlayMontageEntity,
    packetSelectTargetEntity, packetTakeDamageEntity,
    packetTakeMissEntity, packetCreateEntity, 
    packetEventEntity, packetRemoveEntity,
    packetSystemMessage, packetUpdateEntity,    
    packetSkillExperience, packetEntityDie,
    packetDissolveEntity, packetEventReviveEntity,
    packetSpecialMessage, packetUpdateSkillInfo,
    packetSay
} from "@network";

import { LinkedList } from "../utils";
import { StateFlags, EntityStates, BuffDebuffStates } from "../core/flags";

export const levelsExperience: ILevelExperience[] = [
    { level: 1, experience: 1 },
    { level: 2, experience: 150 },
    { level: 3, experience: 600 }, 
    { level: 4, experience: 2150 }, 
    { level: 5, experience: 3250 }, 
    { level: 6, experience: 4574 },
    { level: 7, experience: 6124 },
    { level: 8, experience: 9480 },
    { level: 9, experience: 11880 },
    { level: 10, experience: 39600 },
    { level: 11, experience: 49500 }, 
    { level: 12, experience: 59400 },
];

export enum EntitiesKind {
    None = 0,
    Player = 1,
    Monster = 2,
    Summon = 3,
    NPC = 4,
    Mount = 5,
    Pet = 6
}

export enum Stats {
    Str,
    Dex,
    Int,
    Vig,
    Agi,
    Luc
}

export class Entity extends LinkedList<Entity> {
    protected logger: Logger = new Logger('Entity');

    public static Entities: Map<string, { new (): any }> = new Map<string, { new (): any }>();
    public static Summons: Map<string, { new (owner: Player): any }> = new Map<string, { new (owner: Player): any }>();
    public static Pets: Map<string, { new (owner: Player): any }> = new Map<string, { new (owner: Player): any }>();
    public namespace: string = "";
    public isCreature: boolean = false;

    //Network
    public id: string;
    public socketId : string;
    public socket : any;
    public characterId: string = null;
    public lastUpdate: number;
    public sendEntityChange: boolean;
    public customVisual: string = null;
    public multipleVisual: Array<string> = new Array<string>();
    public updateIntensity: number = 3;
    public admin: boolean = false;
    public removed: boolean = false;

    //Map / Position
    public map: Maps;
    public mapIndex: string;    
    public transform: Transform = new Transform(); 
    public respawnPosition: Vector3 = new Vector3();
    public respawn: Respawn = null;
    public movementDistance: number = 600;
    public maxDistanceToRespawn: number = 3000;
    public speed: number = 700;
    public respawnCustomList: string[] = null;
    
    // Character info
    public areaOfInterece: Array<Entity> = new Array<Entity>();
    public name: string;
    public states: StateFlags = new StateFlags(EntityStates.None);
    public buffsDebuffsState: StateFlags = new StateFlags(BuffDebuffStates.None);
    public conditions: Array<Condition> = new Array<Condition>();
    public buffsDebuffs: Array<BuffDebuff> = new Array<BuffDebuff>();
    public kind: EntitiesKind = EntitiesKind.None;
    public team: Team;
    public teamOwner: Entity = null;
    public damageCauser: Map<string, number> = new Map<string, number>();
    public inAction: boolean = false;
    public inHealAction: boolean = false;
    public destroyOnDie: boolean = false;
    public guild: Guild = null;

    //Target
    public target: string = null;
    public targetActor: Entity = null;
    public targetOnDie: Subscription;
    public targetOnDestroy: Subscription;

    //Loot
    public loot: Loot;
    public skinnerResources: { new (): any };
    public skinnerTick: number = 0; 
    public skinnerAmount: number = 3;
    public skinnerGainExp: number = 1;
    public dieTimeout: number;

    //Stats
    public statsPoints: number = 0;
    public statsCap: number = 225;
    public str: number = 0;
    public dex: number = 0;
    public int: number = 0;
    public vig: number = 0;
    public agi: number = 0;
    public luc: number = 0;
    public life: number = 0;
    public maxLife: number = 0;
    public lifeByte: number = 0;
    public mana: number = 0;
    public maxMana: number = 0;
    public stamina: number = 0;
    public maxStamina: number = 0;
    public bonusStr: number = 0; 
    public bonusDex: number = 0; 
    public bonusInt: number = 0; 
    public bonusVig: number = 0; 
    public bonusAgi: number = 0; 
    public bonusLuc: number = 0; 

    public fixedLife: boolean = false;
    public skills: Map<SkillName, ISkillValue> = new Map<SkillName, ISkillValue>();
    public inventory: Container;
    public karma: number = 0;
    public isDead: boolean = false;
    public sprint: boolean = false;

    //Resistences
    public physicalResistence: number = 0;
    public fireResistence: number = 0;
    public coldResistence: number = 0;
    public poisonResistence: number = 0;
    public energyResistence: number = 0;
    public lightResistence: number = 0;
    public darkResistence: number = 0;
    public bonusPhysicalResistence: number = 0;
    public bonusFireResistence: number = 0;
    public bonusColdResistence: number = 0;
    public bonusPoisonResistence: number = 0;
    public bonusEnergyResistence: number = 0;
    public bonusLightResistence: number = 0;
    public bonusDarkResistence: number = 0;

    //Statics
    public lifeRegeneration: number = 0;
    public manaRegenegation: number = 0;
    public staminaRegenegation: number = 0;
    public bonusPhysicalDamage: number = 0;
    public bonusMagicDamage: number = 0;
    public weaponDamage: string = "";
    public weaponSpeed: number = 0;
    public criticalChance: number = 0;
    public criticalDamage: number = 0;
    public armor: number = 0;
    public damageReduction: number = 0;    
    public dodgeChance: number = 0;
    public reflectionPhysicalDamage: number = 0;
    public refrectionMagicDamage: number = 0;
    public lowerManaCost: number = 0;    
    public lowerStamCost: number = 0;    
    public fasterCasting: number = 0;
    public cooldownReduction: number = 0;

    //Elemental Damage
    public fireDamage: number = 0;
    public coldDamage: number = 0;
    public energyDamage: number = 0;
    public poisonDamage: number = 0;
    public lightDamage: number = 0;
    public darkDamage: number = 0;

    //Bonus collect
    public bonusCollectsMineral: number = 0;
    public bonusCollectsSkins: number = 0;
    public bonusCollectsWood: number = 0;

    //Events
    public OnDie: Subject<Entity> = new Subject<Entity>();
    public OnDetroy: Subject<Entity> = new Subject<Entity>();
    public OnConditionChanged: Subject<Condition> = new Subject<Condition>();
    public OnBuffDebuffChanged: Subject<BuffDebuff> = new Subject<BuffDebuff>();    

    //Party
    public party: Party = null;
    public partyOwner: Player = null;

    //Equipament Heavy
    public hasMediumEquipamentPart = false;
    public hasHeavyEquipamentPart = false;
    
    constructor(){
        super();
        this.id = GUID.NewID();
        this.append(this);
        this.calculateStats();
        this.calculateStatics();
        this.loot = new Loot(this);
        this.inventory = new Container(this);
        setInterval(this.regenStats.bind(this), 3000);
        setInterval(this.update.bind(this), 1000);
    }

    public static getEntityBase(ref: string){
        return (Entity.Entities.has(ref)) ? Entity.Entities.get(ref) : null;
    }

    public static addEntityBase(refs: string[] | string, clas: any){
        if(Array.isArray(refs)) {
            for(let namespace of refs){
                Entity.Entities.set(namespace, clas);
                Entity.Entities.set(namespace.toLocaleLowerCase(), clas);
            } 
        }
        else {
            Entity.Entities.set(refs, clas);
            Entity.Entities.set(refs.toLocaleLowerCase(), clas);
        }  
    }

    public static create(entityName: string) : Entity {
        if(Entity.Entities.has(entityName)){
            const entityClass = Entity.Entities.get(entityName);
            const entity = new entityClass() as Entity;
            
            if(entity.multipleVisual.length)
                entity.customVisual = Random.ArrRandom<string>(entity.multipleVisual);

            entity.init();
            
            return entity;
        }

        return null;
    }

    public init(){}

    public update(){
        if(!this.map || this.removed)
            return;
        
        if(!this.removed){
            this.updateAreaOfInterest();

            if(!this.isDead){  
                //this.areaOfInterece.map((entity) => packetUpdateEntity.send(this, entity, false));

                if(this.conditions.length > 0){
                    this.conditions.forEach((condition, index) => {
                        if(condition){
                            condition.update(this);
        
                            if(condition.Lifetime <= 0){
                                condition.remove(this);
                                this.removeCondition(index);                            
                            }                            
                        }
                    });
                }

                if(this.buffsDebuffs.length > 0){
                    this.buffsDebuffs.forEach((buffsDebuffs, index) => {
                        if(buffsDebuffs){
                            buffsDebuffs.update(this);
        
                            if(buffsDebuffs.Lifetime <= 0){
                                buffsDebuffs.remove(this);
                                this.removeBuffDebuff(index);                            
                            }                            
                        }
                    });
                }
            }
            else {
                if(
                    (this.skinnerTick === 0 && this.loot && this.loot.count() <= 0 && this.dieTimeout < new Date().getTime()) || 
                    this.dieTimeout < new Date().getTime()
                ){
                    this.areaOfInterece.map((entity) => packetDissolveEntity.send(this, entity));
                    this.OnDetroy.next(this);
                    this.map.removeEntity(this);
                    this.destroy();
                }
            }
        }
    }

    public tick(tickNumber: number) {   
        if(!this.removed){
            this.isDead = (this.life <= 0);
            this.updateAreaOfInterest();

            if(this.isDead)
                this.addState(EntityStates.Dead);
              
            this.areaOfInterece.map((entity) => packetUpdateEntity.send(this, entity, false));
        }         
        
        if(this.lastUpdate < new Date().getTime() && this.socket) {
            this.removed = true;
            Player.onlinePlayers.delete(this.characterId);
            this.logger.verbose(`Client disconnected: ${this.socket.id} | Char: ${this.characterId} (${this.name})`);
            this.socket.close();   
            this.destroy(); 
        }
    }

    public destroy() : void {
        if(this instanceof Player)
            Player.onlinePlayers.delete(this.characterId);
        
        this.removed = true;
        this.map?.removeEntity(this);
        this.map = null;
        this.remove(this);
        this.conditions = [];
        this.OnDetroy.next(this);
        QueueBuffer.removeSocket(this.mapIndex);
    }

    //Network
    public getSocketId() : string {
        return this.socketId;
    }

    public broadcast(packet: Packet, data: any = null){
        const entities = new Set([...this.areaOfInterece, this]);
        entities.forEach((entity) => packet.send(this, entity, data));
    }

    public updateLastInteract() : void {
        this.lastUpdate = new Date().getTime() + (60 * 1000);
    }

    public async save(){}

    //Stats
    public calculateStats() : void {
        if(!this.fixedLife)
            this.maxLife = 10 + ((this.vig + this.bonusVig) * 5) + (this.str + this.bonusStr); 
        
        this.maxStamina = 10 + ((this.str + this.bonusStr) * 2) + ((this.dex + this.bonusDex) * 3) + (this.vig + this.bonusVig);
        this.maxMana = 10 + ((this.int + this.bonusInt) * 3); 
    }

    public restoreStats() : void {
        this.life = this.maxLife;
        this.mana = this.maxMana;
        this.stamina = this.maxStamina;
    }

    public regenStats() : void {
        if(!this.map || this.removed)
            return;

        if(!this.removed && !this.isCreature){
            if(!this.states?.hasFlag(EntityStates.Dead)){
                let lifeRegen = Math.max(1, Math.round(1 + (this.lifeRegeneration / 10)));
                let manaRegen = Math.max(1, Math.round(3 + (this.manaRegenegation / 10)));
                let stamRegen = Math.max(1, Math.round(10 + (this.staminaRegenegation / 10)));                
                stamRegen = (!this.sprint) ? stamRegen : -10;  
    
                this.life = Math.max(Math.min(this.life + lifeRegen, this.maxLife), 0);

                if(this.hasMediumEquipamentPart || this.hasHeavyEquipamentPart)
                    manaRegen = Math.round(manaRegen / 2);

                this.mana = Math.max(Math.min(this.mana + manaRegen, this.maxMana), 0);

                if(!this.hasHeavyEquipamentPart)
                    stamRegen = Math.round(stamRegen * 2);
                    
                this.stamina = Math.max(Math.min(this.stamina + stamRegen, this.maxStamina), 0);
            }
        }        
    }

    public addStatsPoint() : void {
        const points = (this.statsPoints) ? this.statsPoints : 0;
        const cap = (this.statsCap) ? this.statsCap : 225;
        const statsUsage = this.str + this.dex + this.int + this.vig + this.agi + this.luc + points;

        if(statsUsage < cap) {            
            this.statsPoints++;
            packetSpecialMessage.send(this, `You gained 1 status point`);
            packetSystemMessage.send(this, "You have received 1 stat point that can be assigned to your character");   
            this.onStatsChange();
        }
    }

    public onStatsChange(){}

    public addStat(stat: Stats) : void {
        const points = (this.statsPoints) ? this.statsPoints : 0;
        const cap = (this.statsCap) ? this.statsCap : 225;
        const statsUsage = this.str + this.dex + this.int + this.vig + this.agi + this.luc;

        if(points > 0 && cap >= statsUsage){
            this.statsPoints--;

            switch(stat){
                case Stats.Str: this.str++; break;
                case Stats.Dex: this.dex++; break;
                case Stats.Int: this.int++; break;
                case Stats.Vig: this.vig++; break;
                case Stats.Agi: this.agi++; break;
                case Stats.Luc: this.luc++; break;
            }

            this.calculateStats();
            this.save();
        }
        else {
            this.statsPoints = 0;
            this.calculateStats();
            this.save();
        }
    }

    //Statics
    public calculateStatics(): void {
        const baseResistences = this.getSkillValue(SkillName.MagicResistence);
        this.physicalResistence = Math.min(this.bonusPhysicalResistence, 70);
        this.fireResistence = Math.min((baseResistences * 2) + this.bonusFireResistence, 70);
        this.coldResistence = Math.min((baseResistences * 2) + this.bonusColdResistence, 70);
        this.poisonResistence = Math.min((baseResistences * 2) + this.bonusPoisonResistence, 70);
        this.energyResistence = Math.min((baseResistences * 2) + this.bonusEnergyResistence, 70);
        this.lightResistence = Math.min(baseResistences + this.bonusLightResistence, 70);
        this.darkResistence = Math.min(baseResistences + this.bonusDarkResistence, 70);
    }

    //Map
    public setMap(map: Maps, id: string) : void { 
        this.map = map;
        this.mapIndex = id;

        if(this.socket)
            this.socket.entityId = id;
    }

    public updatePosition(location: Vector3) : void {
        if(this.transform.position.diff(location)){
            this.transform.position = location;
            //this.transform.rotation = new Rotator(0, 0, rotation);
        }
        /*else if(this.transform.rotation.diff(new Rotator(0, 0, rotation))){
            this.transform.rotation = new Rotator(0, 0, rotation);
            this.sendEntityChange = true;
        }*/
    }

    //Events
    public updateEvent(data: any) : void {
        this.areaOfInterece.map((entity) => packetEventEntity.send(this, entity, data));
    }

    public updatePlayMontage(index: number) : void {
        this.areaOfInterece.map((entity) => packetPlayMontageEntity.send(this, entity, index));
    }

    public preCast(index: number){
        try{
            if(index >= 0){
                const action = Actions.findActionById(index);   

                if(action)
                    action.precast(this);
            }
        }
        catch{}
    }

    public updateAction(index: number, target: Entity = null) : void {
        try{
            if(index >= 0){
                const action = Actions.findActionById(index);   
                
                if(action){
                    if(action.skill != SkillName.None){
                        const skillLevel = this.getSkillValue(action.skill);

                        if(skillLevel >= action.skillRequeriment || this.isCreature){
                            const reductManaCost = Math.max((action.cost * this.lowerManaCost) / 100, 0);
                            const reductStamCost = Math.max((action.cost * this.lowerStamCost) / 100, 0);
                            
                            switch(action.costType){
                                case ActionCostType.Life: this.life -= action.cost; break;
                                case ActionCostType.Mana: this.mana -= (action.cost - reductManaCost); break;
                                case ActionCostType.Stamina: this.stamina -= (action.cost - reductStamCost); break;
                            }     
                            
                            this.areaOfInterece.map((entity) =>  packetActionEntity.send(this, entity, index));
                        }
                    } 
                }
            }
        }
        catch {}
    }

    public updateActionArea(index: number, position: Vector3 = null) : void {
        try{
            if(index >= 0){
                const action = Actions.findActionById(index);
    
                if(action){
                    if(action.skill != SkillName.None){
                        const skillLevel = this.getSkillValue(action.skill);

                        if(skillLevel >= action.skillRequeriment || this.isCreature){
                            const reductManaCost = Math.max((action.cost * this.lowerManaCost) / 100, 0);
                            const reductStamCost = Math.max((action.cost * this.lowerStamCost) / 100, 0);
                            
                            switch(action.costType){
                                case ActionCostType.Life: this.life -= action.cost; break;
                                case ActionCostType.Mana: this.mana -= (action.cost - reductManaCost); break;
                                case ActionCostType.Stamina: this.stamina -= (action.cost - reductStamCost); break;
                            }
                    
                            this.areaOfInterece.map((entity) =>  packetActionAreaEntity.send(this, entity, { index, position }));
                        }
                    }                     
                }
            }
        }
        catch {}
    }

    public actionSuccess(index: number, targetOrPosition: Entity | Vector3 = null) : void {
        try{
            if(index >= 0){
                const action = Actions.findActionById(index);
                action?.exec(this, targetOrPosition); 
            }
        }
        catch {}
    }

    //Area Of Interest
    public packetCreateEntity(entity: Entity){
        packetCreateEntity.send(this, entity)
    }

    public addToAreaOfInterest(entity: Entity) : void {
        this.packetCreateEntity(entity);
        this.areaOfInterece.push(entity);
    }

    public removeFromAreaOfInterest(entity: Entity) : void {
        packetRemoveEntity.send(this, entity);
        this.areaOfInterece = this.areaOfInterece.filter(e => e.mapIndex !== entity.mapIndex);
    }

    public updateAreaOfInterest() : void {
        if(!this.map || this.removed)
            return;

        const interestRadius = 10000; 
        const currentArea = new Set(this.areaOfInterece.map(e => e.mapIndex));

        this.map.entitiesIndexById.forEach(entity => {
            if (entity.mapIndex === this.mapIndex) 
                return;
            
            const distance = this.transform.position.distanceTo(entity.transform.position);
            const isInInterestArea = distance <= interestRadius;
            const alreadyInArea = currentArea.has(entity.mapIndex);

            if(!entity.isDead){
                if (isInInterestArea && !alreadyInArea) {
                    this.addToAreaOfInterest(entity); 
                    entity.addToAreaOfInterest(this); 
                } else if (!isInInterestArea && alreadyInArea) {
                    this.removeFromAreaOfInterest(entity); 
                    entity.removeFromAreaOfInterest(this);
                }
            }
        });
    }

    public getEnemiesInRadius(position: Vector3, radius: number) : Array<Entity> {
        let enemies = new Array<Entity>();
        
        this.areaOfInterece.forEach((entity) => {
            if(
                entity.team.IsEnemyOf(this.team) && 
                position.distanceBetween(entity.transform.position) <= radius
            ){
                enemies.push(entity);
            }
        });

        return enemies;
    }

    //States
    public addState(state: EntityStates) : void {
        this.states.addFlag(state);
    }

    public removeState(state: EntityStates) : void {
        this.states.removeFlag(state);
    }

    public hasState(state: EntityStates) : boolean {
        return this.states.hasFlag(state);
    }

    public getStates(other: Entity, context: string) : StateFlags {
        const currentFlag = new StateFlags(this.states.getCurrentFlags());

        if(this.admin && this.states.dontHasFlag(EntityStates.Admin)){
            this.states.addFlag(EntityStates.Admin);
            currentFlag.addFlag(EntityStates.Admin);
        }
           
        if(
            other.partyOwner === this.partyOwner && 
            this.partyOwner !== null && 
            other.partyOwner !== null
        ) {
            currentFlag.addFlag(EntityStates.Party);
        }   

        if(
            this.guild !== null && 
            other.guild !== null &&
            other.guild.Id === this.guild.Id
        ) {
            currentFlag.addFlag(EntityStates.Guild);
        }  
        
        if(this.team.IsAllyOf(other.team))
            currentFlag.addFlag(EntityStates.Ally);
        else if(this.team.IsEnemyOf(other.team))
            currentFlag.addFlag(EntityStates.Enemy);

        return currentFlag;
    }

    public startSprint(){
        this.sprint = true;
    }

    public endSprint(){
        this.sprint = false;
    }

    public roll(){
        this.stamina = Math.max(this.stamina - 10, 0);
    }

    //Skill
    public getSkill(skill: SkillName): ISkillValue {
        return this.skills.has(skill) ?  this.skills.get(skill) : { cap: 10, experience: 1, value : 0 }
    }

    public getSkillValue(skill: SkillName) : number {
        return this.skills.has(skill) ? this.skills.get(skill).value : 0;
    }

    public getSkillCap(skill: SkillName) : number {
        return this.skills.has(skill) ? this.skills.get(skill).cap : 0;
    }

    public setSkill(skill: SkillName, value: number){
        if(skill){
            const cap = (this.skills.has(skill)) ? this.skills.get(skill).cap : 10;

            this.skills.set(skill, {
                experience: this.getTotalExperienceForLevel(value),
                value, cap
            });

            packetSystemMessage.send(this, `You increased your skill by ${getSkillNameString(skill)} and now you have a total of ${value}`);
        }
    }

    public getLevelFromExperience(experience: number) : number {
        for (let i = 0; i < levelsExperience.length - 1; i++) {
            if (experience >= levelsExperience[i].experience && experience < levelsExperience[i + 1].experience) {
                const experienceForCurrentLevel = levelsExperience[i].experience;
                const experienceForNextLevel = levelsExperience[i + 1].experience;
                const experienceInRange = experience - experienceForCurrentLevel;
                const totalExperienceNeededForNextLevel = experienceForNextLevel - experienceForCurrentLevel;    
                const progressFraction = experienceInRange / totalExperienceNeededForNextLevel;
                const levelWithProgress = levelsExperience[i].level + progressFraction;
    
                return parseFloat(levelWithProgress.toFixed(1));
            }
        }
    
        if (experience >= levelsExperience[levelsExperience.length - 1].experience) 
            return levelsExperience[levelsExperience.length - 1].level;
            
        return 1;
    }

    public getSkillByWeapon(weaponType: WeaponType) : SkillName {
        let skill = SkillName.None;

        switch(weaponType){
            case WeaponType.Axe:
            case WeaponType.Dagger:
            case WeaponType.Sword:
            case WeaponType.Hammer:
                 skill = SkillName.CombatWithWeapons; 
            break;
            case WeaponType.TwoHandedAxe:
            case WeaponType.TwoHandedSword:
            case WeaponType.TwoHandedHammer:
            case WeaponType.Spear:
            case WeaponType.Staff:
                skill = SkillName.TwoHandedWeapons; 
            break;
            case WeaponType.Bow:
            case WeaponType.Crossbow:
                skill = SkillName.LongRangeWeapons; 
            break;
        }

        return skill;
    }

    public gainSkillExperiencie(skill: SkillName, gain: number = 3, saveOnDatabase: boolean = true) : void {
        try{
            if(skill != SkillName.None){
                let skillValue = this.getSkill(skill);
                skillValue.experience += gain;
                const tmpValue = this.getLevelFromExperience(skillValue.experience);      
                const changeLevel = tmpValue !== skillValue.value;          
                skillValue.value = (tmpValue <= skillValue.cap) ? tmpValue : skillValue.cap;                
                this.skills.set(skill, skillValue);

                if(saveOnDatabase)
                    this.save();

                if(this instanceof Player)
                    (this as Player).checkSkillArchivement();
     
                if(changeLevel && tmpValue < skillValue.cap) {  
                    if(Math.round(tmpValue) % 2 === 0)
                        this.addStatsPoint();

                    if(Random.MinMaxInt(1, 5) === 1)                  
                        this.addStatsPoint();

                    if(this instanceof Player) {                        
                        (this as Player).save();
                        (this as Player).saveToDatabase();   
                    }

                    packetSystemMessage.send(this, `You increased your skill by ${getSkillNameString(skill)} and now you have a total of ${(skillValue.value * 10)}`);
                    packetSkillExperience.send(this, skill, skillValue);
                    packetSpecialMessage.send(this, `You gained 1 point from the ${getSkillNameString(skill)} skill`);
                    packetUpdateSkillInfo.send(this);
                }
            }
        }
        catch (e){ }  
    }

    public gainSkillExperiencieByWeapon(weaponType: WeaponType, gain: number = 3, saveOnDatabase: boolean = true){
        const skill = this.getSkillByWeapon(weaponType);
        this.gainSkillExperiencie(skill, gain, saveOnDatabase);
    }

    public getSkillBonus(skill: SkillName) : number {
        const skillValue = this.getSkillValue(skill);
        const modSkillValue = skillValue - 3; 
        return (modSkillValue > 0) ? modSkillValue : 0;
    }

    public getSkillBonusByWeaponType(weaponType: WeaponType) : number {
        const skill = this.getSkillByWeapon(weaponType);
        return (skill !== SkillName.None) ? this.getSkillBonus(skill) : 0;
    }

    public getTotalExperienceForLevel(level: number) : number {
        for (const levelExperience of levelsExperience) {
            if (levelExperience.level === level)
                return levelExperience.experience;
        }

        return 0;
    }

    public serializeSkills() : string {
        let skillsParsed = [];
        
        this.skills.forEach((skill, index) => {
            skillsParsed.push({
                s: index,
                c: skill.cap,
                v: skill.value,
                p: (skill.experience === 0 && skill.value > 0) ? 
                    this.getTotalExperienceForLevel(skill.value) : 
                    skill.experience
            });
        });

        return JSON.stringify({ data: skillsParsed });
    }

    //Actionbar
    public setAction(action: string, itemRef: string, index: number) : void {}

    public clearAction(index: number) : void {}

    //Target
    public selectTarget(targetName: string, target: Entity) : void {
        this.target = targetName;
        this.bindTargetActor(target);
        this.areaOfInterece.map((entity) =>  packetSelectTargetEntity.send(this, entity, targetName));
    }

    public bindTargetActor(target: Entity){
        if(this.targetActor)
            this.removeTargetActor();

        this.targetActor = target;

        this.targetOnDie = this.targetActor.OnDie.subscribe((entity) => { 
            this.targetActor = null; 
            this.target = null;
            this.targetOnDie?.unsubscribe();
            this.targetOnDie = null;
        });

        this.targetOnDestroy = this.targetActor.OnDetroy.subscribe((entity) => { 
            this.targetActor = null; 
            this.target = null;
            this.targetOnDestroy?.unsubscribe();
            this.targetOnDestroy = null;
        });
    }

    public cancelTarget() : void {
        this.target = null;
        this.targetActor = null;
        this.removeTargetActor();
        this.areaOfInterece.map((entity) =>  packetCancelTargetEntity.send(this, entity));
    }

    public removeTargetActor(){
        if(this.targetActor && this.targetOnDie){
            this.targetOnDie?.unsubscribe();
            this.targetOnDie = null;
            this.targetActor = null;
        }
    }

    //Damage
    public rollDice(dice: Dices) : number {
        if (dice === Dices.None) return 0; 
    
        const match = dice.match(/(\d+)D(\d+)/);

        if (!match) return 0; 

        const numDices = parseInt(match[1], 10);
        const numSides = parseInt(match[2], 10);

        let total = 0;
        
        for (let i = 0; i < numDices; i++) 
            total += Math.floor(Math.random() * numSides) + 1;
        
        return total;
    }

    protected validateHit(data: ICheckHit | ICheckHitAutoAttack, actor: Entity) : boolean {
        try{
            const distance = actor.transform.position.distanceTo(this.transform.position);
            const distanceHitToEntity = actor.transform.position.distanceTo(
                new Vector3(data.x, data.y, data.z));    

            if(data.entityId === data.actorId)
                throw new Error("Invalid damage self");

            if(!actor)
                throw new Error(`Entity ${data.actorId} not exits`);

            if(actor.hasState(EntityStates.Dead))
                throw new Error(`The ${data.actorId} target is dead`);

            //if(distance > 10000)
            //    throw new Error("The attacked entity is very far from the caster");

            //if(distanceHitToEntity > 2000)
            //    throw new Error("The reported hit is too far from the target");

            return true;
        }
        catch (e){
            return false;
        }
    }

    public checkHit(data: ICheckHit) : void {
        try{
            const action = Actions.findActionById(data.action);
            const actor = this.map.findEntityById(data.actorId);

            if(!actor)
                throw new Error("Invalid actor");
                
            if(!this.validateHit(data, actor))
                throw new Error("Invalid data hit");

            if(!action)
                throw new Error(`Invalid action`);

            actor.takeDamage(this, action.damage, action.damageType, 0, action);

            this.checkElementalDamage(actor);
        }
        catch(e){ }
    }

    public checkHitAutoAttack(data: ICheckHitAutoAttack) : void {
        try{
            const actor = this.map.findEntityById(data.actorId);

            if(!actor)
                throw new Error("Invalid actor");

            if(!this.validateHit(data, actor))
                throw new Error("Invalid data hit");

            actor.takeDamage(this, Dices.D1D4, DamageType.Physic, 0, null, false, true);   
            
            this.checkElementalDamage(actor);
        }
        catch(e){ }
    }

    public getMods(skill: SkillName, weaponAmplify: WeaponType = WeaponType.None) : number {
        const skillMod = this.getSkillBonus(skill);
        const weaponMod = (this.getWeaponType() === weaponAmplify) ? this.getWeaponBaseDamage() : 0;
        return skillMod + weaponMod;
    }

    public calculateDamage(damage: Dices | number, action: BaseAction = null) : number {
        return (action) ? action.getEffectValue(this) : this.rollDice(damage);
    }

    public getActionWeaponAmplify(action: BaseAction) : WeaponType{
        return action.weaponAmplify;
    }

    public getWeaponBaseDamage() : number { return 0; }

    public getWeaponType() : WeaponType { return WeaponType.None }

    public amplifyDamage(damageBase: number, resistence: number) : number{
        let bonusDamage = 0;

        if(resistence < 0){
            const plusDamage = (damageBase * -resistence) / 100;

            if(plusDamage > 0)
                bonusDamage = plusDamage;
        }

        return (bonusDamage > 0) ? Math.round(bonusDamage) : 0;
    }

    public calculateResistence(damage: number, damageType: DamageType) : number {
        const reductDamageEquips = (damage * this.damageReduction) / 100;

        if(reductDamageEquips > 0)
            damage -= reductDamageEquips;

        //Resistences
        switch(damageType) {
            case DamageType.Physic: 
                const physicalResistence = this.physicalResistence + this.bonusPhysicalResistence;

                if(physicalResistence > 0){
                    const reductDamage = (damage * physicalResistence) / 100;

                    if(reductDamage > 0)
                        damage -= reductDamage;
                }
                else 
                    damage += this.amplifyDamage(damage, physicalResistence);
            break;
            case DamageType.Fire: 
                const fireResistence = this.fireResistence + this.bonusFireResistence;

                if(fireResistence > 0){
                    const reductDamageFire = (damage * fireResistence) / 100;

                    if(reductDamageFire > 0)
                        damage -= reductDamageFire;
                }   
                else 
                    damage += this.amplifyDamage(damage, fireResistence);             
            break;
            case DamageType.Cold: 
                const coldResistence = this.coldResistence + this.bonusColdResistence;

                if(coldResistence > 0){
                    const reductDamageCold = (damage * coldResistence) / 100;

                    if(reductDamageCold > 0)
                        damage -= reductDamageCold;
                }
                else 
                    damage += this.amplifyDamage(damage, coldResistence); 
            break;
            case DamageType.Poison: 
                const poisonResistence = this.poisonResistence + this.bonusPoisonResistence;

                if(poisonResistence > 0){
                    const reductDamagePoison = (damage * poisonResistence) / 100;

                    if(reductDamagePoison > 0)
                        damage -= reductDamagePoison;
                }
                else 
                    damage += this.amplifyDamage(damage, poisonResistence); 
            break;
            case DamageType.Energy: 
                const energyResistence = this.energyResistence + this.bonusEnergyResistence;

                if(energyResistence > 0){
                    const reductDamageEnergy = (damage * energyResistence) / 100;

                    if(reductDamageEnergy > 0)
                        damage -= reductDamageEnergy;
                }
                else 
                    damage += this.amplifyDamage(damage, energyResistence);
            break;
            case DamageType.Light: 
                const lightResistence = this.lightResistence + this.bonusLightResistence;

                if(lightResistence > 0){
                    const reductDamageLight = (damage * lightResistence) / 100;

                    if(reductDamageLight > 0)
                        damage -= reductDamageLight;
                }
                else 
                    damage += this.amplifyDamage(damage, lightResistence);
            break;
            case DamageType.Dark: 
                const darkResistence = this.darkResistence + this.bonusDarkResistence;

                if(darkResistence > 0){
                    const reductDamageDark = (damage * darkResistence) / 100;

                    if(reductDamageDark > 0)
                        damage -= reductDamageDark;
                }
                else 
                    damage += this.amplifyDamage(damage, darkResistence);
            break;
        }

        return damage;
    }

    public checkBuffEffect(causer: Entity, damage: number, damageType: DamageType) : number {
        if(this.buffsDebuffs.length > 0){
            for(let buffsDebuff of this.buffsDebuffs)
                damage = buffsDebuff.Action.effectOnTakeDamage(this, causer, damage, damageType);
        }

        if(causer.buffsDebuffs.length > 0){
            for(let buffsDebuff of causer.buffsDebuffs)
                damage = buffsDebuff.Action.effectOnHit(causer, this, damage, damageType);
        }

        return damage;
    }

    public checkElementalDamage(actor: Entity){
        if(actor.fireDamage > 0)
            this.takeElementalDamage(actor, DamageType.Fire, actor.fireDamage);

        if(actor.coldDamage > 0)
            this.takeElementalDamage(actor, DamageType.Cold, actor.coldDamage);

        if(actor.poisonDamage > 0)
            this.takeElementalDamage(actor, DamageType.Poison, actor.poisonDamage);

        if(actor.energyDamage > 0)
            this.takeElementalDamage(actor, DamageType.Energy, actor.energyDamage);

        if(actor.lightDamage > 0)
            this.takeElementalDamage(actor, DamageType.Light, actor.lightDamage);

        if(actor.darkDamage > 0)
            this.takeElementalDamage(actor, DamageType.Dark, actor.darkDamage);
    }

    public takeElementalDamage(actor: Entity, type: DamageType, damage: number){
        actor.takeDamage(this, Dices.D1D4, type, Random.MinMaxInt(Math.max(1, damage / 2), damage));
    }

    public bonusDamageMod(type: StatusType) : number{
        switch(type){
            case StatusType.Str: return this.returnModStatus(this.str);
            case StatusType.Dex: return this.returnModStatus(this.dex);
            case StatusType.Int: return this.returnModStatus(this.int);
            case StatusType.Vig: return this.returnModStatus(this.vig);
            case StatusType.Agi: return this.returnModStatus(this.agi);
            case StatusType.Luc: return this.returnModStatus(this.luc);
        }
    }

    public returnModStatus(value: number): number {
        return Math.max(Math.round(value / 10), 0);
    }

    public takeDamage(
        causer: Entity, 
        dice: Dices, 
        damageType: DamageType, 
        bonusDamage: number = 0, 
        action: BaseAction = null,
        ignoreBuffEffect: boolean = false,
        autoattack: boolean = false
    ) : void {
        const entities = new Set([...this.areaOfInterece, causer, this]);

        if(!this.isDead && causer.transform.position.distanceTo(this.transform.position) > 5000){
            entities.forEach((entity) => packetTakeMissEntity.send(this, entity));

            if(this.target == null){
                this.target = causer.mapIndex;
                this.bindTargetActor(causer);                    
                this.selectTarget(causer.mapIndex, causer);
            } 
        }
        else if(!this.isDead && causer.team.IsEnemyOf(this.team)){            
            const bonusDamageEquips = (damageType === DamageType.Physic) ? this.bonusPhysicalDamage : this.bonusMagicDamage;
            let damage = causer.calculateDamage(dice, action) + bonusDamage + bonusDamageEquips;
            damage += (Random.MinMaxInt(1,100) < this.criticalChance) ? Math.min(this.criticalDamage, damage) : 0;
            
            if(damageType === DamageType.Physic) {
                if(
                    this.getWeaponType() === WeaponType.Bow || 
                    this.getWeaponType() === WeaponType.Crossbow
                ){
                    damage += causer.bonusDamageMod(StatusType.Dex);
                }
                else{
                    damage += causer.bonusDamageMod(StatusType.Str);
                }
            }
            else {
                damage += causer.bonusDamageMod(StatusType.Int);
            }

            damage = this.calculateResistence(damage, damageType);

            if(!ignoreBuffEffect)
                damage = this.checkBuffEffect(causer, damage, damageType);

            if(action && !ignoreBuffEffect)
                damage = action.effectOnTakeDamage(this, causer, damage, damageType);

            if(this.states.hasFlag(EntityStates.Invulnerable))
                damage = 0;

            if(autoattack)
                damage = Math.round(damage / 2);

            const dodge = (Random.MinMaxInt(1,100) < this.dodgeChance);

            if(this.target == null){
                this.target = causer.mapIndex;
                this.bindTargetActor(causer);                    
                this.selectTarget(causer.mapIndex, causer);
            } 
                  
            if(damage >= 1 && !dodge){
                if(this.damageReduction > 0){
                    const dmFactor = this.damageReduction / 100;
                    const dmReduct = Math.abs(Math.max(damage * dmFactor, 1));

                    if(dmReduct > 0)
                        damage -= dmReduct;
                }

                this.life -= Math.round(damage);
                this.sendEntityChange = true;

                if(action && action.skill !== SkillName.None)
                    causer.gainSkillExperiencie(action.skill);
                                                    
                if(this.states.hasFlag(EntityStates.Stunned) && damageType === DamageType.Physic)
                    this.states.removeFlag(EntityStates.Stunned);

                if(this.life <= 0){
                    entities.forEach((entity) => packetTakeDamageEntity.send(this, entity, {
                        damage,
                        damageType,
                        causer
                    })); 

                    this.die(causer);
                }                    
                else {
                    if(damageType != DamageType.Physic) {
                        this.gainSkillExperiencie(SkillName.MagicResistence, 1);

                        const magicDamageReflect = Math.round(damage * (this.refrectionMagicDamage / 100));

                        if(magicDamageReflect > 0)
                            causer.takeDamage(this, Dices.D1D4, damageType, magicDamageReflect);
                    }
                    else {
                        const physicalDamageReflect = Math.round(damage * (this.reflectionPhysicalDamage / 100));

                        if(physicalDamageReflect > 0)
                            causer.takeDamage(this, Dices.D1D4, DamageType.Physic, physicalDamageReflect);
                    }

                    if(!this.damageCauser.has(causer.mapIndex))
                        this.damageCauser.set(causer.mapIndex, damage);
                    else {
                        let currentDamage = this.damageCauser.get(causer.mapIndex);
                        this.damageCauser.set(causer.mapIndex, currentDamage + damage);
                    }

                    if(causer instanceof Player) {
                        if((causer as Player).getWeaponType() !== WeaponType.None)
                            (causer as Player).gainSkillExperiencieByWeapon((causer as Player).getWeaponType());
                    }
                    
                    entities.forEach((entity) => packetTakeDamageEntity.send(this, entity, {
                        damage,
                        damageType,
                        causer
                    }));
                }
            }
            else{
                entities.forEach((entity) => packetTakeMissEntity.send(this, entity));
            }
        }        
    }

    public die(causer: Entity) : void {
        this.isDead = true;
        this.dieTimeout = new Date().getTime() + (60 * 10 * 1000); 
        this.states.addFlag(EntityStates.Dead);
        this.states.removeFlag(EntityStates.Poisoned);
        this.states.removeFlag(EntityStates.Stunned);
        this.states.removeFlag(EntityStates.Frenzy);     
        this.states.removeFlag(EntityStates.Burning); 
        this.states.removeFlag(EntityStates.Frozen);    
        this.conditions = new Array<Condition>();    
        this.buffsDebuffs = new Array<BuffDebuff>();
        this.OnDie.next(this);
        this.sendEntityChange = true;

        const entities = new Set([...this.areaOfInterece, causer, this]);

        entities.forEach((entity) => {
            if(entity) 
                packetEntityDie.send(this, entity);
        });

        if(causer && this.socket)
            packetSystemMessage.send(this, `You were killed by a ${causer.name} attack`);

        if(this.destroyOnDie){
            packetDissolveEntity.send(this, causer);
            entities.forEach((otherEntity) => packetDissolveEntity.send(this, otherEntity));
            this.destroy();
        }
    }

    public revive() : void {
        this.isDead = false;
        this.life = this.maxLife;        
        this.states.removeFlag(EntityStates.Dead);    
        this.states.removeFlag(EntityStates.Poisoned);
        this.states.removeFlag(EntityStates.Stunned);
        this.states.removeFlag(EntityStates.Frenzy);     
        this.states.removeFlag(EntityStates.Burning); 
        this.states.removeFlag(EntityStates.Frozen);     
        this.conditions = new Array<Condition>();    
        this.buffsDebuffs = new Array<BuffDebuff>();
        this.sendEntityChange = true;
        
        if(this instanceof Player){
            (this as Player).save();
            (this as Player).saveToDatabase();
        }
    
        packetEventReviveEntity.send(this, EventType.Revive);
    }

    public heal(caster: Entity, value: number) : void {
        if(caster.team.IsAllyOf(this.team) || this instanceof Player){
            this.life = Math.max(1, Math.min(this.life + value, this.maxLife));
            this.sendEntityChange = true;
            const entities = new Set([...this.areaOfInterece, caster, this]);

            entities.forEach((entity) => packetHealEntity.send(this, entity, {
                value, caster, type: HealType.Life
            }));
        }
    }

    public healBroadcast(caster: Entity, value: number, type: HealType = HealType.Life){
        const entities = new Set([...this.areaOfInterece, caster, this]);

        entities.forEach((entity) => packetHealEntity.send(this, entity, {
            value, caster, type
        }));
    }

    //Conditions
    public applyCondition(c: Condition){
        if(!this.isDead) {
            for(let condition of this.conditions) {
                if(condition.Type === c.Type){
                    //condition.refresh(this, c.Dealer, c.Lifetime, c.Value);
                    //this.OnConditionChanged.next(condition);
                    return;
                }
            }

            this.conditions.push(c);
            this.conditions[this.conditions.length-1].apply(this);
        }
    }

    public hasCondition(conditionType: ConditionType){
        for(let condition of this.conditions){
            if(conditionType === condition.Type)
                return true;
        }

        return false;
    }

    public removeCondition(index: number){
        if(this.conditions[index]){
            this.conditions[index].remove(this);
            this.conditions[index] = null;
            this.conditions = this.conditions.filter((v) => v);
        }
    }

    // Buffs and Debuffs
    public applyBuffDebuff(c: BuffDebuff){
        if(!this.isDead) {
            for(let buffsDebuffs of this.buffsDebuffs) {
                if(buffsDebuffs.Type === c.Type){
                    buffsDebuffs.refresh(this, c.Lifetime);
                    this.OnBuffDebuffChanged.next(buffsDebuffs);
                    return;
                }
            }

            c.Action.effectOnCast(this);
            this.buffsDebuffs.push(c);
            this.buffsDebuffs[this.buffsDebuffs.length-1].apply(this);
        }
    }

    public hasBuffDebuff(type: BuffDebuffStates){
        return this.buffsDebuffsState.hasFlag(type);
    }

    public removeBuffDebuff(index: number){
        if(this.buffsDebuffs[index]){
            this.buffsDebuffs[index].Action.removeEffect(this);
            this.buffsDebuffs[index].remove(this);
            this.buffsDebuffs[index] = null;
            this.buffsDebuffs = this.buffsDebuffs.filter((v) => v);
        }
    }

    //Packets
    public sendInfo(entity: Entity) : void {
        packetCreateEntity.send(entity, this);
    }

    public say(message: string, color: string = "255,255,255,255"){
        const entities = new Set([...this.areaOfInterece, this]);

        entities.forEach((entity) => packetSay.send(entity, {
            speaker: this,
            message: message,
            color: color
        }));
    }
}