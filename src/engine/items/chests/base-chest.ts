import { Consumable } from "..";
import { LootRef, Random } from "../../core";
import { Entity, Player } from "../..";

export abstract class BaseChest extends Consumable {
    private dropsPossibility: Map<{ new (): any }, LootRef> = new Map<{ new (): any }, LootRef>();

    public dropChance(cls: any, chance: number, amountMin: number, amountMax: number = 1){
        this.dropsPossibility.set(cls, new LootRef(chance, amountMin, amountMax));
    }

    public override async use(entity: Entity) {
        if(entity instanceof Player){
            const player = (entity as Player);

            if(player && player.socket){
                this.dropsPossibility.forEach(async (ref, cls) => {
                    if(Random.DropChance(ref.chance)){
                        const amount = Random.MinMaxInt(ref.amountMin, ref.amountMax);
                        player.addItemByClass(cls, amount);
                    }
                });
            }
        }
    }
}