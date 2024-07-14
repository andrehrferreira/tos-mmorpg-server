import { Plevel, SkillName, getSkillNameFromFormattedString } from "@enums";
import { packetSystemMessage, packetUpdateSkillInfo } from "@network";
import { Commands } from "../commands";
import { Maps } from "../../maps";

Commands.add("setallskills", Plevel.GameMaster, (params: string[], socket: any, server: any) => {  
    try{
        const entity = Maps.getEntity(socket, socket.entityId);
        const value = parseInt(params[0]);

        if(value > 0 && entity){
            const totalxp = entity.getTotalExperienceForLevel(value);

            if(totalxp > 0){
                for (const skillName of Object.values(SkillName)){
                    let skill = (typeof skillName === "string") ? getSkillNameFromFormattedString(skillName) : skillName;
                    
                    if(skill)
                        entity.setSkill(skill, value);
                }   

                packetUpdateSkillInfo.send(entity);
                entity.save();
            }
        }
    }
    catch (e) {
        packetSystemMessage.sendDirectSocket(socket, `Erro to call command ${e.message}`);
    }
});