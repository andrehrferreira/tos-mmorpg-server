import { Creature, Entity } from "../../../entities";

import { PetFrog02PetItem, PetFrog03PetItem, PetFrog04PetItem, PetFrog05PetItem, PetFrog06PetItem, PetFrogPetItem } from "@items";

export class Frog extends Creature {
    public override namespace = "Frog";
    public override name = "Frog";
    public override customVisual = "Frog";
    public override movementDistance: number = 100;
    public override maxDistanceToRespawn: number = 2000;
    public override speed = 400;
    public override respawnCustomList = ["Frog", "Frog2", "Frog3", "Frog4", "Frog5", "Frog6"];

    //Taming
    public override tamable = true;
    public override skillTamingMin = 0;
    public override petSockets = 1;
    public override maxSkillTamingUp = 2;
    public override itemTamingFinish = PetFrogPetItem;

    constructor(){
        super();

        this.setLife(2);
        this.setStr(1, 5);
        this.setDex(5, 8);
        this.setVig(1, 5);
    }
}

export class Frog2 extends Frog {
    public override namespace = "Frog2";
    public override customVisual = "Frog02";
    public override itemTamingFinish = PetFrog02PetItem;
}

export class Frog3 extends Frog {
    public override namespace = "Frog3";
    public override customVisual = "Frog03";
    public override itemTamingFinish = PetFrog03PetItem;
}

export class Frog4 extends Frog {
    public override namespace = "Frog4";
    public override customVisual = "Frog04";
    public override itemTamingFinish = PetFrog04PetItem;
}

export class Frog5 extends Frog {
    public override namespace = "Frog5";
    public override customVisual = "Frog05";
    public override itemTamingFinish = PetFrog05PetItem;
}

export class Frog6 extends Frog {
    public override namespace = "Frog6";
    public override customVisual = "Frog06";
    public override itemTamingFinish = PetFrog06PetItem;
}

Entity.addEntityBase("Frog", Frog);
Entity.addEntityBase("Frog2", Frog2);
Entity.addEntityBase("Frog3", Frog3);
Entity.addEntityBase("Frog4", Frog4);
Entity.addEntityBase("Frog5", Frog5);
Entity.addEntityBase("Frog6", Frog6);