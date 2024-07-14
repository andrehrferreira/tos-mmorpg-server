import { Items, Consumable } from "..";
import { HealType } from "@enums";
import { Item, Resource, Stackable } from "..";
import { Entity } from "../../";

export class Apple extends Consumable {
    public Namespace: string = "Apple";
    public Name: string = "Apple"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;

    public override async use(entity: Entity) {
        entity.heal(entity, 1);
    }
}

export class ApplePie extends Consumable {
    public Namespace: string = "ApplePie";
    public Name: string = "Apple Pie"; 
    public Weight: number = 1;
    public GoldCost: number = 20;

    public override async use(entity: Entity) {
        entity.heal(entity, 10);
    }
}

export class Bacon extends Consumable {
    public Namespace: string = "Bacon";
    public Name: string = "Bacon"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;

    public override async use(entity: Entity) {
        entity.heal(entity, 1);
    }
}

export class BakedFish extends Consumable {
    public Namespace: string = "BakedFish";
    public Name: string = "Baked Fish"; 
    public Weight: number = 0.1;
    public GoldCost: number = 50;

    public override async use(entity: Entity) {
        entity.heal(entity, 20);
    }
}

export class Banana extends Consumable {
    public Namespace: string = "Banana";
    public Name: string = "Banana"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;

    public override async use(entity: Entity) {
        entity.heal(entity, 1);
    }
}

export class Beer extends Consumable {
    public Namespace: string = "Beer";
    public Name: string = "Beer"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;

    public override async use(entity: Entity) {
        entity.heal(entity, 5);
    }
}

export class Bread extends Consumable {
    public Namespace: string = "Bread";
    public Name: string = "Bread"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;

    public override async use(entity: Entity) {
        entity.heal(entity, 1);
    }
}

export class Butter extends Resource {
    public Namespace: string = "Butter";
    public Name: string = "Butter"; 
    public Weight: number = 0.1;
    public GoldCost: number = 20;
}

export class Cabbage extends Resource {
    public Namespace: string = "Cabbage";
    public Name: string = "Cabbage"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Cake extends Consumable {
    public Namespace: string = "Cake";
    public Name: string = "Cake"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);
    }
}

export class Carrot extends Consumable {
    public Namespace: string = "Carrot";
    public Name: string = "Carrot"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;

    public override async use(entity: Entity) {
        entity.heal(entity, 1);
    }
}

export class CheeseWedge extends Consumable {
    public Namespace: string = "CheeseWedge";
    public Name: string = "Cheese Wedge"; 
    public Weight: number = 0.1;
    public GoldCost: number = 20;

    public override async use(entity: Entity) {
        entity.heal(entity, 10);
    }
}

export class Chocolate extends Consumable {
    public Namespace: string = "Chocolate";
    public Name: string = "Chocolate"; 
    public Weight: number = 0.1;
    public GoldCost: number = 50;

    public override async use(entity: Entity) {
        entity.heal(entity, 50);
    }
}

export class Cocoa extends Consumable {
    public Namespace: string = "Cocoa";
    public Name: string = "Cocoa"; 
    public Weight: number = 0.1;
    public GoldCost: number = 20;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);
    }
}

export class Coconut extends Consumable {
    public Namespace: string = "Coconut";
    public Name: string = "Coconut"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);
    }
}

export class Cookies extends Consumable {
    public Namespace: string = "Cookies";
    public Name: string = "Cookies"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);

        entity.mana = Math.min(entity.mana + 100, entity.maxMana);
        entity.healBroadcast(entity, 100, HealType.Mana);

        entity.stamina = Math.min(entity.stamina + 100, entity.maxStamina);
        entity.healBroadcast(entity, 100, HealType.Stamina);
    }
}

export class Corn extends Consumable {
    public Namespace: string = "Corn";
    public Name: string = "Corn"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);
    }
}

export class Cucumber extends Consumable {
    public Namespace: string = "Cucumber";
    public Name: string = "Cucumber"; 
    public Weight: number = 0.1;
    public GoldCost: number = 2;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);
    }
}

export class Egg extends Consumable {
    public Namespace: string = "Egg";
    public Name: string = "Egg"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);
    }
}

export class FishRaw extends Resource {
    public Namespace: string = "FishRaw";
    public Name: string = "Fish Raw"; 
    public Weight: number = 0.1;
    public GoldCost: number = 2;
}

export class FishSteak extends Consumable {
    public Namespace: string = "FishSteak";
    public Name: string = "Fish Steak"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;

    public override async use(entity: Entity) {
        entity.heal(entity, 50);
    }
}

export class Grapes extends Consumable {
    public Namespace: string = "Grapes";
    public Name: string = "Grapes"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;

    public override async use(entity: Entity) {
        entity.mana = Math.min(entity.mana + 50, entity.maxMana);
        entity.healBroadcast(entity, 50, HealType.Mana);
    }
}

