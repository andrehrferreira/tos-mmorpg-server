import { ActionCostType, Dices, DamageType, SkillName, StatusType } from "@enums";
import { packetSay } from "@network";
import { Entity, Player, Summon, Vector3 } from "..";
import { WeaponType } from "../items/items";

export enum ActionType {
    None,
    Projectible,
    Target, 
    TargetSelf,
    Area,
    DirectionalCamera
}

export class Actions {
    public static actionsIndex: BaseAction[] = [];
    public static actionsByName: Map<string, BaseAction> = new Map<string, BaseAction>();

    public static addAction(action: BaseAction){
        Actions.actionsIndex[action.id] = action;
        Actions.actionsByName.set(action.name, action);
        Actions.actionsByName.set(action.namespace, action);
        Actions.actionsByName.set(action.namespace.toLocaleLowerCase(), action);
    }

    public static findActionById(id: number) : BaseAction | null {
        return Actions.actionsIndex[id] || null;
    }

    public static findActionByName(name: string) : BaseAction | null {    
        return Actions.actionsByName.has(name.toLocaleLowerCase()) ? Actions.actionsByName.get(name.toLocaleLowerCase()) : null;
    }
}

export abstract class BaseAction {
    abstract id: number;
    abstract name: string;
    abstract namespace: string;
    abstract costType: ActionCostType;
    abstract cost: number;

    public type: ActionType = ActionType.None;
    public damage?: Dices = Dices.None;
    public damageType?: DamageType = DamageType.Physic;
    public skill?: SkillName = SkillName.None;
    public skillRequeriment?: number = 0;
    public damagePerLevel?: Map<number, Dices> = new Map<number, Dices>();
    public weaponAmplify: WeaponType = WeaponType.None;
    public radius?: number = 0;
    public preCastTime: number = 0;
    public castSay: string = "";

    public precast(owner: Entity){
        if(this.castSay)
            owner.say(this.castSay, this.colorByDamageType());  
    }

    public exec(owner: Entity, target: Entity | Vector3) {
        this.gainSkillExperience(owner);    
    }

    public effectOnCast(owner: Entity) {}

    public removeEffect(owner: Entity) {}

    public effectOnTakeDamage(owner: Entity, causer: Entity, damage: number, damageType: DamageType) { return damage; }
    
    public effectOnHit(owner: Entity, causer: Entity, damage: number, damageType: DamageType) { return damage; }

    public gainSkillExperience(owner: Entity){
        (owner as Player).gainSkillExperiencie(this.skill);
    }

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

    public getEnemiesInRadius(caster: Entity, position: Vector3, radius: number) : Array<Entity> {
        let enemies = new Array<Entity>();
        
        caster.areaOfInterece.forEach((entity) => {
            if(
                entity.team.IsEnemyOf(caster.team) && 
                position.distanceBetween(entity.transform.position) <= radius &&
                !entity.isDead
            ){
                enemies.push(entity);
            }
        });

        return enemies;
    }

    public getAllyInRadius(caster: Entity, position: Vector3, radius: number, includeSelf: boolean = false) : Array<Entity> {
        let allys = new Array<Entity>();
        
        caster.areaOfInterece.forEach((entity) => {
            if(
                entity.team.IsAllyOf(caster.team) && 
                position.distanceBetween(entity.transform.position) <= radius &&
                !entity.isDead
            ){
                allys.push(entity);
            }
        });

        if(includeSelf){
            if(
                position.distanceBetween(caster.transform.position) <= radius &&
                !caster.isDead
            ){
                allys.push(caster);
            }
        }

        return allys;
    }

    public execActionInterval(ticks: number, delay: number, cb: Function){
        return new Promise((resolve, reject) => {
            for(let i = 0; i < ticks; i++)
                setTimeout((_this) => cb.call(_this), delay * i, this);

            setTimeout(resolve, ticks * delay);
        });
    }

    public getMods(owner: Entity, skill: SkillName, weaponAmplify: WeaponType = WeaponType.None) : number {
        const skillMod = owner.getSkillBonus(skill);
        const weaponMod = (owner.getWeaponType() === weaponAmplify) ? owner.getWeaponBaseDamage() : 0;
        return skillMod + weaponMod;
    }

    public getEffectValue(owner: Entity){
        const mods = this.getMods(owner, this.skill, this.weaponAmplify);
        const skillValue = owner.getSkillValue(this.skill);
        let effectDice = this.damage;

        try{
            effectDice = this.damagePerLevel.size > 0 ? this.damagePerLevel[skillValue] : this.damage;
        }
        catch{ }
        
        if(effectDice == undefined || effectDice == null || effectDice === Dices.None)
            effectDice = this.damage;
        
        let effect = this.rollDice(effectDice) + mods;
        
        return effect;
    }

    public colorByDamageType(): string {
        switch(this.damageType){
            case DamageType.Fire: return "255,42,29,255";
            case DamageType.Cold: return "67,87,255,255";
            case DamageType.Poison: return "84,255,76,255";
            case DamageType.Energy: return "82,247,255,255";
            case DamageType.Light: return "255,239,124,255";
            case DamageType.Dark: return "57,12,88,255";
            default: return "255,255,255,255";
        }
    }
}

export abstract class BaseHealAction extends BaseAction {
    public exec(owner: Entity, target: Entity){
        if(target){
            this.gainSkillExperience(owner);
            const modInt = owner.bonusDamageMod(StatusType.Int);
            target.heal(owner, Math.round(this.getEffectValue(owner) + modInt));
        }
    }
}

export abstract class BaseSummonAction extends BaseAction {
    public lifetime: number = 60;

    public createSummon(owner: Player, creature: Summon, position: Vector3){
        creature.transform.position = position;
        creature.startLifeTime(this.lifetime);
        owner.map.joinMap(creature);
    }
}
