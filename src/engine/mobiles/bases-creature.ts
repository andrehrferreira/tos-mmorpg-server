import { Creature, CreatureType } from "../entities";

export class BasePlant extends Creature {
    public override creatureType = CreatureType.Common;

    constructor(){
        super();

        this.setFireResistence(-20);
        this.setColdResistence(20);
        this.setPoisonResistence(100);
        this.setEnergyResistence(50);
    }
}

export class BaseUndead extends Creature {
    public override creatureType = CreatureType.Undead;

    constructor(){
        super();

        this.setFireResistence(20);
        this.setColdResistence(20);
        this.setPoisonResistence(20);
        this.setEnergyResistence(20);
        this.setLightResistence(-50);
        this.setDarkResistence(50);
    }
}

export class BaseDragon extends Creature {
    public override creatureType = CreatureType.Dragon;

    constructor(){
        super();

        this.setFireResistence(100);
        this.setColdResistence(-20);
        this.setPoisonResistence(50);
        this.setEnergyResistence(50);
        this.setLightResistence(50);
        this.setDarkResistence(50);
    }
}

export class BaseWaterMonster extends Creature {
    public override creatureType = CreatureType.Common;

    constructor(){
        super();

        this.setFireResistence(80);
        this.setColdResistence(-20);
        this.setPoisonResistence(10);
        this.setEnergyResistence(-50);
    }
}

export class BaseDemon extends Creature {
    public override creatureType = CreatureType.Demon;

    constructor(){
        super();

        this.setFireResistence(50);
        this.setColdResistence(-20);
        this.setPoisonResistence(20);
        this.setEnergyResistence(20);
        this.setLightResistence(-70);
        this.setDarkResistence(70);
    }
}