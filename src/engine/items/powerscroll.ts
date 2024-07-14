import { Item, Items,  } from ".";
import { ItemRarity, Player } from "..";
import { SkillName, getRandomSkillName, getSkillNameString } from "@enums";
import { packetSpecialMessage, packetUpdateSkillInfo } from "@network";

export class PowerScroll extends Item {
    public override Namespace = "PowerScroll";
    public override Name = "Power Scroll";
    public override GoldCost = 1000;
    public Rarity = ItemRarity.Unique;
    public Skill: SkillName = SkillName.None;
    public Value: number = 0;

    public use(entity: Player){
        let playerSkillCap = entity.getSkillCap(this.Skill);
        let playerSkill = entity.getSkill(this.Skill);
  
        entity.skills.set(this.Skill, {
            value: playerSkill.value,
            cap: (playerSkillCap > this.Value + 10) ? playerSkillCap : this.Value + 10,
            experience: playerSkill.experience,
        });

        packetSpecialMessage.send(entity, `${getSkillNameString(this.Skill)} upgrade cap to ${((this.Value + 10) * 10)}`);
        packetUpdateSkillInfo.send(entity);
        entity.save();
        entity.saveToDatabase();
    }
    
    public override generateAttrs(){
        let skill = getRandomSkillName();

        if(!skill || skill === undefined || skill === null || (skill as number) === SkillName.None)
            skill == SkillName.Language;

        this.Skill = skill;
        const randomValue = Math.random();
        
        if (randomValue <= 0.80) 
            this.Value = 1;
        else if (randomValue <= 0.95) 
            this.Value = 2;
        else 
            this.Value = 3;
    }

    public override serealize() : any {
        let data = super.serealize();
        data.Skill = this.Skill;
        data.Value = this.Value;
        return data;
    }
}

Items.AddBaseItem("PowerScroll", PowerScroll);