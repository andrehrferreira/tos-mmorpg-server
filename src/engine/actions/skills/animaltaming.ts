import { BaseAction, Actions, ActionType } from "..";
import { ActionCostType, CreatureIAState, SkillName } from "@enums";
import { Creature, Entity, Equipament, Items, MountItem, PetItem, Player, Random, packetSay, packetTooltip } from "@engine";
import { packetSystemMessage } from "@network";
import { ItemsService } from "@services";

export class AnimalTaming extends BaseAction {
    public override id = 54;
    public override name = "Animal Taming";
    public override namespace = "AnimalTaming";
    public override type = ActionType.Target;
    public override costType = ActionCostType.None;
    public override cost = 0;
    public override skill = SkillName.AnimalKnowledge;
    public override skillRequeriment = 0;
    public override preCastTime = 0;

    public speaks: string[] = ["Come here...", "Don't be afraid", "I can protect you from the dangers of this world", "I won't hurt you."];
    public minDistanceToTaming = 2500; 

    public override async exec(owner: Player, target: Entity){
        if(target){
            if(owner.transform.position.distanceTo(target.transform.position) > 2500) {
                packetSystemMessage.sendDirectSocket(owner.socket, `You are too far away to start taming`);
            }
            else if(owner.inTamingProgess){
                packetSystemMessage.sendDirectSocket(owner.socket, `You are already taming a creature`);
            }
            else if(target instanceof Creature && (target as Creature).tamable && !target.isDead) {
                const creatureTarget = (target as Creature);
                const playerSkill = owner.getSkillValue(SkillName.AnimalKnowledge);                

                if(playerSkill >= creatureTarget.skillTamingMin) {
                    owner.inTamingProgess = true;
                    let finishProcess = true;

                    this.execActionInterval(Random.MinMaxInt(2, 5), 3000, () => {
                        if(finishProcess) {
                            if(owner.transform.position.distanceTo(target.transform.position) > this.minDistanceToTaming) {
                                finishProcess = false;
                                packetSystemMessage.sendDirectSocket(owner.socket, `You are too far away to continue taming.`);                              
                            }
                            else if(creatureTarget.isTamed) {
                                finishProcess = false;
                                packetSystemMessage.sendDirectSocket(owner.socket, `You cannot use tame mounted.`);    
                            }
                            else if(creatureTarget.isDead) {
                                finishProcess = false;
                                packetSystemMessage.sendDirectSocket(owner.socket, `The target has died so it is not possible to tame it.`);    
                            }
                            else {
                                owner.say(Random.ArrRandom<string>(this.speaks));

                                if(playerSkill < creatureTarget.maxSkillTamingUp) 
                                    owner.gainSkillExperiencie(SkillName.AnimalKnowledge);
                            }
                        }                       
                    }).then(async () => {
                        if(finishProcess) {
                            let chanceOfSuccess = (playerSkill - creatureTarget.skillTamingMin) * 5;
                            const distanceTo = owner.transform.position.distanceTo(target.transform.position);

                            if (chanceOfSuccess <= 30)
                                chanceOfSuccess = 30;

                            if (playerSkill < 2)
                                chanceOfSuccess = 100;

                            let collectionSuccess = (chanceOfSuccess > 100) ? true : (Random.MinMaxInt(0, 100) < chanceOfSuccess);

                            if(collectionSuccess && !target.isDead && !target.isTamed && distanceTo < this.minDistanceToTaming) {  
                                target.isTamed = true;                              
                                const baseItem = Items.createItemByClass(target.itemTamingFinish);

                                let props = null;
        
                                if(
                                    baseItem instanceof PetItem || baseItem instanceof MountItem
                                ) {
                                    props = baseItem.serealize();
                                }

                                const itemRef = await (owner.socket.services.itemsService as ItemsService).createItem(
                                    owner.inventory.containerId,
                                    owner.characterId,
                                    baseItem.Namespace,
                                    1,
                                    "taming",
                                    null,
                                    props
                                );

                                const item = Items.getItemByRef(itemRef);
                                packetSystemMessage.sendDirectSocket(owner.socket, `You received ${baseItem.Name}`);
                                await (owner as Player).inventory.addItem(itemRef, 1, -1);
                                
                                if(baseItem instanceof Equipament)
                                    packetTooltip.send((owner as Player), itemRef, item.serealize());

                                owner.gainSkillExperiencie(SkillName.AnimalKnowledge);

                                target.destroy();
                            }
                            else if(creatureTarget.isDead) {
                                packetSystemMessage.sendDirectSocket(owner.socket, `The target has died so it is not possible to tame it.`);    
                            }
                            else {
                                creatureTarget.target = owner.mapIndex;
                                creatureTarget.bindTargetActor(owner);                    
                                creatureTarget.selectTarget(owner.mapIndex, owner);
                                creatureTarget.changeState(CreatureIAState.InCombat);

                                owner.gainSkillExperiencie(SkillName.AnimalKnowledge, 6);
                                packetSystemMessage.sendDirectSocket(owner.socket, `Unable to tame the creature, it seems its skills need to be trained..`); 
                            }
                        }

                        owner.inTamingProgess = false;
                    });  
                }
                else {
                    packetSystemMessage.sendDirectSocket(owner.socket, `You do not have enough skill to tame this creature, you need ${(creatureTarget.skillTamingMin * 10)} Animal Knowledge`);
                }
            }
            else {
                packetSystemMessage.sendDirectSocket(owner.socket, `Unable to tame selected target`);
            }
        }
    }
}

Actions.addAction(new AnimalTaming());