import { Logger } from "@nestjs/common";
import { Dices } from "@enums";
import { packetPlayMontageEntity } from "@network";
import { Entity, ItemStates, Random, StateFlags, Player, PowerScroll, Pet, Humanoid, Mount, packetRefreshTooltip } from "..";

export enum EquipamentType {
    None, 
    Helmet,
    Chest,
    Pants,
    Boots,
    Gloves,
    Ring,
    Necklance,
    Robe,
    Cloak,
    Weapon,
    Offhand,
    Pet,
    Mount,
    Instrument,
    PickaxeTool,
    AxeTool,
    ScytheTool
}

export enum EquipmentWeight {
    Light,
    Medium,
    Heavy
}

export enum ItemRarity {
    Common,
    Uncommon,
    Rare,
    Magic,
    Legendary,
    Unique,
    Quest
}

export enum AttributeType {
    HealthRegen,
    ManaRegen,
    StaminaRegen,
    BonusDamage,
    BonusMagicDamage,
    BonusSpeed,
    BonusStr,
    BonusInt,
    BonusDex,
    BonusLife,
    BonusStam,
    BonusMana,
    SpellDamage,
    CastSpeed,
    LowerManaCost,
    ReflectPhysical,
    ReflectSpell,
    Luck,
    IncreasedKarmaLoss,
    CriticalChance,
    CriticalDamage,
    DamageReduction,
    DodgeChance,
    CooldownReduction,
    FasterCasting,
    BonusVig,
    BonusAgi,
    BonusLuc,
    FireDamage,
    ColdDamage,
    EnergyDamage,
    PoisonDamage,
    LightDamage,
    DarkDamage,
    BonusCollectsMineral,
    BonusCollectsSkins,
    BonusCollectsWood,
}

export enum WeaponType {
    None,
    Sword,
    Axe,
    Staff,
    Dagger,
    Hammer,
    Bow,
    Crossbow,
    TwoHandedAxe,
    TwoHandedSword,
    TwoHandedHammer,
    Spear,
    Pickaxe
}

export enum ResistenceType {
    Physical,
    Fire,
    Cold,
    Poison,
    Energy,
    Light,
    Dark
}

export enum EquipamentTier {
    T0, T1, T2, T3, T4, T5
};

let attrsEquipaments = [
    AttributeType.BonusDex, AttributeType.BonusInt, AttributeType.BonusLife,
    AttributeType.BonusMana,AttributeType.BonusSpeed, AttributeType.BonusStam,
    AttributeType.BonusStr, AttributeType.CastSpeed, AttributeType.CooldownReduction, 
    AttributeType.CriticalChance, AttributeType.DamageReduction, AttributeType.DodgeChance,
    AttributeType.HealthRegen, AttributeType.ManaRegen, AttributeType.StaminaRegen, 
    AttributeType.LowerManaCost, AttributeType.IncreasedKarmaLoss,
    AttributeType.Luck, AttributeType.ReflectPhysical, AttributeType.ReflectSpell, 
    AttributeType.BonusAgi, AttributeType.BonusVig, AttributeType.BonusLuc
];

let attrsAccessories = [
    AttributeType.HealthRegen, AttributeType.ManaRegen, AttributeType.StaminaRegen, 
    AttributeType.BonusDex, AttributeType.BonusInt, AttributeType.BonusLife,
    AttributeType.BonusAgi, AttributeType.BonusVig, AttributeType.BonusLuc
];

let attrsWeapon = [
    AttributeType.HealthRegen, AttributeType.ManaRegen, AttributeType.StaminaRegen, 
    AttributeType.BonusDex, AttributeType.BonusInt, AttributeType.BonusLife,
    AttributeType.BonusAgi, AttributeType.BonusVig, AttributeType.BonusLuc,
    AttributeType.BonusDamage, AttributeType.BonusMagicDamage,
    AttributeType.CriticalDamage, AttributeType.FasterCasting,
    AttributeType.SpellDamage, AttributeType.FireDamage, 
    AttributeType.ColdDamage, AttributeType.PoisonDamage,
    AttributeType.EnergyDamage, AttributeType.LightDamage,
    AttributeType.DarkDamage
];

