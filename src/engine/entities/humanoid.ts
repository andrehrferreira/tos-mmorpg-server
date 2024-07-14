import { ICheckHitAutoAttack, IEquipament } from "@interfaces";
import { packetDesequip, packetEquip } from "@network";
import { DamageType, Dices } from "@enums";
import { EntitiesKind, Entity } from "./entity";

import { 
    AttributeType, BaseAction, EntityStates, Equipament, 
    EquipamentType, EquipmentWeight, ItemStates, Items, MountItem, Pet, PetItem, Player, ResistenceType, 
    StateFlags, Team, TeamKind, Weapon, WeaponType 
} from "..";

export class Humanoid extends Entity {
    public visual: string;
    
    //Equipaments
    public helmet: IEquipament;
    public chest: IEquipament;
    public gloves: IEquipament;
    public pants: IEquipament;
    public boots: IEquipament;
    public robe: IEquipament;
    public cloak: IEquipament;

    public ring01: IEquipament;
    public ring02: IEquipament;
    public necklance: IEquipament;
    public instrument: IEquipament;

    public mainhand: IEquipament;
    public offhand: IEquipament;

    public pet: IEquipament;
    public petInstance: Pet;
    public mount: IEquipament;

    public equipaments: Array<Equipament> = new Array<Equipament>();

    public init(){
        this.kind = EntitiesKind.Monster;
        this.states = new StateFlags(EntityStates.None);
        this.team = new Team(TeamKind.Monsters, this);
        this.teamOwner = this;
        
        this.refreshEquipamentsList();
    }

    public destroy() : void {
        super.destroy();

        if(this.pet && this.pet.ItemRef)
            (Items.getItemByRef(this.pet.ItemRef) as PetItem)?.onDesequip(this);
        
        if(this.mount && this.mount.ItemRef)
            (Items.getItemByRef(this.mount.ItemRef) as MountItem)?.onDesequip(this);
    }

    //Inventory / Equipaments
    public addToInventory(itemRef: string, amount: number, slotId: number = -1){
        if(itemRef !== null && itemRef !== undefined && itemRef !== "" && this.inventory)
            this.inventory.addItem(itemRef, amount, slotId);
    }

    public async equip(type: EquipamentType, itemId: string, itemRef: string, ring02: boolean = false){
        if(this.inventory.hasItem(itemRef)){
            const itemSlot = this.inventory.getItemSlot(itemRef);
            const equipament = itemSlot.item as Equipament;

            if(equipament){
                await this.inventory.clearSlot(itemSlot.slotId);
                const equipamentRef = { ItemName : itemSlot.item.Namespace, ItemRef: itemSlot.item.Ref };
                this.desequip(equipament.EquipamentType, ring02, false);

                switch(equipament.EquipamentType){
                    case EquipamentType.Helmet: this.helmet = equipamentRef; break;
                    case EquipamentType.Chest: this.chest = equipamentRef; break;
                    case EquipamentType.Gloves: this.gloves = equipamentRef; break;
                    case EquipamentType.Pants: this.pants = equipamentRef; break;
                    case EquipamentType.Boots: this.boots = equipamentRef; break;
                    case EquipamentType.Cloak: this.cloak = equipamentRef; break;
                    case EquipamentType.Robe: this.robe = equipamentRef; break;
                    case EquipamentType.Necklance: this.necklance = equipamentRef; break;
                    case EquipamentType.Ring: 
                        if(ring02)
                            this.ring02 = equipamentRef; 
                        else
                            this.ring01 = equipamentRef; 
                    break;
                    case EquipamentType.Offhand: this.offhand = equipamentRef; break;
                    case EquipamentType.Weapon: this.mainhand = equipamentRef; break;
                    case EquipamentType.Instrument: this.instrument = equipamentRef; break;
                    case EquipamentType.Pet: 
                        this.pet = equipamentRef; 
                        (equipament as PetItem).onEquip(this);
                    break;
                    case EquipamentType.Mount: 
                        this.mount = equipamentRef; 
                        (equipament as MountItem).onEquip(this);
                    break;
                }

                if(equipament.EquipamentType === EquipamentType.Weapon){
                    const weapon = (equipament as Weapon);

                    if(
                        weapon.WeaponType === WeaponType.TwoHandedAxe ||
                        weapon.WeaponType === WeaponType.TwoHandedHammer ||
                        weapon.WeaponType === WeaponType.TwoHandedSword ||
                        weapon.WeaponType === WeaponType.Crossbow ||
                        weapon.WeaponType === WeaponType.Bow ||
                        weapon.WeaponType === WeaponType.Staff ||
                        weapon.WeaponType === WeaponType.Spear 
                    ){
                        await this.desequip(EquipamentType.Offhand, false, false);
                    }
                }

                if(equipament.EquipamentType === EquipamentType.Offhand){
                    if(this.mainhand){
                        const weapon = (Items.getItemByRef(this.mainhand.ItemRef) as Weapon);

                        if(
                            weapon.WeaponType === WeaponType.TwoHandedAxe ||
                            weapon.WeaponType === WeaponType.TwoHandedHammer ||
                            weapon.WeaponType === WeaponType.TwoHandedSword ||
                            weapon.WeaponType === WeaponType.Crossbow ||
                            weapon.WeaponType === WeaponType.Bow ||
                            weapon.WeaponType === WeaponType.Staff ||
                            weapon.WeaponType === WeaponType.Spear 
                        ){
                            await this.desequip(EquipamentType.Weapon, false, false);
                        }
                    }
                }

                this.broadcast(packetEquip, { type, itemId }); 
                
                this.refreshEquipamentsList();
                this.calculateStatics();
                this.save();
            }
        }
    }

