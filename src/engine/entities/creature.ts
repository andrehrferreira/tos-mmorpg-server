import { ItemsService } from "@services";

import { 
    CreatureIAState, CreatureTargetMode, 
    CreatureCombatMode, DamageType, Dices, SkillName 
} from "@enums";

import { 
    packetActionAreaEntity,
    packetActionEntity,
    packetAutoAttack, 
    packetDissolveEntity, 
    packetSystemMessage 
} from "@network";

import { ICheckHitAutoAttack } from "@interfaces";

import { EntityStates } from "../core/flags";
import { EntitiesKind, Entity } from "./entity";

import { 
    BaseAction, StateFlags, 
    Team, TeamKind, Vector3, Player, 
    Actions, ActionType, Random
} from "..";

export class ActionRef {
    action: BaseAction;
    targetType: ActionType;
    allDamagesActors: boolean;

    constructor(action: BaseAction, targetType: ActionType, allDamagesActors: boolean){
        this.action = action;
        this.targetType = targetType;
        this.allDamagesActors = allDamagesActors;
    }
}

export enum CreatureType {
    None,
    Animals,
    Undead,
    NPC,
    Summon,
    Pet,
    Dragon,
    Common,
    Demon
}

export abstract class Creature extends Entity {
    protected IAState: CreatureIAState = CreatureIAState.Idle;
    public creatureType: CreatureType = CreatureType.Common;
    public owner: Player;

    public isCreature: boolean = true;
    public idleTick: number = 0;
    public moveToPosition: Vector3 = null;
    public lastMoveToPosition: Vector3 = null;
    public passive: boolean = true;
    public pawnSenseRadius: number = 800;
    public baseDamage: Dices = Dices.D1D4;
    public maxRandomOffset: number = 200;
    public minDistanceTarget: number = -100;
    protected nextMovement: number = 10;
     
    //Special Actions
    public inAction: boolean = false;
    public actions: Map<ActionRef, number> = new Map<ActionRef, number>();
    public actionsArrList: Array<ActionRef> = new Array<ActionRef>();

    //Target
    public targetMode : CreatureTargetMode = CreatureTargetMode.Closer;
    public combatMode : CreatureCombatMode = CreatureCombatMode.Melee;

    //Lerp position
    public lerpStartTime: number;
    public lerpDuration: number = 4;
    public startPosition: Vector3;

    //Taming
    public tamable: boolean = false;
    public skillTamingMin: number = 0;
    public petSockets: number = 0;
    public isTamed: boolean = false;
    public maxSkillTamingUp: number = 0;
    public itemTamingFinish: { new (): any }

    public init(){
        this.kind = EntitiesKind.Monster;
        this.states = new StateFlags(EntityStates.None);
        this.team = new Team(TeamKind.Monsters, this);
        this.teamOwner = this;
        
        if(!this.passive || this.karma <= -2000)
            this.states.addFlag(EntityStates.NegativeKarma);

        this.calculateStats();
        this.restoreStats();
    }

    public getRandomPosition(){
        const angle = Math.random() * Math.PI * 2;
        const dx = Math.cos(angle) * this.movementDistance;
        const dy = Math.sin(angle) * this.movementDistance;

        const newPosition = new Vector3(
            this.respawnPosition.x + dx,
            this.respawnPosition.y + dy,
            this.respawnPosition.z 
        );

        return newPosition;
    }

    public moveTo(position: Vector3){
        this.transform.position = position;
    }

    public override tick(tickNumber: number) {
        super.tick(tickNumber);
        this.lastUpdate = new Date().getTime() + (60 * 1000);
        
        if(!this.isDead && tickNumber % 5 === 0){
            this.validateTarget();

            if(!this.target && !this.passive && tickNumber % 10 === 0)
                this.trackTarget();

            switch(this.IAState){
                case CreatureIAState.Idle: this.stateIdle(tickNumber); break;
                case CreatureIAState.Patrol: this.statePatrol(tickNumber); break;
                case CreatureIAState.InCombat: this.stateInCombat(tickNumber); break;
                case CreatureIAState.GoingToSpawn: this.stateGoingToSpawn(tickNumber); break;
                case CreatureIAState.FollowingMaster: this.stateFollowingMaster(tickNumber); break;
            }
        }
    }