let attrsWeaponWithoutElementalDamage = [
    AttributeType.HealthRegen, AttributeType.ManaRegen, AttributeType.StaminaRegen, 
    AttributeType.BonusDex, AttributeType.BonusInt, AttributeType.BonusLife,
    AttributeType.BonusAgi, AttributeType.BonusVig, AttributeType.BonusLuc,
    AttributeType.BonusDamage, AttributeType.BonusMagicDamage,
    AttributeType.CriticalDamage, AttributeType.FasterCasting,
    AttributeType.SpellDamage
]; 

export class Items {
    public static BaseItems: Map<string, { new (): any }> = new Map<string, { new (): any }>();
    public static CachedItems: Map<string, Item> = new Map<string, Item>();

    public static AddBaseItem(refs: string[] | string, clas: any) {
        if(Array.isArray(refs)) {
            for(let namespace of refs){
                Items.BaseItems.set(namespace, clas);
                Items.BaseItems.set(namespace.toLocaleLowerCase(), clas);
            } 
        }
        else {
            Items.BaseItems.set(refs, clas);
            Items.BaseItems.set(refs.toLocaleLowerCase(), clas);
        }        
    }

    public static findBaseItemByNamespace(namespace: string) : any | null {
        return (Items.BaseItems.has(namespace)) ? Items.BaseItems.get(namespace) : null;
    }

    public static loadFromDatabase(namespace: string, ref: string, props: any) : Item | null {
        const baseItem = Items.findBaseItemByNamespace(namespace);

        if(baseItem){
            let item = new baseItem() as Item;
            item.Ref = ref;

            if(props){
                for (let key in props) {
                    if(key !== "Attr" && key !== "Cards" && key !== "Flags" && props[key] !== "[object Object]")
                        item[key] = props[key];
                }

                if(props && Array.isArray(props.Attr) && props.Attr.length > 0 && item instanceof Equipament){
                    for (let key in props.Attr) 
                        item.Attrs.set(props.Attr[key].type as AttributeType, props.Attr[key].value);  
                }

                if(props && Array.isArray(props.Cards) && props.Cards.length > 0 && item instanceof Equipament){
                    for (let key in props.Cards) 
                        item.Cards.push(props.Cards[key]);  
                }

                if(props && props["Flags"])
                    item.Flags = new StateFlags(props["Flags"]);

                item.Amount = Math.round(item.Amount);
                item.updateGoldCost();
            }            

            return item;
        }
        else {
            //Logger.log(`No item base found ${namespace}`)
        }

        return null;
    }

    public static hasItemBase(baseItemName: string) : boolean {
        return Items.BaseItems.has(baseItemName);
    }

    public static getItemBase(baseItemName: string) : any {
        return Items.BaseItems.get(baseItemName);
    }

    public static createItem(baseItemName: string, attrs: any, createBy: string = "") : Item | null {
        if(Items.BaseItems.has(baseItemName)){
            const base = Items.BaseItems.get(baseItemName);
            const item = new base();

            if(item instanceof PowerScroll){
                (item as PowerScroll).generateAttrs();
            }
            else{
                item.generateAttrs();
                item.generateRandomAttrs();
                item.updateGoldCost();
                item.CraftBy = createBy;
            }
            
            return item;
        }
        else {
            return null;
        }        
    }

    public static createItemByClass(cls: any, createBy: string = "") : Item {
        const item = new cls() as Item;
        item.generateAttrs();
        item.generateRandomAttrs();
        item.updateGoldCost();
        item.CraftBy = createBy;
        return item;      
    }

    public static itemFromDatabase(data: any) : Item | null { 
        try{
            const itemName = data.itemName || data.ItemName;
            const amount = data.amount || data.Amount;
            const ref = data.id || data.ItemRef || data.itemRef;
            let props = data.props || data.Props;
            const containerId = data.containerId;
            
            if(props && typeof props === "string" && props !== "Null" && props !== "[object Object]")
                props = JSON.parse(props);  
            else if(props !== "[object Object]")  
                props = {};    
            
            const cleanProps = (props: any) => {
                if (typeof props === 'object' && props !== null) {
                    return Object.keys(props).reduce((acc, key) => {
                        if (props[key] && key !== "Amount") 
                            acc[key] = props[key];
                        
                        return acc;
                    }, {} as any);
                }
                
                return null;
            };
    
            props = cleanProps(props);
                
            const item = Items.loadFromDatabase(itemName, ref, props);
            
            if(item){
                item.ContainerId = containerId;

                if(amount > 1 && (item as Stackable))
                    (item as Stackable).Amount = amount;

                Items.CachedItems.set(ref, item);
            }
            else {          
                //Logger.error(`Erro to load item`);
                //process.exit(1);
            }
            
            return item;
        }
        catch (e){
            return null;
        }        
    }

