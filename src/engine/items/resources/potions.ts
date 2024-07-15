import { DamageType, Dices, HealType } from "@enums";
import { ItemsService } from "@services";
import { Condition, ConditionType, EntityStates, ItemRarity } from "@engine";
import { Consumable, Items, Resource } from "..";
import { Entity } from "../../";

const ConsumePotionAnim = 13;

export class EmptyBottle extends Resource {
    public Namespace: string = "EmptyBottle";
    public Name: string = "Empty Bottle";
    public GoldCost: number = 5; 
}

export class BlackHerbMix extends Resource {
    public Namespace: string = "BlackHerbMix";
    public Name: string = "Black Herbal Extract";
    public GoldCost: number = 350; 
}

export class BlueHerbMix extends Resource {
    public Namespace: string = "BlueHerbMix";
    public Name: string = "Blue Herbal Extract";
    public GoldCost: number = 250; 
}

export class GreenHerbMix extends Resource {
    public Namespace: string = "GreenHerbMix";
    public Name: string = "Green Herbal Extract";
    public GoldCost: number = 250; 
}

export class RedHerbMix extends Resource {
    public Namespace: string = "RedHerbMix";
    public Name: string = "Red Herbal Extract";
    public GoldCost: number = 250; 
}

export class YellowHerbMix extends Resource {
    public Namespace: string = "YellowHerbMix";
    public Name: string = "Yellow Herbal Extract";
    public GoldCost: number = 250; 
}

export abstract class BasePotion extends Consumable {
    public override async use(entity: Entity) {
        const baseItem = new EmptyBottle();

        const itemRef = await (entity.socket.services.itemsService as ItemsService).createItem(
            entity.inventory.containerId, entity.characterId, baseItem.Namespace, 1, "consume"
        );

        entity.inventory.addItem(itemRef, 1);
        entity.save();
    }
}

//Life
export class SmallLifePotion extends BasePotion {
    public Namespace: string = "SmallLifePotion";
    public Name: string = "Small Life Potion";
    public GoldCost: number = 30; 

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.heal(entity, 50);
    }
}

export class LifePotion extends BasePotion {
    public Namespace: string = "LifePotion";
    public Name: string = "Life Potion"; 
    public GoldCost: number = 100;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.heal(entity, 100);
    }
}

export class LargeLifePotion extends BasePotion {
    public Namespace: string = "LargeLifePotion";
    public Name: string = "Large Life Potion"; 
    public GoldCost: number = 500;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.heal(entity, 200);
    }
}

//Mana
export class SmallManaPotion extends BasePotion {
    public Namespace: string = "SmallManaPotion";
    public Name: string = "Small Mana Potion"; 
    public GoldCost: number = 50;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        let value = 50;
        entity.mana = Math.min(entity.mana + value, entity.maxMana);
        entity.healBroadcast(entity, value, HealType.Mana);
    }
}

export class ManaPotion extends BasePotion {
    public Namespace: string = "ManaPotion";
    public Name: string = "Mana Potion"; 
    public GoldCost: number = 200;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        let value = 100;
        entity.mana = Math.min(entity.mana + value, entity.maxMana);
        entity.healBroadcast(entity, value, HealType.Mana);
    }
}

export class LargeManaPotion extends BasePotion {
    public Namespace: string = "LargeManaPotion";
    public Name: string = "Large Mana Potion"; 
    public GoldCost: number = 600;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        let value = 200;
        entity.mana = Math.min(entity.mana + value, entity.maxMana);
        entity.healBroadcast(entity, value, HealType.Mana);
    }
}

//Stamina
export class SmallStaminaPotion extends BasePotion {
    public Namespace: string = "SmallStaminaPotion";
    public Name: string = "Small Stamina Potion"; 
    public GoldCost: number = 30;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        let value = 50;
        entity.stamina = Math.min(entity.stamina + value, entity.maxStamina);
        entity.healBroadcast(entity, value, HealType.Stamina);
    }
}

export class StaminaPotion extends BasePotion {
    public Namespace: string = "StaminaPotion";
    public Name: string = "Stamina Potion"; 
    public GoldCost: number = 90;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        let value = 100;
        entity.stamina = Math.min(entity.stamina + value, entity.maxStamina);
        entity.healBroadcast(entity, value, HealType.Stamina);
    }
}

export class LargeStaminaPotion extends BasePotion {
    public Namespace: string = "LargeStaminaPotion";
    public Name: string = "Large Stamina Potion";
    public GoldCost: number = 120; 

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        let value = 150;
        entity.stamina = Math.min(entity.stamina + value, entity.maxStamina);
        entity.healBroadcast(entity, value, HealType.Stamina);
    }
}

//Cure
export class SmallCurePotion extends BasePotion {
    public Namespace: string = "SmallCurePotion";
    public Name: string = "Small Cure Potion"; 
    public GoldCost: number = 30;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.states.removeFlag(EntityStates.Poisoned);
    }
}

export class CurePotion extends BasePotion {
    public Namespace: string = "CurePotion";
    public Name: string = "Cure Potion"; 
    public GoldCost: number = 90;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.states.removeFlag(EntityStates.Poisoned);
        entity.heal(entity, 50);
    }
}

export class LargeCurePotion extends BasePotion {
    public Namespace: string = "LargeCurePotion";
    public Name: string = "Large Cure Potion"; 
    public GoldCost: number = 120;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.states.removeFlag(EntityStates.Poisoned);
        entity.heal(entity, 100);
    }
}

