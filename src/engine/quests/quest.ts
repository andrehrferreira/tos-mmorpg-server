import { Logger } from "@nestjs/common";

export enum QuestType {
    Collect,
    KillerMobiles,
    Delivery,
    Crafting
}

export interface IItemRef {
    ItemName: string,
    Quantity: number;
}

export interface IReward {
    Item: { new (): any };
    Quantity: number;
}

export abstract class Quest {
    public static readonly logger = new Logger(Quest.name);
    public static Quests: Map<string, { new (): any }> = new Map<string, { new (): any }>();

    public namespace: string;
    public type: QuestType;
    public name: string;
    public description: string;
    public progress: number;
    public completed: boolean = false;
    public fav: boolean = false;

    //Objetives
    public itemCollect: Array<IItemRef> = new Array<IItemRef>();
    public itemCrafting: Array<IItemRef> = new Array<IItemRef>();
    public creatureToKill: string;
    public itemToDelivery: string;
    
    //Reward
    public rewards : Array<IReward> = new Array<IReward>();

    public static AddQuest(namespace: string, quest: { new (): any }){
        Quest.Quests.set(namespace, quest);
    }

    public ParseMetadata(metadata: any){
        this.completed = metadata[this.namespace] ? metadata[this.namespace].completed : false;
        this.fav = metadata[this.namespace] ? metadata[this.namespace].fav : false;
        this.progress = metadata[this.namespace] ? metadata[this.namespace].progress : 0;
    }

    public GetMetadata(appendPublicData: boolean = false){
        let base = { 
            namespace: this.namespace,
            completed: this.completed,
            progress: this.progress,
            fav: this.fav
        };

        if(appendPublicData) {
            base = { ...base, ...{
                name: this.name,
                description: this.description,
                type: this.type,
                reward: this.rewards.map((reward) => { 
                    const tmpItem = new reward.Item();
                    return { i: tmpItem.Namespace, q: reward.Quantity }; 
                }),
                itemsCollect: this.itemCollect.length > 0 ? this.itemCollect.map((item) => { 
                    return { i: item.ItemName, q: item.Quantity }; 
                }) : []
            }};
        }

        return base;
    }
}

export class DailyQuests {
    public quests: { new (): any }[];
    public questsProgress: Array<Quest> = new Array<Quest>();
    public static QuestList: Map<number, DailyQuests> = new Map<number, DailyQuests>();

    public constructor(quests: { new (): any }[]){
        this.quests = quests;
    }

    public static AddQuest(index: number, quest: DailyQuests){
        DailyQuests.QuestList.set(index, quest);
    }

    public static GetQuests(index: number, metadata: any) : DailyQuests | null {
        if(DailyQuests.QuestList.has(index)) {
            const dailyQuests = DailyQuests.QuestList.get(index); 
            dailyQuests.ParseMetadata(metadata);
            return dailyQuests;
        } 
        else 
            return null;
    }

    public ParseMetadata(metadata: any){
        this.questsProgress = new Array<Quest>();
        let metadataParsed = {};

        if(metadata){
            for(let key in metadata)
                metadataParsed[metadata[key].namespace] = metadata[key];
        }

        for(let quests of this.quests){
            const quest: Quest = new quests();
            quest.ParseMetadata(metadataParsed);
            this.questsProgress.push(quest);
        }
    }

    public GenerateMetadata(appendPublicData: boolean = false, exportString: boolean = false){
        let metadata = [];
       
        for(let quest of this.questsProgress)
            metadata.push(quest.GetMetadata(appendPublicData));
        
        return (exportString) ? JSON.stringify(metadata) : metadata;
    }
}