    public static hasItem(ref: string) : boolean {
        return Items.CachedItems.has(ref);
    }

    public static getItemByRef(ref: string) : Item | null {
        return Items.CachedItems.has(ref) ? Items.CachedItems.get(ref) : null;
    }

    public static setItem(ref: string, item: Item) {
        Items.CachedItems.set(ref, item);
    }

    public static removeItem(ref: string) {
        Items.CachedItems.delete(ref);
    }

    public static async reduceDurability(ref: string, owner: Player) {
        if(Items.CachedItems.has(ref)) {
            let item = Items.CachedItems.get(ref);
            let chanceReduce = Random.MinMaxInt(1, 10);

            if(item instanceof Equipament && chanceReduce === 1){
                let equipament = (item as Equipament);
                let newDurability = Math.max(equipament.Durability - 1, 0);
                equipament.setDurability(newDurability, equipament.MaxDurability);

                if(newDurability <= 0)
                    equipament.Flags.addFlag(ItemStates.Broken);

                let props = equipament.serealize();

                const cleanProps = (props: any) => {
                    if (typeof props === 'object' && props !== null) {
                        return Object.keys(props).reduce((acc, key) => {
                            if (props[key]) {
                                acc[key] = props[key];
                            }
                            return acc;
                        }, {} as any);
                    }
                    return null;
                };
        
                const filteredProps = cleanProps(props);

                await owner.socket.services.gameServerQueue.add("update", {
                    table: "item", 
                    id: item.Ref,
                    set: { 
                        props: (typeof props === "object") ? JSON.stringify(filteredProps) : null 
                    }                        
                });

                Items.CachedItems.set(ref, equipament);
                packetRefreshTooltip.send(owner, item.Ref, filteredProps);               
            }
        }
    }
}

export abstract class Item {
    public abstract Namespace: string;
    public abstract Name: string;
    public ContainerId: string;
    public Amount: number = 1;
    public Rarity: ItemRarity = ItemRarity.Common;
    public Ref: string;
    public Weight: number = 0.1;
    public Hue: number;
    public Flags: StateFlags = new StateFlags(ItemStates.None);
    public GoldCost: number = 0;
    public CraftBy: string;
    public CraftingInfo: Map<string, string> = new Map<string, string>();

    protected getRandomIntInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    public createItem(itemName: string) : any | null {
        const base = Items.findBaseItemByNamespace(itemName);
        base.Flags = new StateFlags(ItemStates.None);

        if(base){
            const newItem = new base();
            newItem.generateAttrs();
            newItem.generateRandomAttrs();
            newItem.updateGoldCost();
            return newItem;
        }

        return null;
    }

    public updateGoldCost(){
        switch(this.Rarity){
            case ItemRarity.Uncommon: this.GoldCost += this.GoldCost * 0.3; break;
            case ItemRarity.Rare: this.GoldCost += this.GoldCost * 0.5; break;
            case ItemRarity.Magic: this.GoldCost += this.GoldCost * 0.8; break;
            case ItemRarity.Legendary: this.GoldCost += this.GoldCost; break;
        }

        if(this.Flags.hasFlag(ItemStates.Exceptional))
            this.GoldCost += this.GoldCost * 0.15;

        if(this.Flags.hasFlag(ItemStates.Insured))
            this.GoldCost += this.GoldCost;

        if(this.Flags.hasFlag(ItemStates.Blessed))
            this.GoldCost += this.GoldCost * 5;

        if(this.Flags.hasFlag(ItemStates.Broken))
            this.GoldCost = 1;
    }

    public generateAttrs(){}
    public generateRandomAttrs(){}

    public setInsured(){
        this.Flags.addFlag(ItemStates.Insured);
    }

    public removeInsured(){
        this.Flags.removeFlag(ItemStates.Insured);
    }

