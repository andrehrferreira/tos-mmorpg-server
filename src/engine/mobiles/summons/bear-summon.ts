import { Summon, Entity, Player } from "../../entities";

export class BearSummon extends Summon {
    public override namespace = "BearSummon";
    public override name = "Bear";

    constructor(owner: Player){
        super(owner);

        this.setStr(60 + owner.str, 90 + owner.str);
        this.setDex(15 + owner.dex, 25 + owner.dex);
        this.setVig(100 + owner.vig, 120 + owner.vig);

        this.calculateStats();
        this.restoreStats();
    }
}

Entity.Summons.set("BearSummon", BearSummon);