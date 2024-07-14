import { NPCProfile, Quest } from "..";
import { QuestApplePie } from "../npc";

export class CookieProfile extends NPCProfile {
    public override Namespace = "Cookie";

    public override Quests = [
        new QuestApplePie()
    ]
}

NPCProfile.addProfile(new CookieProfile());