    public setBlessed(){
        this.Flags.addFlag(ItemStates.Blessed);
    }

    public serealize() : any {
        return {
            Rarity: this.Rarity,
            Hue: this.Hue,
            Flags: (this.Flags) ? this.Flags.getCurrentFlags() : new StateFlags(ItemStates.None).getCurrentFlags(),
            CraftBy: this.CraftBy
        }
    }
}

export abstract class Stackable extends Item {
    public setAmount(amount: number){
        if(amount > 0)
            this.Amount = amount;
    }

    public override serealize() : any {
        let data = super.serealize();
        data.Amount = this.Amount;
        return data;
    }
}

export abstract class Resource extends Stackable {}

export abstract class Consumable extends Resource { 
    public use(entity: Entity){}

    public playAnimation(owner: Entity, index: number){
        packetPlayMontageEntity.send(owner, owner, index);
        owner.areaOfInterece.map((entity) => packetPlayMontageEntity.send(owner, entity, index));
    }

    public execActionInterval(ticks: number, delay: number, cb: Function){
        return new Promise((resolve, reject) => {
            for(let i = 0; i < ticks; i++)
                setTimeout((_this) => cb.call(_this), delay * i, this);

            setTimeout(resolve, ticks * delay);
        });
    }
}

export abstract class Equipament extends Item {
    public EquipamentType: EquipamentType = EquipamentType.None;
    public EquipmentWeight: EquipmentWeight = EquipmentWeight.Light;
    public MaxDurability: number = 25;
    public Durability: number = 25;
    public Armor: number = 0;
    public MaxAttrs: number = 0;
    public Tier: EquipamentTier = EquipamentTier.T1;

    //Resistences
    public FireResistence: number = 0;
    public ColdResistence: number = 0;
    public PoisonResistence: number = 0;
    public EnergyResistence: number = 0;
    public LightResistence: number = 0;
    public DarkResistence: number = 0;

    public Attrs: Map<AttributeType, number> = new Map<AttributeType, number>();

    //Card
    public Cards: Array<string> = new Array<string>();
    public MaxSlots: number = 3;
    public CardSlots: number = 0;

    public onEquip(entity: Humanoid) {}
    public onDesequip(entity: Humanoid) {}

    private removeRandomAttributes(count: number) {
        const attributes = Array.from(this.Attrs.keys());
    
        for (let i = 0; i < count; i++) {
            if (attributes.length === 0) 
                break; 
                
            const randomIndex = Random.MinMaxInt(0, attributes.length - 1);
            const attributeToRemove = attributes[randomIndex];
            this.Attrs.delete(attributeToRemove);
            attributes.splice(randomIndex, 1);
        }
    }

    public getTierValueAttr() {
        switch(this.Tier){
            case EquipamentTier.T0: return 1;
            case EquipamentTier.T1: return Random.MinMaxInt(1,5);
            case EquipamentTier.T2: return Random.MinMaxInt(6,10);
            case EquipamentTier.T3: return Random.MinMaxInt(11,15);
            case EquipamentTier.T4: return Random.MinMaxInt(16,20);
            case EquipamentTier.T5: return Random.MinMaxInt(21,25);
        }
    }