//Restore Elixir
export class SmallRestoreElixir extends BasePotion {
    public Namespace: string = "SmallRestoreElixir";
    public Name: string = "Small Restore Elixir"; 
    public GoldCost: number = 100;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.heal(entity, 50);
        entity.mana = Math.min(entity.mana + 50, entity.maxMana);
        entity.stamina = Math.min(entity.stamina + 50, entity.maxStamina);
    }
}

export class RestoreElixir extends BasePotion {
    public Namespace: string = "RestoreElixir";
    public Name: string = "Restore Elixir"; 
    public GoldCost: number = 500;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.heal(entity, 100);
        entity.mana = Math.min(entity.mana + 100, entity.maxMana);
        entity.stamina = Math.min(entity.stamina + 100, entity.maxStamina);
    }
}

export class BigRestoreElixir extends BasePotion {
    public Namespace: string = "BigRestoreElixir";
    public Name: string = "Big Restore Elixir";
    public GoldCost: number = 1000; 

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.heal(entity, 100);
        entity.mana = Math.min(entity.mana + 100, entity.maxMana);
        entity.stamina = Math.min(entity.stamina + 100, entity.maxStamina);
    }
}

//Poison 
export class SmallPoisonPotion extends BasePotion {
    public Namespace: string = "SmallPoisonPotion";
    public Name: string = "Small Poison Potion";
    public GoldCost: number = 90; 

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.takeDamage(entity, Dices.D1D10, DamageType.Poison);
        entity.applyCondition(new Condition(ConditionType.Poisoned, 6, entity, Dices.D1D6));
        entity.states.addFlag(EntityStates.Poisoned);
    }
}

export class PoisonPotion extends BasePotion {
    public Namespace: string = "PoisonPotion";
    public Name: string = "Poison Potion"; 
    public GoldCost: number = 250;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.takeDamage(entity, Dices.D2D10, DamageType.Poison);
        entity.applyCondition(new Condition(ConditionType.Poisoned, 8, entity, Dices.D1D10));
        entity.states.addFlag(EntityStates.Poisoned);
    }
}

export class LargePoisonPotion extends BasePotion {
    public Namespace: string = "LargePoisonPotion";
    public Name: string = "Large Poison Potion"; 
    public GoldCost: number = 900;

    public override async use(entity: Entity) {
        super.use(entity);
        this.playAnimation(entity, ConsumePotionAnim);
        entity.takeDamage(entity, Dices.D3D10, DamageType.Poison);
        entity.applyCondition(new Condition(ConditionType.Poisoned, 10, entity, Dices.D1D10));
        entity.states.addFlag(EntityStates.Poisoned);
    }
}

//Legendary Potions
export class OblivionPotion extends BasePotion {
    public Namespace: string = "OblivionPotion";
    public Name: string = "Oblivion Potion"; 
    public Rarity = ItemRarity.Legendary;
    public GoldCost: number = 10000;

    public override async use(entity: Entity) {
        super.use(entity);
    }
}

export class ShrinkagePotion extends BasePotion {
    public Namespace: string = "ShrinkagePotion";
    public Name: string = "Shrinkage Potion"; 
    public Rarity = ItemRarity.Magic;
    public GoldCost: number = 8000;

    public override async use(entity: Entity) {
        super.use(entity);
    }
}

Items.AddBaseItem("EmptyBottle", EmptyBottle);
Items.AddBaseItem("BlackHerbMix", BlackHerbMix);
Items.AddBaseItem("BlueHerbMix", BlueHerbMix);
Items.AddBaseItem("RedHerbMix", RedHerbMix);
Items.AddBaseItem("GreenHerbMix", GreenHerbMix);
Items.AddBaseItem("YellowHerbMix", YellowHerbMix);

Items.AddBaseItem("SmallLifePotion", SmallLifePotion);
Items.AddBaseItem("SmallManaPotion", SmallManaPotion);
Items.AddBaseItem("SmallStaminaPotion", SmallStaminaPotion);
Items.AddBaseItem("SmallCurePotion", SmallCurePotion);
Items.AddBaseItem("SmallRestoreElixir", SmallRestoreElixir);
Items.AddBaseItem("SmallPoisonPotion", SmallPoisonPotion);

Items.AddBaseItem("LifePotion", LifePotion);
Items.AddBaseItem("ManaPotion", ManaPotion);
Items.AddBaseItem("StaminaPotion", StaminaPotion);
Items.AddBaseItem("CurePotion", CurePotion);
Items.AddBaseItem("RestoreElixir", RestoreElixir);
Items.AddBaseItem("PoisonPotion", PoisonPotion);

Items.AddBaseItem("LargeLifePotion", LargeLifePotion);
Items.AddBaseItem("LargeManaPotion", LargeManaPotion);
Items.AddBaseItem("LargeStaminaPotion", LargeStaminaPotion);
Items.AddBaseItem("LargeCurePotion", LargeCurePotion);
Items.AddBaseItem("BigRestoreElixir", BigRestoreElixir);
Items.AddBaseItem("LargePoisonPotion", LargePoisonPotion);

Items.AddBaseItem("OblivionPotion", OblivionPotion);
Items.AddBaseItem("ShrinkagePotion", ShrinkagePotion);