    public async desequip(
        type: EquipamentType, 
        ring02: boolean = false, 
        broadcast: boolean = false,
        slotId: number = -1
    ){
        switch(type){
            case EquipamentType.Helmet: 
                if(this.helmet){
                    const helmetRef = this.helmet.ItemRef;
                    this.helmet = null; 

                    this.addToInventory(helmetRef, 1, slotId);
                    (Items.getItemByRef(helmetRef) as Equipament)?.onDesequip(this);                    
                    this.broadcast(packetDesequip, { type: EquipamentType.Helmet });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }                
            break;
            case EquipamentType.Chest: 
                if(this.chest){
                    const chestRef = this.chest.ItemRef;
                    this.chest = null; 

                    this.addToInventory(chestRef, 1, slotId);
                    (Items.getItemByRef(chestRef) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Chest });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }   
            break;
            case EquipamentType.Gloves: 
                if(this.gloves){
                    const glovesRef = this.gloves.ItemRef;
                    this.gloves = null;

                    this.addToInventory(glovesRef, 1, slotId);
                    (Items.getItemByRef(glovesRef) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Gloves });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }    
            break;
            case EquipamentType.Pants: 
                if(this.pants){
                    const pantsRef = this.pants.ItemRef;
                    this.pants = null; 

                    this.addToInventory(pantsRef, 1, slotId);
                    (Items.getItemByRef(pantsRef) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Pants });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                } 
            break;
            case EquipamentType.Boots: 
                if(this.boots){
                    const bootsRef = this.boots.ItemRef;
                    this.boots = null; 

                    this.addToInventory(bootsRef, 1, slotId);
                    (Items.getItemByRef(bootsRef) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Boots });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                } 
            break;
            case EquipamentType.Cloak: 
                if(this.cloak){
                    const cloakRef = this.cloak.ItemRef;
                    this.cloak = null; 

                    this.addToInventory(cloakRef, 1, slotId);
                    (Items.getItemByRef(cloakRef) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Cloak });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }
            break;
            case EquipamentType.Robe: 
                if(this.robe){
                    const robeRef = this.robe.ItemRef;
                    this.robe = null; 

                    this.addToInventory(robeRef, 1, slotId);
                    (Items.getItemByRef(robeRef) as Equipament)?.onDesequip(this); 
                    this.broadcast(packetDesequip, { type: EquipamentType.Robe });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }            
            break;
            case EquipamentType.Necklance: 
                if(this.necklance){
                    const necklanceRef = this.necklance.ItemRef;
                    this.necklance = null; 

                    this.addToInventory(necklanceRef, 1, slotId);
                    (Items.getItemByRef(necklanceRef) as Equipament)?.onDesequip(this); 
                    this.broadcast(packetDesequip, { type: EquipamentType.Necklance });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }  
            break;
            case EquipamentType.Ring: 
                if(this.ring01 && !ring02){
                    const ring01Ref = this.ring01.ItemRef;
                    this.ring01 = null; 

                    this.addToInventory(ring01Ref, 1, slotId);
                    (Items.getItemByRef(ring01Ref) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Ring });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }  
                else if(this.ring02 && ring02){
                    const ring02Ref = this.ring02.ItemRef;
                    this.ring02 = null; 

                    this.addToInventory(ring02Ref, 1, slotId);
                    (Items.getItemByRef(ring02Ref) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Ring, ring02: true });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }            
            break;
            case EquipamentType.Offhand: 
                if(this.offhand){
                    const offhandRef = this.offhand.ItemRef;
                    this.offhand = null; 

                    this.addToInventory(offhandRef, 1, slotId);
                    (Items.getItemByRef(offhandRef) as Equipament)?.onDesequip(this); 
                    this.broadcast(packetDesequip, { type: EquipamentType.Offhand });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }              
            break;
            case EquipamentType.Weapon: 
                if(this.mainhand){
                    const mainhandRef = this.mainhand.ItemRef;
                    this.mainhand = null; 

                    this.addToInventory(mainhandRef, 1, slotId);
                    (Items.getItemByRef(mainhandRef) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Weapon });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }               
            break;
            case EquipamentType.Instrument: 
                if(this.instrument){
                    const instrumentRef = this.instrument.ItemRef;
                    this.instrument = null; 

                    this.addToInventory(instrumentRef, 1, slotId);
                    (Items.getItemByRef(instrumentRef) as Equipament)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Instrument });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }               
            break;
            case EquipamentType.Pet: 
                if(this.pet){
                    const petRef = this.pet.ItemRef;
                    this.pet = null; 

                    this.addToInventory(petRef, 1, slotId);
                    (Items.getItemByRef(petRef) as PetItem)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Pet });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }               
            break;
            case EquipamentType.Mount: 
                if(this.mount){
                    const mountRef = this.mount.ItemRef;
                    this.mount = null; 

                    this.addToInventory(mountRef, 1, slotId);
                    (Items.getItemByRef(mountRef) as MountItem)?.onDesequip(this);
                    this.broadcast(packetDesequip, { type: EquipamentType.Mount });

                    this.refreshEquipamentsList();
                    this.calculateStatics();
                    this.save();
                }               
            break;
        }
    }

    public refreshEquipamentsList() {
        let equipaments = new Array<Equipament>();

        if(this.helmet){
            const helmetItem = Items.getItemByRef(this.helmet.ItemRef);

            if(helmetItem)
                equipaments.push(helmetItem as Equipament);
        }

        if(this.chest){
            const chestItem = Items.getItemByRef(this.chest.ItemRef);

            if(chestItem)
                equipaments.push(chestItem as Equipament);
        }

        if(this.gloves){
            const glovesItem = Items.getItemByRef(this.gloves.ItemRef);

            if(glovesItem)
                equipaments.push(glovesItem as Equipament);
        }

        if(this.pants){
            const pantsItem = Items.getItemByRef(this.pants.ItemRef);

            if(pantsItem)
                equipaments.push(pantsItem as Equipament);
        }

        if(this.boots){
            const bootsItem = Items.getItemByRef(this.boots.ItemRef);

            if(bootsItem)
                equipaments.push(bootsItem as Equipament);
        }

        if(this.ring01){
            const ring01Item = Items.getItemByRef(this.ring01.ItemRef);

            if(ring01Item)
                equipaments.push(ring01Item as Equipament);
        }

        if(this.ring02){
            const ring02Item = Items.getItemByRef(this.ring02.ItemRef);

            if(ring02Item)
                equipaments.push(ring02Item as Equipament);
        }

        if(this.necklance){
            const necklanceItem = Items.getItemByRef(this.necklance.ItemRef);

            if(necklanceItem)
                equipaments.push(necklanceItem as Equipament);
        }

        if(this.cloak){
            const cloakItem = Items.getItemByRef(this.cloak.ItemRef);

            if(cloakItem)
                equipaments.push(cloakItem as Equipament);
        }

        if(this.robe){
            const robeItem = Items.getItemByRef(this.robe.ItemRef);

            if(robeItem)
                equipaments.push(robeItem as Equipament);
        }

        if(this.offhand){
            const offhandItem = Items.getItemByRef(this.offhand.ItemRef);

            if(offhandItem)
                equipaments.push(offhandItem as Equipament);
        }

        if(this.mainhand){
            const mainhandItem = Items.getItemByRef(this.mainhand.ItemRef);

            if(mainhandItem)
                equipaments.push(mainhandItem as Equipament);
        }

        if(this.instrument){
            const instrumentItem = Items.getItemByRef(this.instrument.ItemRef);

            if(instrumentItem)
                equipaments.push(instrumentItem as Equipament);
        }

        if(this.pet){
            const petItem = Items.getItemByRef(this.pet.ItemRef) as PetItem;
            petItem.onEquip(this);

            if(petItem)
                equipaments.push(petItem as Equipament);
        }

        if(this.mount){
            const mountItem = Items.getItemByRef(this.mount.ItemRef) as MountItem;
            mountItem.onEquip(this);

            if(mountItem)
                equipaments.push(mountItem as Equipament);
        }

        this.equipaments = equipaments;
        this.calculateStatics();
        this.refreshEquipamentsHeavy();
    }

    public getEquipamentsAttr(type: AttributeType) : number {
        let total = 0;

        if(this.equipaments && this.equipaments.length > 0){
            this.equipaments.map((equipament) => {
                if(equipament.Attrs.has(type) && !equipament.Flags.hasFlag(ItemStates.Broken))
                    total += equipament.Attrs.get(type);
            });
        }

        return total;
    }

    public getEquipamentsResistence(resistenceType: ResistenceType) : number {
        let total = 0;

        if(this.equipaments && this.equipaments.length > 0){            
            this.equipaments.map((equipament) => {
                if(equipament && !equipament?.Flags.hasFlag(ItemStates.Broken)){
                    switch(resistenceType){
                        case ResistenceType.Physical: total += equipament.Armor; break;
                        case ResistenceType.Fire: total += equipament.FireResistence; break;
                        case ResistenceType.Cold: total += equipament.ColdResistence; break;
                        case ResistenceType.Poison: total += equipament.PoisonResistence; break;
                        case ResistenceType.Energy: total += equipament.EnergyResistence; break;
                        case ResistenceType.Light: total += equipament.LightResistence; break;
                        case ResistenceType.Dark: total += equipament.DarkResistence; break;
                    }
                }
            })
        }

        return total;
    }

    public refreshEquipamentsHeavy() {
        let hasEquipmentMediumPart = false;
        let hasEquipmentHeavyPart = false;

        if(this.equipaments && this.equipaments.length > 0){
            this.equipaments.map((equipament) => {
                if(equipament.EquipmentWeight === EquipmentWeight.Medium)
                    hasEquipmentMediumPart = true;
                else if(equipament.EquipmentWeight === EquipmentWeight.Heavy)
                    hasEquipmentHeavyPart = true;
            });
        }

        this.hasMediumEquipamentPart = hasEquipmentMediumPart;
        this.hasHeavyEquipamentPart = hasEquipmentHeavyPart;
    }

    //Damage 
    public checkHitAutoAttack(data: ICheckHitAutoAttack) : void {
        try{
            const actor = this.map.findEntityById(data.actorId);

            if(!actor || !this.validateHit(data, actor))
                throw new Error("Invalid data hit");

            const bonusDamage = this.getWeaponBaseDamage();
            actor.takeDamage(this, Dices.D1D4, DamageType.Physic, bonusDamage);
            //this.gainSkillExperiencieByWeapon(this.getWeaponType());
        }
        catch(e){ }
    }

    public override getWeaponBaseDamage() : number {
        const weapon = (this.mainhand) ? Items.getItemByRef(this.mainhand.ItemRef) : null; 
        let baseDamage = (weapon) ?  (weapon as Weapon).Damage : Dices.D1D4;
        let bonusDamage = 0;

        if((weapon as Weapon)?.Flags.hasFlag(ItemStates.Broken))
            baseDamage = Dices.D1D4;

        if(weapon)
            bonusDamage = (weapon as Weapon).BonusDamage;

        const bonusBySkill = this.getSkillBonusByWeaponType(this.getWeaponType());
        return this.rollDice(baseDamage) + bonusBySkill + bonusDamage;
    }

    public getWeaponDiceDamage() : Dices {
        let weapon = (this.mainhand) ? Items.getItemByRef(this.mainhand.ItemRef) : null;
        
        if((weapon as Weapon)?.Flags.hasFlag(ItemStates.Broken))
            weapon = null;

        return (weapon) ?  (weapon as Weapon).Damage : Dices.D1D4;
    }

    public getWeaponSpeed(): number {
        const weapon = (this.mainhand) ? Items.getItemByRef(this.mainhand.ItemRef) : null; 
        return (weapon) ?  (weapon as Weapon).AttackSpeed : 0;
    }

    public override getWeaponType() : WeaponType { 
        const weapon = (this.mainhand) ? Items.getItemByRef(this.mainhand.ItemRef) : null; 
        const weaponType = (weapon) ?  (weapon as Weapon).WeaponType : WeaponType.None;
        return weaponType;
    }

    //Statics
    public calculateStatics(): void {
        super.calculateStatics();

        //Bonus stats
        this.bonusStr = this.getEquipamentsAttr(AttributeType.BonusStr);
        this.bonusDex = this.getEquipamentsAttr(AttributeType.BonusDex);
        this.bonusInt = this.getEquipamentsAttr(AttributeType.BonusInt);
        this.bonusVig = this.getEquipamentsAttr(AttributeType.BonusVig);
        this.bonusAgi = this.getEquipamentsAttr(AttributeType.BonusAgi);
        this.bonusLuc = this.getEquipamentsAttr(AttributeType.BonusLuc);

        //Resistences
        this.physicalResistence = Math.min(this.physicalResistence + this.getEquipamentsResistence(ResistenceType.Physical), 70);
        this.fireResistence = Math.min(this.fireResistence + this.getEquipamentsResistence(ResistenceType.Fire), 70);
        this.coldResistence = Math.min(this.coldResistence + this.getEquipamentsResistence(ResistenceType.Cold), 70);
        this.poisonResistence = Math.min(this.poisonResistence + this.getEquipamentsResistence(ResistenceType.Poison), 70);
        this.energyResistence = Math.min(this.energyResistence + this.getEquipamentsResistence(ResistenceType.Energy), 70);
        this.lightResistence = Math.min(this.lightResistence + this.getEquipamentsResistence(ResistenceType.Light), 70);
        this.darkResistence = Math.min(this.darkResistence + this.getEquipamentsResistence(ResistenceType.Dark), 70);

        //Regeneration
        this.lifeRegeneration = this.getEquipamentsAttr(AttributeType.HealthRegen);
        this.manaRegenegation = this.getEquipamentsAttr(AttributeType.ManaRegen);
        this.staminaRegenegation = this.getEquipamentsAttr(AttributeType.StaminaRegen);

        //Statics
        this.bonusPhysicalDamage = this.getEquipamentsAttr(AttributeType.BonusDamage);
        this.bonusMagicDamage = this.getEquipamentsAttr(AttributeType.BonusMagicDamage);
        this.weaponDamage = this.getWeaponDiceDamage().toString();
        this.weaponSpeed = this.getWeaponSpeed();
        this.criticalChance = this.getEquipamentsAttr(AttributeType.CriticalChance);
        this.criticalDamage = this.getEquipamentsAttr(AttributeType.CriticalDamage);        
        this.damageReduction = this.getEquipamentsAttr(AttributeType.DamageReduction);
        this.dodgeChance = this.getEquipamentsAttr(AttributeType.DodgeChance);
        this.reflectionPhysicalDamage = this.getEquipamentsAttr(AttributeType.ReflectPhysical);
        this.refrectionMagicDamage = this.getEquipamentsAttr(AttributeType.ReflectSpell);
        this.lowerManaCost = this.getEquipamentsAttr(AttributeType.LowerManaCost);        
        this.fasterCasting = this.getEquipamentsAttr(AttributeType.FasterCasting);
        this.cooldownReduction = this.getEquipamentsAttr(AttributeType.CooldownReduction);

        //Elemental Damage
        this.fireDamage = this.getEquipamentsAttr(AttributeType.FireDamage);
        this.coldDamage = this.getEquipamentsAttr(AttributeType.ColdDamage);
        this.poisonDamage = this.getEquipamentsAttr(AttributeType.PoisonDamage);
        this.energyDamage = this.getEquipamentsAttr(AttributeType.EnergyDamage);
        this.lightDamage = this.getEquipamentsAttr(AttributeType.LightDamage);
        this.darkDamage = this.getEquipamentsAttr(AttributeType.DarkDamage);
    }
}