    public generateRandomAttrs() {
        let baseDurability = 25;
        let minAttrs = 1;

        switch(this.Tier){
            case EquipamentTier.T2: 
                baseDurability += 10; 
                minAttrs = 1;
            break;
            case EquipamentTier.T3: 
                baseDurability += 25;
                minAttrs = 2 
            break;
            case EquipamentTier.T4: 
                baseDurability += 50; 
                minAttrs = 3;
            break;
            case EquipamentTier.T5: 
                baseDurability += 100; 
                minAttrs = 4;                
            break;
        }

        switch(this.Rarity){
            case ItemRarity.Uncommon:
                baseDurability+=20;
                minAttrs++;
            break;
            case ItemRarity.Rare:
                baseDurability+=50;

                if(minAttrs < 2)
                    minAttrs = 2;
            break;
            case ItemRarity.Magic:
                baseDurability+=100;

                if(minAttrs < 3)
                    minAttrs = 3;
            break;
            case ItemRarity.Legendary:
                baseDurability+=100;

                if(minAttrs < 4)
                    minAttrs = 4;
            break;
            case ItemRarity.Unique:
                baseDurability+=300;

                if(minAttrs < 4)
                    minAttrs = 4;
            break;
        }

        if(this instanceof Tool) {
            
        }
        else {
            minAttrs = Math.min(minAttrs, 4);
            let attrsCounts = (this.MaxAttrs > minAttrs) ? Random.MinMaxInt(minAttrs, this.MaxAttrs) : minAttrs;
            this.Attrs.clear();
            
            for(let i = 0; i < attrsCounts; i++){
                let attrType = (this instanceof Weapon) ? Random.ArrRandom(attrsWeapon) : 
                Random.ArrRandom(attrsEquipaments);

                const value = this.getTierValueAttr();

                if(!this.Attrs.has(attrType))
                    this.Attrs.set(attrType, value);            
                else
                    i--;
            }

            //Exeptional
            if(this.Flags.hasFlag(ItemStates.Exceptional)){
                baseDurability += 50;

                if(this.Armor > 0)
                    this.Armor++;

                if(this.FireResistence > 0)
                    this.FireResistence++;

                if(this.ColdResistence > 0)
                    this.ColdResistence++;

                if(this.PoisonResistence > 0)
                    this.PoisonResistence++;

                if(this.EnergyResistence > 0)
                    this.EnergyResistence++;

                if(this.LightResistence > 0)
                    this.LightResistence++;

                if(this.DarkResistence > 0)
                    this.DarkResistence++;
            }

            //Durability
            this.setDurability(Math.min(baseDurability, 450));

            //Cards
            if(this.Tier >= EquipamentTier.T3){
                if(this.MaxSlots > 0 && this.CardSlots <= 0){
                    const slotChance = Random.MinMaxInt(0, 100);

                    if(slotChance <= 10){
                        const slotAmount = Random.MinMaxInt(1, this.MaxSlots);
                        this.removeRandomAttributes(slotAmount);
                        this.CardSlots = slotAmount;
                        this.Name = `${this.Name} (${this.CardSlots})`;
                    }
                }   
                else if(this.CardSlots > 0){
                    this.Name = `${this.Name} (${this.CardSlots})`;
                }  
            } 
        }

        
    }

    public randomRarity(player: Player) {
        let randomValue = Random.MinMaxInt(1, 1000);
        let randomValueExptional = Random.MinMaxInt(1, 5);
    
        let luckFactor = player.luc / 100; 
        let commonLimit = 500 - (250 * luckFactor); 
        let uncommonLimit = commonLimit + (400 * (1 + luckFactor)); 
        let rareLimit = uncommonLimit + (80 * (1 + luckFactor)); 
        let magicLimit = rareLimit + (15 * (1 + luckFactor));
        let legendaryLimit = 1000; 
    
        if (commonLimit < 250) commonLimit = 250;
        if (uncommonLimit > 900) uncommonLimit = 900;
        if (rareLimit > 980) rareLimit = 980;
        if (magicLimit > 995) magicLimit = 995;
    
        randomValue += player.luc * 3;
        
        if (randomValueExptional === 1) 
            this.Flags.addFlag(ItemStates.Exceptional);
            
        if (randomValue <= commonLimit) 
            this.Rarity = ItemRarity.Common;
        else if (randomValue <= uncommonLimit) 
            this.Rarity = ItemRarity.Uncommon;
        else if (randomValue <= rareLimit) 
            this.Rarity = ItemRarity.Rare;
        else if (randomValue <= magicLimit) 
            this.Rarity = ItemRarity.Magic;
        else if (randomValue <= legendaryLimit) 
            this.Rarity = ItemRarity.Legendary;
        else
            this.Rarity = ItemRarity.Common; 
            
        this.generateRandomAttrs();
    }
   
    public setDurability(newDurability, maxDurability: number = 0) {
        this.MaxDurability = (maxDurability > 0) ? maxDurability : newDurability;
        this.Durability = newDurability;
    }