export class Ham extends Consumable {
    public Namespace: string = "Ham";
    public Name: string = "Ham"; 
    public Weight: number = 0.1;
    public GoldCost: number = 25;
}

export class Honey extends Consumable {
    public Namespace: string = "Honey";
    public Name: string = "Honey"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;

    public override async use(entity: Entity) {
        entity.mana = Math.min(entity.mana + 100, entity.maxMana);
        entity.healBroadcast(entity, 100, HealType.Mana);
    }
}

export class Leek extends Resource {
    public Namespace: string = "Leek";
    public Name: string = "Leek"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Lemon extends Resource {
    public Namespace: string = "Lemon";
    public Name: string = "Lemon"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;
}

export class Lettuce extends Resource {
    public Namespace: string = "Lettuce";
    public Name: string = "Lettuce"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Mead extends Consumable {
    public Namespace: string = "Mead";
    public Name: string = "Mead"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;

    public override async use(entity: Entity) {
        entity.mana = Math.min(entity.mana + 300, entity.maxMana);
        entity.healBroadcast(entity, 300, HealType.Mana);
    }
}

export class Meat extends Resource {
    public Namespace: string = "Meat";
    public Name: string = "Meat"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Meatstick extends Consumable {
    public Namespace: string = "Meatstick";
    public Name: string = "Meatstick"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);
    }
}

export class Melon extends Resource {
    public Namespace: string = "Melon";
    public Name: string = "Melon"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
}

export class Milk extends Resource {
    public Namespace: string = "Milk";
    public Name: string = "Milk"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Mushrooms extends Consumable {
    public Namespace: string = "Mushrooms";
    public Name: string = "Mushrooms"; 
    public Weight: number = 0.1;
    public GoldCost: number = 2;

    public override async use(entity: Entity) {
        entity.stamina = Math.min(entity.stamina + 50, entity.maxStamina);
        entity.healBroadcast(entity, 50, HealType.Stamina);
    }
}

export class OmeleteWithBacon extends Consumable {
    public Namespace: string = "OmeleteWithBacon";
    public Name: string = "Omelete With Bacon"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);

        entity.stamina = Math.min(entity.stamina + 50, entity.maxStamina);
        entity.healBroadcast(entity, 50, HealType.Stamina);
    }
}

export class Onion extends Resource {
    public Namespace: string = "Onion";
    public Name: string = "Onion"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
}

export class OnionSoup extends Consumable {
    public Namespace: string = "OnionSoup";
    public Name: string = "Onion Soup"; 
    public Weight: number = 0.1;
    public GoldCost: number = 80;

    public override use(entity: Entity){
        if(!entity.inHealAction){
            this.execActionInterval(25, 3000, () => {
                if(entity.mana < entity.maxMana){
                    entity.mana = Math.min(entity.mana + 5, entity.maxMana);
                    entity.healBroadcast(entity, 5, HealType.Mana);
                }
            });
        }
    }
}

export class Pear extends Resource {
    public Namespace: string = "Pear";
    public Name: string = "Pear"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
}

export class Pepper extends Resource {
    public Namespace: string = "Pepper";
    public Name: string = "Pepper"; 
    public Weight: number = 0.1;
    public GoldCost: number = 3;
}

export class Potato extends Resource {
    public Namespace: string = "Potato";
    public Name: string = "Potato"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;
}

export class PotatoSoup extends Consumable {
    public Namespace: string = "PotatoSoup";
    public Name: string = "Potato Soup"; 
    public Weight: number = 0.1;
    public GoldCost: number = 150;

    public override use(entity: Entity){
        if(!entity.inHealAction){
            this.execActionInterval(30, 3000, () => {
                if(entity.stamina < entity.maxStamina){
                    entity.stamina = Math.min(entity.stamina + 5, entity.maxStamina);
                    entity.healBroadcast(entity, 5, HealType.Stamina);
                }
            });
        }
    }
}

export class Pumpkin extends Resource {
    public Namespace: string = "Pumpkin";
    public Name: string = "Pumpkin"; 
    public Weight: number = 0.1;
    public GoldCost: number = 20;
}

export class RawChickenLeg extends Resource {
    public Namespace: string = "RawChickenLeg";
    public Name: string = "Raw Chicken Leg"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Ribs extends Consumable {
    public Namespace: string = "Ribs";
    public Name: string = "Ribs"; 
    public Weight: number = 0.1;
    public GoldCost: number = 150;

    public override async use(entity: Entity) {
        entity.heal(entity, 300);
    }
}

export class RoundCheese extends Consumable {
    public Namespace: string = "RoundCheese";
    public Name: string = "Round Cheese"; 
    public Weight: number = 0.1;
    public GoldCost: number = 80;