    private getRandomIntInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    public override bindTargetActor(target: Entity){
        super.bindTargetActor(target);
        //setInterval(() => this.checkTarget.bind(this), 30000);
    }

    public validateTarget(){
        if(this.target){
            const entity = this.map.findEntityById(this.target);

            if(!entity || entity?.isDead)             
                this.clearTarget();
        }
    }

    public checkTarget(){
        if(this.targetActor)
            this.cancelTarget();

        this.trackTarget();
    }

    public trackTarget(){        
        if(!this.target){
            const enemies = this.getEnemiesInRadius(this.transform.position, this.pawnSenseRadius);

            if(enemies.length > 0){
                switch(this.targetMode){
                    case CreatureTargetMode.Closer: 
                        let closestEnemy = enemies[0];
                        let closestDistance = this.transform.position.distanceTo(closestEnemy.transform.position);
                
                        if(enemies.length > 1){
                            for(const enemy of enemies) {
                                const distance = this.transform.position.distanceTo(enemy.transform.position);
        
                                if(distance < closestDistance){
                                    closestEnemy = enemy;
                                    closestDistance = distance;
                                }
                            }
                        }
                        
                        this.bindTargetActor(closestEnemy);
                        this.selectTarget(closestEnemy.mapIndex, closestEnemy);
                    break;
                    case CreatureTargetMode.ShorterLife: 
                        let weakestEnemy = enemies[0];
                        let lowestLife = weakestEnemy.life;

                        if(enemies.length > 1){
                            for(const enemy of enemies) {
                                if(enemy.life < lowestLife){
                                    weakestEnemy = enemy;
                                    lowestLife = enemy.life;
                                }
                            }
                        }

                        this.bindTargetActor(weakestEnemy);
                        this.selectTarget(weakestEnemy.mapIndex, weakestEnemy);
                    break;
                    case CreatureTargetMode.DamageCaused: 
                        let mostDamagingEnemy = enemies[0];
                        let highestDamage = 0;

                        if(enemies.length > 1) {
                            for(const enemy of enemies) {
                                const damage = this.damageCauser.get(enemy.mapIndex) || 0;

                                if(damage > highestDamage){
                                    mostDamagingEnemy = enemy;
                                    highestDamage = damage;
                                }
                            }
                        }

                        this.bindTargetActor(mostDamagingEnemy);
                        this.selectTarget(mostDamagingEnemy.mapIndex, mostDamagingEnemy);
                    break;                
                }   

                this.IAState = CreatureIAState.InCombat;
            }
        }
    }

    public clearTarget(){
        this.target = null
        this.targetActor = null;
        this.IAState = CreatureIAState.Idle;
    }

    // Damage
    public override checkHitAutoAttack(data: ICheckHitAutoAttack) : void {
        try{
            const actor = this.map.findEntityById(data.actorId);

            if(!actor)
                throw new Error("Invalid actor");

            if(!this.validateHit(data, actor))
                throw new Error("Invalid data hit");

            actor.takeDamage(this, this.baseDamage, DamageType.Physic, 0);        
        }
        catch(e){ }
    }

    public override takeDamage(causer: Entity, dice: Dices, damageType: DamageType, bonusDamage: number = 0, action: BaseAction = null) : void {
        super.takeDamage(causer, dice, damageType, bonusDamage, action);

        if(!this.targetActor) {
            this.target = causer.mapIndex;
            this.targetActor = causer;
            this.validateTarget();
            this.IAState = CreatureIAState.InCombat;
        }        
    }

    public override getWeaponBaseDamage() : number {
        return this.rollDice(this.baseDamage);
    }

    public validateAttack(entity: Entity){
        if(
            entity &&
            this.targetActor?.mapIndex === entity?.mapIndex &&
            this.IAState === CreatureIAState.InCombat
        ){
            this.broadcast(packetAutoAttack);
        }
    }