    public setArmor(min: number, max: number = 0) {
        this.Armor = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setFireResistence(min: number, max: number = 0) {
        this.FireResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setColdResistence(min: number, max: number = 0) {
        this.ColdResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setPoisonResistence(min: number, max: number = 0) {
        this.PoisonResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setEnergyResistence(min: number, max: number = 0) {
        this.EnergyResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setLightResistence(min: number, max: number = 0) {
        this.LightResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setDarkResistence(min: number, max: number = 0) {
        this.DarkResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setAttr(attributeType: AttributeType, value: number) {
        this.Attrs.set(attributeType, value);
    }

    public override serealize() : any {
        let data = super.serealize();
        data.MaxDurability = this.MaxDurability;
        data.Durability = this.Durability;
        data.Armor = this.Armor;
        data.FireResistence = this.FireResistence;
        data.ColdResistence = this.ColdResistence;
        data.PoisonResistence = this.PoisonResistence;
        data.EnergyResistence = this.EnergyResistence;
        data.LightResistence = this.LightResistence;
        data.DarkResistence = this.DarkResistence;
        data.Attr = Array.from(this.Attrs, ([type, value]) => ({ type, value }));
        data.Weight = this.Weight;
        data.GoldCost = this.GoldCost;
        data.CardSlots = this.CardSlots;
        data.Cards = this.Cards;
        return data;
    }
}

export abstract class Accessory extends Equipament {
    public override EquipmentWeight = EquipmentWeight.Light;
    public override MaxSlots: number = 1;

    public generateRandomAttrs() {
        let minAttrs = 1;

        minAttrs = Math.min(minAttrs, 4);
        let attrsCounts = (this.MaxAttrs > minAttrs) ? Random.MinMaxInt(minAttrs, this.MaxAttrs) : minAttrs;
        this.Attrs.clear();
        
        for(let i = 0; i < attrsCounts; i++){
            let attrType = (this instanceof Weapon) ? Random.ArrRandom(attrsWeapon) : 
            Random.ArrRandom(attrsAccessories);

            const value = this.getTierValueAttr();

            if(!this.Attrs.has(attrType))
                this.Attrs.set(attrType, value);            
            else
                i--;
        }
    }
}

export abstract class Ring extends Accessory {
    public override EquipamentType: EquipamentType = EquipamentType.Ring;
    public override MaxSlots: number = 1;
}

export abstract class Necklance extends Accessory {
    public override EquipamentType: EquipamentType = EquipamentType.Necklance;
    public override MaxSlots: number = 1;
}

export abstract class Offhand extends Equipament {
    public override MaxAttrs: number = 0;
    public override MaxSlots: number = 1;
    public BlockChance: number = 0;
        
    public setBlockChance(min: number, max: number = 0){
        this.BlockChance = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public override serealize() : any {
        let data = super.serealize();
        data.BlockChance = this.BlockChance;
        return data;
    }
}

export abstract class Weapon extends Equipament {
    public override MaxSlots: number = 4;
    public Damage: Dices = Dices.None;
    public BonusDamage: number = 0;
    public EquipamentType: EquipamentType = EquipamentType.Weapon;
    public WeaponType: WeaponType = WeaponType.None;
    public AttackSpeed: number = 2; 
    public MaxAttrs: number = 2;
    
    private static readonly diceUpgradeMap = {
        "1D4": "1D6", "2D4": "2D6", "3D4": "3D6", "4D4": "4D6", "5D4": "5D6", "6D4": "6D6",
        "1D6": "1D8", "2D6": "2D8", "3D6": "3D8", "4D6": "4D8", "5D6": "5D8", "6D6": "6D8",
        "1D8": "1D10", "2D8": "2D10", "3D8": "3D10", "4D8": "4D10", "5D8": "5D10", "6D8": "6D10",
        "1D10": "1D12", "2D10": "2D12", "3D10": "3D12", "4D10": "4D12", "5D10": "5D12", "6D10": "6D12",
        "1D12": "1D20", "2D12": "2D20", "3D12": "3D20", "4D12": "4D20", "5D12": "5D20", "6D12": "6D20"
    };

    private upgradeDamage(damage: Dices): Dices {
        return Weapon.diceUpgradeMap[damage] || damage;
    }

    public override generateRandomAttrs() {
        super.generateRandomAttrs();

        switch(this.Rarity) {
            case ItemRarity.Uncommon: 
                this.BonusDamage = 1; 
                this.Damage = this.upgradeDamage(this.Damage);
            break;
            case ItemRarity.Rare: 
                this.BonusDamage = 2; 
                this.Damage = this.upgradeDamage(this.upgradeDamage(this.Damage));
            break;
            case ItemRarity.Magic: 
                this.BonusDamage = 3; 

                for (let i = 0; i < 3; i++) 
                    this.Damage = this.upgradeDamage(this.Damage);                
            break;
            case ItemRarity.Legendary: 
                this.BonusDamage = 4; 

                for (let i = 0; i < 4; i++) 
                    this.Damage = this.upgradeDamage(this.Damage);                
            break;
            case ItemRarity.Unique: 
                this.BonusDamage = 5; 

                for (let i = 0; i < 5; i++) 
                    this.Damage = this.upgradeDamage(this.Damage);                
            break;
        }

        if (this.Flags.hasFlag(ItemStates.Exceptional))
            this.BonusDamage++;
        
    }

    public override serealize() : any {
        let data = super.serealize();
        data.Damage = this.Damage;
        data.BonusDamage = this.BonusDamage;
        data.AttackSpeed = this.AttackSpeed;
        return data;
    }
}

export abstract class Tool extends Equipament {
    public MaxSlots: number = 0;
}

export abstract class PickaxeTool extends Tool {
    public EquipamentType: EquipamentType = EquipamentType.PickaxeTool;
    
}

export abstract class AxeTool extends Tool {
    public EquipamentType: EquipamentType = EquipamentType.AxeTool;
}

export abstract class ScytheTool extends Tool {
    public EquipamentType: EquipamentType = EquipamentType.ScytheTool;
}

export abstract class PetItem extends Equipament {
    public abstract PetCreature: { new (owner: Player): Pet };
    public override MaxSlots: number = 0;
    public override EquipamentType = EquipamentType.Pet;

    public override onEquip(entity: Humanoid) {
        if(entity.petInstance){
            entity.petInstance.destroy();
            entity.petInstance = null;
        }

        setTimeout(() => {            
            if(entity && entity.map && !entity.petInstance){
                entity.petInstance = new this.PetCreature(entity as Player);
                entity.petInstance.transform.position = entity.transform.position;
                entity.map.joinMap(entity.petInstance);
            }
        }, 1000);
    };

    public override onDesequip(entity: Humanoid) {
        if(entity.petInstance){
            entity.petInstance.destroy();
            entity.petInstance = null;
        }            
    };
}

export abstract class MountItem extends Equipament {
    //public abstract MountCreature: { new (owner: Player): Mount };
    public override EquipamentType = EquipamentType.Mount;
    public override MaxSlots: number = 0;
    //private InstancedCreature: Mount;
}

export abstract class Card extends Item {
    public Attack: number;
    public HP: number;
    public Energy: number;

    //Resistences
    public Armor: number = 0;
    public FireResistence: number = 0;
    public ColdResistence: number = 0;
    public PoisonResistence: number = 0;
    public EnergyResistence: number = 0;
    public LightResistence: number = 0;
    public DarkResistence: number = 0;

    public Attrs: Map<AttributeType, number> = new Map<AttributeType, number>();

    public setArmor(min: number, max: number = 0) {
        this.Armor = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setFireResistence(min: number, max: number = 0) {
        this.FireResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setColdResistence(min: number, max: number = 0) {
        this.ColdResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setPoisonResistence(min: number, max: number = 0) {
        this.PoisonResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setEnergyResistence(min: number, max: number = 0) {
        this.EnergyResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setLightResistence(min: number, max: number = 0) {
        this.LightResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setDarkResistence(min: number, max: number = 0) {
        this.DarkResistence = (max > 0) ? this.getRandomIntInRange(min, max) : min;
    }

    public setAttr(attributeType: AttributeType, value: number) {
        this.Attrs.set(attributeType, value);
    }

    public override serealize() : any {
        let data = super.serealize();
        data.Armor = this.Armor;
        data.FireResistence = this.FireResistence;
        data.ColdResistence = this.ColdResistence;
        data.PoisonResistence = this.PoisonResistence;
        data.EnergyResistence = this.EnergyResistence;
        data.LightResistence = this.LightResistence;
        data.DarkResistence = this.DarkResistence;
        data.Attr = Array.from(this.Attrs, ([type, value]) => ({ type, value }));
        data.Weight = this.Weight;
        data.GoldCost = this.GoldCost;
        return data;
    }
}