    public override async use(entity: Entity) {
        entity.heal(entity, 100);
    }
}

export class Sandwich extends Consumable {
    public Namespace: string = "Sandwich";
    public Name: string = "Sandwich"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;

    public override async use(entity: Entity) {
        entity.heal(entity, 300);
    }
}

export class Sausage extends Consumable {
    public Namespace: string = "Sausage";
    public Name: string = "Sausage"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;

    public override async use(entity: Entity) {
        entity.heal(entity, 30);
    }
}

export class Strawberry extends Consumable {
    public Namespace: string = "Strawberry";
    public Name: string = "Strawberry"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;

    public override async use(entity: Entity) {
        entity.heal(entity, 1000);
    }
}

export class Sugar extends Resource {
    public Namespace: string = "Sugar";
    public Name: string = "Sugar"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
}

export class Sushi extends Consumable {
    public Namespace: string = "Sushi";
    public Name: string = "Sushi"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;
}

export class Tomato extends Consumable {
    public Namespace: string = "Tomato";
    public Name: string = "Tomato"; 
    public Weight: number = 0.1;
    public GoldCost: number = 5;

    public override async use(entity: Entity) {
        entity.heal(entity, 1);
    }
}

export class Water extends Resource {
    public Namespace: string = "Water";
    public Name: string = "Water"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Wheat extends Resource {
    public Namespace: string = "Wheat";
    public Name: string = "Wheat"; 
    public Weight: number = 0.1;
    public GoldCost: number = 1;
}

export class Wine extends Consumable {
    public Namespace: string = "Wine";
    public Name: string = "Wine"; 
    public Weight: number = 0.1;
    public GoldCost: number = 300;

    public override async use(entity: Entity) {
        entity.mana = Math.min(entity.mana + 1000, entity.maxMana);
        entity.healBroadcast(entity, 1000, HealType.Mana);
    }
}

Items.AddBaseItem("Apple", Apple);
Items.AddBaseItem("Bacon", Bacon);
Items.AddBaseItem("BakedFish", BakedFish);
Items.AddBaseItem("Banana", Banana);
Items.AddBaseItem("Beer", Beer);
Items.AddBaseItem("Bread", Bread);
Items.AddBaseItem("Butter", Butter);
Items.AddBaseItem("Cabbage", Cabbage);
Items.AddBaseItem("Cake", Cake);
Items.AddBaseItem("Carrot", Carrot);
Items.AddBaseItem("CheeseWedge", CheeseWedge);
Items.AddBaseItem("Chocolate", Chocolate);
Items.AddBaseItem("Cocoa", Cocoa);
Items.AddBaseItem("Coconut", Coconut);
Items.AddBaseItem("Cookies", Cookies);
Items.AddBaseItem("Corn", Corn);
Items.AddBaseItem("Cucumber", Cucumber);
Items.AddBaseItem("Egg", Egg);
Items.AddBaseItem("FishRaw", FishRaw);
Items.AddBaseItem("FishSteak", FishSteak);
Items.AddBaseItem("Grapes", Grapes);
Items.AddBaseItem("Ham", Ham);
Items.AddBaseItem("Honey", Honey);
Items.AddBaseItem("Leek", Leek);
Items.AddBaseItem("Lemon", Lemon);
Items.AddBaseItem("Lettuce", Lettuce);
Items.AddBaseItem("Mead", Mead);
Items.AddBaseItem("Meat", Meat);
Items.AddBaseItem("Meatstick", Meatstick);
Items.AddBaseItem("Melon", Melon);
Items.AddBaseItem("Milk", Milk);
Items.AddBaseItem("Mushrooms", Mushrooms);
Items.AddBaseItem("OmeleteWithBacon", OmeleteWithBacon);
Items.AddBaseItem("Onion", Onion);
Items.AddBaseItem("OnionSoup", OnionSoup);
Items.AddBaseItem("Pear", Pear);
Items.AddBaseItem("Pepper", Pepper);
Items.AddBaseItem("Potato", Potato);
Items.AddBaseItem("PotatoSoup", PotatoSoup);
Items.AddBaseItem("Pumpkin", Pumpkin);
Items.AddBaseItem("RawChickenLeg", RawChickenLeg);
Items.AddBaseItem("RoundCheese", RoundCheese);
Items.AddBaseItem("Sandwich", Sandwich);
Items.AddBaseItem("Sausage", Sausage);
Items.AddBaseItem("Strawberry", Strawberry);
Items.AddBaseItem("Sugar", Sugar);
Items.AddBaseItem("Sushi", Sushi);
Items.AddBaseItem("Tomato", Tomato);
Items.AddBaseItem("Water", Water);
Items.AddBaseItem("Wheat", Wheat);
Items.AddBaseItem("Wine", Wine);
Items.AddBaseItem("Ribs", Ribs);