    public override async die(causer: Entity) : Promise<void> {
        super.die(causer);

        if(causer instanceof Player) {
            if(!this.destroyOnDie){
                await this.loot.generateLoot((causer as Player));

                if(this.skinnerTick === 0 && this.loot && this.loot.count() <= 0)
                    this.dieTimeout = new Date().getTime() + (5 * 1000);
            }            
        }
    }

    // IA
    private stateGoingToSpawn(tickNumber: number){        
        if(this.isDead){
            this.IAState = CreatureIAState.Idle;
            return;
        }  

        if(this.creatureType === CreatureType.Pet) {
            this.IAState = CreatureIAState.FollowingMaster;
            return;
        } 
            
        if(this.idleTick > 10){
            this.idleTick = 0;
            this.IAState = CreatureIAState.Patrol;
        }
        else{
            this.idleTick++;
        }
    }

    private stateIdle(tickNumber: number){
        if(this.isDead)
            return;

        if(this.creatureType === CreatureType.Pet) {
            this.IAState = CreatureIAState.FollowingMaster;
            return;
        } 

        if(this.kind === EntitiesKind.Mount || this.kind === EntitiesKind.Pet){
            this.IAState = CreatureIAState.FollowingMaster;
            return;
        }
            
        if(this.target !== null){
            this.IAState = CreatureIAState.InCombat;
        }
        else if(this.idleTick > this.nextMovement){
            this.idleTick = 0;
            this.nextMovement = Random.MinMaxInt(10, 50);
            this.IAState = CreatureIAState.Patrol;
        }
        else{
            this.idleTick++;
        }
    }

    private statePatrol(tickNumber: number){
        if(this.isDead) {
            this.IAState = CreatureIAState.Idle;
            return;
        }

        if(this.creatureType === CreatureType.Pet) {
            this.IAState = CreatureIAState.FollowingMaster;
            return;
        } 

        if(this.target === null && !this.targetActor){
            if(this.life < this.maxLife) 
                this.life = this.maxLife;
            
            if(this.moveToPosition !== null){
                if(this.transform.position.distanceTo(this.moveToPosition) < 50){
                    this.moveToPosition = null;
                    this.IAState = CreatureIAState.Idle;
                }                    
            }
            else{
                this.moveToPosition = this.getRandomPosition();
                this.moveToPosition.z = this.transform.position.z;
                this.transform.position = this.moveToPosition;
            }
        }
        else{
            this.IAState = CreatureIAState.InCombat;
        }
    }

    private stateInCombat(tickNumber: number){
        if(this.target !== null && this.targetActor){
            if(this.isDead) {
                this.IAState = CreatureIAState.Idle;
                return;
            } 
            
            if(this.creatureType === CreatureType.Pet) {
                this.IAState = CreatureIAState.FollowingMaster;
                return;
            } 

            if(this.transform.position.distanceTo(this.respawnPosition) < this.maxDistanceToRespawn){
                if(
                    this.transform && this.targetActor && 
                    this.targetActor.transform.position.distanceTo(this.transform.position) > 6000
                ) {
                    this.target = null;
                    this.removeTargetActor();
                    return;
                }

                if(
                    this.moveToPosition && 
                    this.targetActor.transform.position.distanceTo(this.moveToPosition) > 100
                ) {
                    this.moveToPosition = null;
                }
                    
                if(!this.moveToPosition){
                    let targetPosition = this.targetActor.transform.position

                    if(this.combatMode === CreatureCombatMode.Ranged){
                        targetPosition = this.targetActor.transform.position.addScalar(-(this.pawnSenseRadius / 2));
                        const randomOffset = new Vector3(Math.random() * this.maxRandomOffset, Math.random() * this.maxRandomOffset, 0);
                        targetPosition = targetPosition.add(randomOffset);
                    }
                    else {
                        targetPosition = this.targetActor.transform.position.addScalar(this.minDistanceTarget);
                    }
                    
                    this.moveToPosition = targetPosition;
                    this.moveToPosition.z = this.transform.position.z;
                    this.transform.position = this.moveToPosition;
                    this.lastMoveToPosition = this.moveToPosition;
                    this.lerpStartTime = tickNumber;
                    this.startPosition = this.transform.position;
                }
                else {
                    this.validateTarget();

                    const elapsed = (tickNumber - this.lerpStartTime) / 1000; 
                    const t = Math.min(1, elapsed / this.lerpDuration);
                    this.transform.position = this.startPosition.lerp(this.moveToPosition, t);

                    if (t >= 1)
                        this.IAState = CreatureIAState.Idle;
                } 

                if(
                    this.actions.size > 0 &&
                    tickNumber % 10 === 0
                ) {
                    this.castAction();   
                }                                 
            }
            else {
                this.moveToPosition = this.respawnPosition;
                this.moveToPosition.z = this.transform.position.z;
                this.transform.position = this.moveToPosition;

                this.cancelTarget();
                //this.restoreStats();
                
                this.IAState = CreatureIAState.GoingToSpawn;
            }
        }
        else if(this.passive) {
            this.IAState = CreatureIAState.RunFromTarget;
        }
        else {
            this.IAState = CreatureIAState.Idle;
        }
    }

