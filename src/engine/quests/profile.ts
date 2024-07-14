import { Quest } from "./quest";

export class NPCProfile {
    public static Profiles: Map<string, NPCProfile> = new Map<string, NPCProfile>();

    public Namespace: string;
    public Quests: Array<Quest>;

    public static addProfile(profile: NPCProfile) : void {
        NPCProfile.Profiles.set(profile.Namespace, profile);
    }

    public static getProfile(namespace: string) : NPCProfile | null {
        return (NPCProfile.Profiles.has(namespace)) ? NPCProfile.Profiles.get(namespace) : null;
    }

    public static hasProfile(namespace: string) : boolean {
        return NPCProfile.Profiles.has(namespace);
    }
}