    private stateFollowingMaster(tickNumber: number){
        if(this.owner){
            let targetPosition = this.owner.transform.position
            targetPosition = this.owner.transform.position.addScalar(this.minDistanceTarget);

            this.moveToPosition = targetPosition;
            this.moveToPosition.z = this.transform.position.z;
            this.transform.position = this.moveToPosition;
            this.lastMoveToPosition = this.moveToPosition;
            this.lerpStartTime = tickNumber;
            this.startPosition = this.transform.position;
        }        
    }

    public changeState(newState: CreatureIAState){
        this.IAState = newState;
        this.tick(1);
    }

    public castAction(){
        this.validateTarget();

        if(this.actions.size && this.targetActor && !this.inAction && !this.isDead){
            this.inAction = true;
            const actionRef = this.getRandomAction();

            if(actionRef){
                const action = actionRef.action;

                switch(actionRef.targetType){
                    case ActionType.TargetSelf: 
                    case ActionType.DirectionalCamera:    
                        this.areaOfInterece.map((entity) => packetActionEntity.send(this, entity, action.id)); 
                        setTimeout(() => { action.exec(this, this); }, action.preCastTime * 1000); 
                        setTimeout(() => { this.inAction = false }, 5000); 
                    break;
                    case ActionType.Target:  
                        if(actionRef.allDamagesActors){
                            const enemies = this.getEnemiesInRadius(this.transform.position, this.pawnSenseRadius);
                            this.areaOfInterece.map((entity) => packetActionEntity.send(this, entity, action.id)); 

                            for(let enemy in enemies)                                
                                setTimeout(() => { action.exec(this, enemies[enemy]); }, action.preCastTime * 1000);                                 
                            
                            setTimeout(() => { this.inAction = false }, 5000); 
                        }
                        else{
                            this.areaOfInterece.map((entity) => packetActionEntity.send(this, entity, action.id)); 
                            setTimeout(() => { action.exec(this, this.targetActor); }, action.preCastTime * 1000); 
                            setTimeout(() => { this.inAction = false }, 5000); 
                        }
                        
                    break;
                    case ActionType.Area: 
                        if(actionRef.allDamagesActors){
                            const enemies = this.getEnemiesInRadius(this.transform.position, this.pawnSenseRadius);

                            for(let enemy in enemies){
                                const position = enemies[enemy].transform.position.add(new Vector3(0,0,-30));

                                this.areaOfInterece.map((entity) => packetActionAreaEntity.send(this, entity, {
                                    index: action.id,
                                    position: position
                                }));  

                                setTimeout(() => { action.exec(this, position); }, action.preCastTime * 1000);                        
                            }

                            setTimeout(() => { this.inAction = false }, 5000); 
                        }
                        else{
                            const position = this.targetActor.transform.position.add(new Vector3(0,0,-30));

                            this.areaOfInterece.map((entity) => packetActionAreaEntity.send(this, entity, {
                                index: action.id,
                                position: position
                            }));  

                            setTimeout(() => { action.exec(this, position); }, action.preCastTime * 1000);                        
                            setTimeout(() => { this.inAction = false }, 5000);   
                        }
                    break;
                }
            }
        }
    }   

    // Stats 
    public setLife(min: number, max: number = 0){
        this.fixedLife = true;
        this.maxLife = (max > 0) ? this.getRandomIntInRange(min, max) : min;
        this.life = this.maxLife;
    }

    public setStr(min: number, max: number = 0){
        this.str = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setDex(min: number, max: number = 0){
        this.dex = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setInt(min: number, max: number = 0){
        this.int = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setVig(min: number, max: number = 0){
        this.vig = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setAgi(min: number, max: number = 0){
        this.agi = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setLuc(min: number, max: number = 0){
        this.luc = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setPhysicalResistence(min: number, max: number = 0){
        this.bonusPhysicalResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setFireResistence(min: number, max: number = 0){
        this.bonusFireResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setColdResistence(min: number, max: number = 0){
        this.bonusColdResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setPoisonResistence(min: number, max: number = 0){
        this.bonusPoisonResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setEnergyResistence(min: number, max: number = 0){
        this.bonusEnergyResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setLightResistence(min: number, max: number = 0){
        this.bonusLightResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setDarkResistence(min: number, max: number = 0){
        this.bonusDarkResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setAllResistence(min: number, max: number = 0){
        this.setPhysicalResistence(min, max);
        this.setFireResistence(min, max);
        this.setColdResistence(min, max);
        this.setPoisonResistence(min, max);
        this.setEnergyResistence(min, max);
        this.setLightResistence(min, max);
        this.setDarkResistence(min, max);
    }

    //Action
    public addAction(
        actionName: string, 
        chance: number, 
        target: ActionType = ActionType.None,
        allDamagesActors: boolean = false
    ){        
        const action = Actions.findActionByName(actionName);

        if(action){
            const actionRef = new ActionRef(
                action,
                target !== ActionType.None ? target : action.type, 
                allDamagesActors
            );

            this.actions.set(actionRef, chance);

            for(let i = 0; i < chance; i++)
                this.actionsArrList.push(actionRef);
        }
    }

    public getRandomAction() : ActionRef{       
        if (this.actionsArrList.length === 0) 
            return null;
            
        const randomIndex = Math.floor(Math.random() * this.actionsArrList.length);
        const randomAction = this.actionsArrList[randomIndex];    
        return randomAction;
    }

    //Gathering
    public async skinning(entity: Player){
        try{
            const distance = entity.transform.position.distanceTo(this.transform.position);

            if(entity.mapIndex === this.mapIndex)
                throw new Error("Invalid skinning self");

            if(!this.hasState(EntityStates.Dead))
                throw new Error(`To start skinning the creature needs to be dead`);

            //if(distance > 2000)
            //    throw new Error("Entity too far from the creature to initiate skinning");

            if(this.skinnerTick > 0) {
                this.skinnerTick--;

                const baseItem = new this.skinnerResources();
                const hasStackableItem = entity.inventory.hasStackableItem(baseItem);
                const totalAmount = Math.abs(this.skinnerAmount + entity.getSkillValue(SkillName.Skinning));

                if(entity && entity.socket){
                    const itemRef = await (entity.socket.services.itemsService as ItemsService).createItem(
                        entity.inventory.containerId,
                        entity.characterId,
                        baseItem.Namespace,
                        totalAmount,
                        "skinning",
                        null,
                        null, 
                        (hasStackableItem === -1)
                    );

                    entity.gainSkillExperiencie(SkillName.Skinning, this.skinnerGainExp);
                    packetSystemMessage.sendDirectSocket(entity.socket, `You received +${this.skinnerAmount} ${baseItem.Name}`);
                    entity.inventory.addItem(itemRef, this.skinnerAmount, -1);
                    entity.save();
                }   

                if(this.skinnerTick === 0)
                    this.areaOfInterece.map((entity) => packetDissolveEntity.send(this, entity));
            }
            else {
                this.areaOfInterece.map((entity) => packetDissolveEntity.send(this, entity));
            }

            if(this.skinnerTick === 0 && this.loot && this.loot.count() <= 0)
                this.dieTimeout = new Date().getTime() + 1000;
        }
        catch (e){
            return false;
        }
    }
}