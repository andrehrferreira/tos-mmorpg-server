import { Queue } from "bull";
import { GUID } from "@utils";
import { Logger } from "@nestjs/common";

import { 
    SkillName, getSkillNameFromFormattedString, 
    getSkillNameString, ChatChannel, EventType,
    PlayerActions, MapEventType
} from "@enums";

import { GuildService, ItemsService, MapsService } from "@services";
import { Humanoid, Entity, EntitiesKind, Stats } from ".";
import { Party } from "../party";

import { 
    Container, Containers, Random, Rotator, StateFlags, 
    Team, TeamKind, Transform, Vector3
} from "../core";

import { 
    packetCreateCharacter, packetPlayerStats, 
    packetPlayerStatics, packetTooltip, 
    packetUpdateStats, packetSystemMessage, 
    packetChatMessage, packetCraftingLog, 
    packetSpecialMessage, packetAddItemContainer,
    packetUpdateSkillInfo, packetRefreshTooltip,
    packetSay, packetJoinGuild, packetGuildsList,
    packetGuildData 
} from "@network";

import { 
    BaseAction, Actions, EquipamentType, Items, 
    Item, GatherableResource, Equipament, Gatherable, 
    CraftRecipe, EntityStates, Quest, DailyQuests, QuestType, 
    SafeTrade, ItemRarity, PowerScroll, PetItem, MountItem,
    Guild, Guilds, Maps, EventInstanceType, EventInstance, GuildAccessLevel, packetSteamArchivement, Stackable, packetFullCharacter
} from "..";

export class ActionbarRef {
    Action: BaseAction;
    Item: Item;
    SlotId: number;

    constructor(action: BaseAction, item: Item, slotId: number){
        this.Action = action;
        this.Item = item;
        this.SlotId = slotId;
    }
}

export class Player extends Humanoid {
    protected override logger: Logger = new Logger('Player');
    
    public static players: Map<string, Player> = new Map<string, Player>();
    public static onlinePlayers: Set<string> = new Set<string>();
    public static playerData: Map<string, any> = new Map<string, any>();

    public override updateIntensity = 1;
    public accountId: string;
    public loaded = false;
    public hashtag: string;
    public trade: SafeTrade;
    public actionbar: Map<number, ActionbarRef> = new Map<number, ActionbarRef>();
    public tooltipSended: Array<string> = new Array<string>();
    public vendorList: any = {};
    public friends: Array<string> = new Array<string>();
    public friendsRequests: Array<string> = new Array<string>();

    //Gathering
    public gatherableInteract: GatherableResource = null;
    public gatherableSpot: Gatherable = null;

    //Quest
    public quests: Array<Quest> = new Array<Quest>();
    public dailyQuestsIndex: number = 1;
    public dailyQuest: DailyQuests;

    //Guild
    public createGuildCost = 20000;

    //Taming
    public inTamingProgess = false;

    //Event
    public inEvent: boolean = false;
    public eventMapType: MapEventType;
    public eventMapId: string;
    public eventMap: string;
    public eventPosition: Vector3; 

    //Steam
    public steamArchivements: Array<string> = new Array<string>();

    public steamArchivementsSkill = [
        { skill: SkillName.Mining, value: 5, archivementName: "MINIG50" },
        { skill: SkillName.Mining, value: 8, archivementName: "MINIG80" },
        { skill: SkillName.Mining, value: 10, archivementName: "MINIG100" },
        { skill: SkillName.Lumberjack, value: 5, archivementName: "LUMBERJACK50" },
        { skill: SkillName.Lumberjack, value: 8, archivementName: "LUMBERJACK80" },
        { skill: SkillName.Lumberjack, value: 10, archivementName: "LUMBERJACK100" },
        { skill: SkillName.Skinning, value: 5, archivementName: "SKINNING50" },
        { skill: SkillName.Skinning, value: 8, archivementName: "SKINNING80" },
        { skill: SkillName.Skinning, value: 10, archivementName: "SKINNING100" },
        { skill: SkillName.Herbalism, value: 5, archivementName: "HERBALISM50" },
        { skill: SkillName.Herbalism, value: 8, archivementName: "HERBALISM80" },
        { skill: SkillName.Herbalism, value: 10, archivementName: "HERBALISM100" },
        { skill: SkillName.Blacksmithing, value: 10, archivementName: "BLACKSMITHMASTER" },
        { skill: SkillName.Tailoring, value: 10, archivementName: "TAILORINGMASTER" },
        { skill: SkillName.Carpentry, value: 10, archivementName: "CARPENTRYMASTER" },
        { skill: SkillName.Alchemy, value: 10, archivementName: "ALCHEMISTMASTER" },
        { skill: SkillName.Jewelry, value: 10, archivementName: "JEWELRYMASTER" },
        { skill: SkillName.AnimalKnowledge, value: 10, archivementName: "ANIMALKNOWLEDGEMASTER" },
        { skill: SkillName.Cooking, value: 10, archivementName: "COOKINGMASTER" },
        { skill: SkillName.Enchantment, value: 10, archivementName: "ENCHANTMENTMASTER" }
    ]
    
    constructor(
        public socket: any,
        private readonly characterModel: any,
        private gameServerQueue: Queue,
        public accId: string
    ) {
        super();
        this.characterModel = characterModel;    
        this.accountId = accId;    
        this.socketId = socket.id;
        this.socket = socket;
        socket.player = this;
        this.syncCharacterModel();
        setInterval(this.syncPlayerStats.bind(this), 1000);
        setInterval(this.saveToDatabase.bind(this), 300000);
    }

    public static getPlayerByTag(hashtag: string) : Player | null {
        let player = null;

        Player.players.forEach((entity) => {
            if(entity.hashtag.toLocaleLowerCase() === hashtag.toLocaleLowerCase())
                player = entity;
        });

        return player;
    }

    public static getPlayer(characterId: string) : Player | null {
        let player = null;

        Player.players.forEach((entity) => {
            if(entity.characterId.toLocaleLowerCase() === characterId.toLocaleLowerCase())
                player = entity;
        });

        return player;
    }

    public static refreshOnlinePlayer(){
        let playersOnline: Set<string> = new Set<string>();

        Player.players.forEach((player) => {
            if(player.lastUpdate > new Date().getTime())
                playersOnline.add(player.characterId);
        });

        Player.onlinePlayers = playersOnline;
    }

    public static fromDatabase(data: any){
        Player.playerData.set(data.id, data);
    }

    public static getData(characterId: string){
        return Player.playerData.has(characterId) ? { ...Player.playerData.get(characterId) } : null;
    }

    public static update(characterId: string, data: any, entity: Player){
        if(Player.playerData.has(characterId)){
            console.log(`Update player`);
            let character : any = { ...Player.playerData.get(characterId) };

            for(let key in data)
                character[key] = data[key];

            console.log( entity.map.namespace, entity.mapIndex);

            //character.map = entity.map.namespace;                            
            Player.playerData.set(characterId, character);
        }
    }

    public updatePosition(location: Vector3) {
        super.updatePosition(location);
        this.save();
    }

    public override setMap(map: Maps, id: string) : void { 
        super.setMap(map, id);
        this.save();
        this.saveToDatabase();
    }

    public refreshLocalPlayerData(){
        const playerData = Player.parseData(this.characterId);
        const character = JSON.parse(playerData);
        this.socket.character = character;
        packetFullCharacter.send(this.socket, playerData);
    }

    public override tick(tickNumber: number){
        if(!this.removed){
            super.tick(tickNumber);

            if(this.party)
                this.party.tick(tickNumber);

            if(tickNumber % 100 === 0){
                this.save();
                this.saveToDatabase();
            }
        }
        else if(Player.players.has(this.characterId) && this.removed) 
            Player.players.delete(this.characterId);
    }

    public override destroy() : void {
        Player.onlinePlayers.add(this.characterId);
        this.areaOfInterece.map((entity) => entity.removeFromAreaOfInterest(this));
        this.save();
        this.saveToDatabase();
        super.destroy();   
    }

    //DB / Network
    public packetCreateEntity(entity: Entity){
        packetCreateCharacter.send(this, entity)
    }
   
    public syncCharacterModel(){
        this.id = this.characterModel.id;
        this.name = this.characterModel.name;
        this.visual = this.characterModel.visual;   
        this.hashtag = this.characterModel.hashtag;
        this.characterId = this.characterModel.id;
        this.states = new StateFlags(this.characterModel.states);
        this.team = new Team(TeamKind.Players, this);
        this.kind = EntitiesKind.Player;
        this.statsPoints = (this.characterModel.statsPoints) ? this.characterModel.statsPoints : 0;
        this.statsCap = this.characterModel.statsCap;
        this.dailyQuestsIndex = this.characterModel.dailyQuestsIndex || 1;        
        this.friends = (this.characterModel.friends) ? this.characterModel.friends : [];
        this.friendsRequests = (this.characterModel.friendsRequests) ? this.characterModel.friendsRequests : [];
        this.steamArchivements = (this.characterModel.archivements) ? this.characterModel.archivements : [];

        //Quests
        let dailyMetadata = this.characterModel.dailyQuestsMetadata || null;

        try{
            if(dailyMetadata && typeof dailyMetadata === "string")
                dailyMetadata = JSON.parse(dailyMetadata);
        }
        catch{}
        
        this.dailyQuest = DailyQuests.GetQuests(this.dailyQuestsIndex, dailyMetadata);

        //Guild
        /*if(this.socket.plevel > 1){
            this.admin = true;
            this.states.addFlag(EntityStates.Admin);
            this.guild = new Guild("ADMIN", "", "Admin", "", 100, 100);
        }
        else {*/
            if(this.characterModel.guildId)
                this.guild = Guilds.getGuild(this.characterModel.guildId);
        //}
        
        //Stats
        this.str = this.characterModel.str;
        this.dex = this.characterModel.dex;
        this.int = this.characterModel.int;
        this.vig = this.characterModel.vig;
        this.agi = this.characterModel.agi;
        this.luc = this.characterModel.luc;

        this.life = this.characterModel.life;
        this.mana = this.characterModel.mana;
        this.stamina = this.characterModel.stamina;

        //Equipaments
        this.helmet = this.characterModel.helmetArmor;
        this.chest = this.characterModel.chestArmor;
        this.gloves = this.characterModel.glovesArmor;
        this.boots = this.characterModel.bootsArmor;
        this.pants = this.characterModel.pantsArmor;
        this.robe = this.characterModel.robe;
        this.cloak = this.characterModel.cloak;
        this.ring01 = this.characterModel.ring01;
        this.ring02 = this.characterModel.ring02;
        this.necklance = this.characterModel.necklance;
        this.offhand = this.characterModel.offhand;
        this.mainhand = this.characterModel.mainhand;
        this.instrument = this.characterModel.instrument;
        this.pet = this.characterModel.pet;
        this.mount = this.characterModel.mount;

        this.pickaxetool = this.characterModel.pickaxetool;
        this.axetool = this.characterModel.axetool;
        this.scythetool = this.characterModel.scythetool;

        this.transform = new Transform(
            new Vector3(this.characterModel.x, this.characterModel.y, this.characterModel.z),  
            new Rotator(0, 0, this.characterModel.r)
        );  

        //Actionbar
        if(this.characterModel.actionbar){
            try{
                this.actionbar.clear();

                for(let key in this.characterModel.actionbar){
                    const slot = this.characterModel.actionbar[key];                    
                    const action = slot.Action ? Actions.findActionByName(slot.Action) : null;
                    const item = slot.Item ? Items.getItemByRef(slot.Item) : null;
                    this.actionbar.set(slot.Index, new ActionbarRef(action, item, slot.Index));
                }
            }   
            catch{}
        }

        //Skills
        if(this.characterModel.skills){
            for(let key in this.characterModel.skills){
                const skill = this.characterModel.skills[key];

                this.skills.set(getSkillNameFromFormattedString(key), {
                    value: skill.Value,
                    cap: skill.Cap,
                    experience: skill.Progress,
                })
            }
        }

        //Inventory
        this.inventory = new Container(this, this.characterModel.inventoryId);
        this.inventory.loadFromModel([ ...this.characterModel.inventory ]);
        Containers.set(this.characterModel.inventoryId, this.inventory);
        this.inventory.onChange.subscribe(() => this.inventoryChange.bind(this));
       
        setTimeout(() => {  
            this.inventory.slots.forEach((item, slotId) => {
                packetAddItemContainer.send(this, {
                    amount: item.Amount,
                    containerId: this.inventory.containerId,
                    itemName: item.Namespace,
                    itemRef: item.Ref,
                    slotId,
                    itemRarity: item.Rarity,
                    goldCost: item.GoldCost,
                    weight: item.Weight
                }, false);

                if(
                    item instanceof Equipament || item instanceof PowerScroll || 
                    item instanceof PetItem || item instanceof MountItem
                ) {
                    packetTooltip.send(this, item.Ref, item.serealize());
                }                    
            });

            this.refreshEquipamentsList();
            this.calculateStats();
            this.calculateStatics();  
            this.sendToolips(); 

            packetUpdateSkillInfo.send(this);
            packetPlayerStatics.send(this);  
        }, 1000);   
                    
        //Party
        if(this.characterModel.party){
            const sessionParty = Party.getSession(this.characterModel.party);

            if(sessionParty){
                this.party = sessionParty;
                this.partyOwner = sessionParty.owner;
                sessionParty.refreshCharacter(this);
            }
        }

        this.calculateStats();
        this.restoreStats();

        this.loaded = true;
    }

    public syncPlayerStats(){
        if(!this.map || this.removed)
            return;

        if(!this.removed){
            packetPlayerStatics.send(this);
            packetPlayerStats.send(this);
        }            
    }

    public override async save(){
        if(!this.map || this.removed)
            return;

        const data = this.serialize();
        Player.update(data.id, data, this);   
    }

    public serialize(){
        let actionbarParsed = [];
        this.actionbar.forEach((slot, index) => { 
            actionbarParsed.push({ 
                Index: index, 
                Action: slot.Action?.namespace, 
                Item: slot.Item?.Ref 
            }); 
        });

        let inventoryParsed : any = this.inventory.saveToModel();

        const equippedItems = [
            this.helmet?.ItemRef,
            this.chest?.ItemRef,
            this.gloves?.ItemRef,
            this.boots?.ItemRef,
            this.pants?.ItemRef,
            this.robe?.ItemRef,
            this.cloak?.ItemRef,
            this.ring01?.ItemRef,
            this.ring02?.ItemRef,
            this.necklance?.ItemRef,
            this.offhand?.ItemRef,
            this.mainhand?.ItemRef,
            this.instrument?.ItemRef,
            this.pet?.ItemRef,
            this.mount?.ItemRef,
            this.pickaxetool?.ItemRef,
            this.axetool?.ItemRef,
            this.scythetool?.ItemRef
        ].filter(ref => ref);

        Object.entries(inventoryParsed).forEach(([slotId, item] : [string, any]) => {
            if (equippedItems.includes(item.ItemRef)) 
                delete inventoryParsed[slotId];            
        });

        let skillsParsed = {};
        let pointerIndex = 0;
        
        this.skills.forEach((skill, index) => {
            skillsParsed[getSkillNameString(index)] = {
                Index: pointerIndex,
                Cap: skill.cap,
                Value: skill.value,
                Progress: (skill.experience === 0 && skill.value > 0) ? 
                    this.getTotalExperienceForLevel(skill.value) : 
                    skill.experience
            }

            pointerIndex++;
        });

        const data = {
            id: this.characterId, 
            name: this.name,
            visual: this.visual,
            states: this.states.getCurrentFlags(),
            map: (this.map) ? this.map.namespace : null,
            x: this.transform.position.x,
            y: this.transform.position.y,
            z: this.transform.position.z,
            r: this.transform.rotation.yaw,
            str: this.str,
            dex: this.dex,
            int: this.int,
            vig: this.vig,
            agi: this.agi,
            luc: this.luc,
            life: this.life,
            mana: this.mana,
            stamina: this.stamina,
            helmetArmor: (this.helmet) ? JSON.stringify(this.helmet): null,
            chestArmor: (this.chest) ? JSON.stringify(this.chest): null,
            glovesArmor: (this.gloves) ? JSON.stringify(this.gloves): null,
            bootsArmor: (this.boots) ? JSON.stringify(this.boots): null,
            pantsArmor: (this.pants) ? JSON.stringify(this.pants): null,
            robe: (this.robe) ? JSON.stringify(this.robe): null,
            cloak: (this.cloak) ? JSON.stringify(this.cloak): null,
            ring01: (this.ring01) ? JSON.stringify(this.ring01): null,
            ring02: (this.ring02) ? JSON.stringify(this.ring02): null, 
            necklance: (this.necklance) ? JSON.stringify(this.necklance): null,
            offhand: (this.offhand) ? JSON.stringify(this.offhand): null,
            mainhand: (this.mainhand) ? JSON.stringify(this.mainhand) : null,
            instrument: (this.instrument) ? JSON.stringify(this.instrument) : null,
            pet: (this.pet) ? JSON.stringify(this.pet) : null,
            mount: (this.mount) ? JSON.stringify(this.mount) : null,
            pickaxetool: (this.pickaxetool) ? JSON.stringify(this.pickaxetool) : null,
            axetool: (this.axetool) ? JSON.stringify(this.axetool) : null,
            scythetool: (this.scythetool) ? JSON.stringify(this.scythetool) : null,
            actionbar: (actionbarParsed) ? JSON.stringify(actionbarParsed) : "[]",
            skills: (skillsParsed) ? JSON.stringify(skillsParsed) : null,
            inventory: (inventoryParsed) ? inventoryParsed : "{}",
            inventoryId: this.inventory.containerId,
            statsPoints: (typeof this.statsPoints === "number") ? this.statsPoints : 0,
            statsCap: (typeof this.statsCap  === "number") ? this.statsCap : 225,
            party: (this.party) ? this.party.id : null,
            dailyQuestsIndex: (this.dailyQuestsIndex >= 1) ? this.dailyQuestsIndex : 1,
            dailyQuestsMetadata: this.dailyQuest.GenerateMetadata(false, true),
            friends: (this.friends) ? JSON.stringify(this.friends) : "[]",
            friendsRequests: (this.friendsRequests) ? JSON.stringify(this.friendsRequests) : "[]",
            guildId: (this.guild) ? this.guild.Id : null,
            guildName: (this.guild) ? this.guild.Name : null,
            archivements: (this.steamArchivements) ? JSON.stringify(this.steamArchivements) : "[]"
        }

        return data;
    }

    public static parseData(characterId: string, metadata: any = null){
        let character = Player.getData(characterId);
        let inventoryParsed = [];

        if(character.inventory){
            const inventory = (typeof character.inventory === "string") ? 
                JSON.parse(character.inventory) : 
                character.inventory;

            for(let slotId in inventory){
                try{
                    if(slotId !== null && parseInt(slotId) >= 0) {     
                        const itemRef = Items.getItemByRef(inventory[slotId].ItemRef);                       
                        inventory[slotId].slotId = parseInt(slotId);
                        inventory[slotId].rarity = itemRef.Rarity;
                        inventory[slotId].goldCost = itemRef.GoldCost;
                        inventoryParsed.push(inventory[slotId]);  
                    }                           
                }
                catch{}                     
            }    
        }

        let actionbarParsed = [];

        if(character.actionbar){
            const actionbar = JSON.parse(character.actionbar);

            for(let slotId in actionbar){
                try{
                    if(
                        slotId !== null && 
                        parseInt(slotId) >= 0 &&
                        (actionbar[slotId].ActionName !== "None" || actionbar[slotId].ItemName !== "None")
                    ){
                        actionbar[slotId].slotId = parseInt(slotId);
                        actionbarParsed.push(actionbar[slotId]);  
                    }                           
                }
                catch{}                     
            }    
        }

        character.skills = (character.skills)  ? JSON.parse(character.skills) : null;
        character.inventory = (inventoryParsed.length > 0) ? inventoryParsed : [];
        character.actionbar = (actionbarParsed.length > 0) ? actionbarParsed : [];

        //Equipaments
        character.chestArmor = (character.chestArmor) ? Player.getRarity(JSON.parse(character.chestArmor)) : null;
        character.helmetArmor = (character.helmetArmor) ? Player.getRarity(JSON.parse(character.helmetArmor)) : null;
        character.bootsArmor = (character.bootsArmor) ? Player.getRarity(JSON.parse(character.bootsArmor)) : null;
        character.glovesArmor = (character.glovesArmor) ? Player.getRarity(JSON.parse(character.glovesArmor)) : null;
        character.pantsArmor = (character.pantsArmor) ? Player.getRarity(JSON.parse(character.pantsArmor)) : null;
        character.robe = (character.robe) ? Player.getRarity(JSON.parse(character.robe)) : null;
        character.cloak = (character.cloak) ? Player.getRarity(JSON.parse(character.cloak)) : null;
        character.ring01 = (character.ring01) ? Player.getRarity(JSON.parse(character.ring01)) : null;
        character.ring02 = (character.ring02) ? Player.getRarity(JSON.parse(character.ring02)) : null;
        character.necklance = (character.necklance) ? Player.getRarity(JSON.parse(character.necklance)) : null;
        character.offhand = (character.offhand) ? Player.getRarity(JSON.parse(character.offhand)) : null;
        character.mainhand = (character.mainhand) ? Player.getRarity(JSON.parse(character.mainhand)) : null;
        character.instrument = (character.instrument) ? Player.getRarity(JSON.parse(character.instrument)) : null;
        character.pet = (character.pet) ? Player.getRarity(JSON.parse(character.pet)) : null;
        character.mount = (character.mount) ? Player.getRarity(JSON.parse(character.mount)) : null;
        character.pickaxetool = (character.pickaxetool) ? Player.getRarity(JSON.parse(character.pickaxetool)) : null;
        character.axetool = (character.axetool) ? Player.getRarity(JSON.parse(character.axetool)) : null;
        character.scythetool = (character.scythetool) ? Player.getRarity(JSON.parse(character.scythetool)) : null;

        //Daily Quests
        let dailyMetadata = character.dailyQuestsMetadata || null;

        try{
            if(dailyMetadata && typeof dailyMetadata === "string")
                dailyMetadata = JSON.parse(dailyMetadata);
        }
        catch{}

        let dailyQuests = DailyQuests.GetQuests(character.dailyQuestsIndex, { ...dailyMetadata });          
        character.dailyQuests = dailyQuests?.GenerateMetadata(true);

        if(!character.dailyQuests)
            character.dailyQuests = [];

        //Friends
        character.friends = (character.friends)  ? JSON.parse(character.friends) : [];
        character.friendsRequests = (character.friendsRequests) ? JSON.parse(character.friendsRequests) : [];
        
        //Steam
        character.archivements = (character.archivements && typeof character.archivements === "string") ? JSON.parse(character.archivements) : []
        
        return JSON.stringify(character);
    }

    static getRarity(data){
        if(data && data.ItemRef){
            const item = Items.getItemByRef(data.ItemRef);
            data.Rarity = (item) ? item.Rarity : ItemRarity.Common;
        }

        return data;
    }

    public async saveToDatabase() {    
        if(!this.map || this.removed)
            return;

        if(!this.inEvent){
            const data = this.serialize();

            if(this.map?.namespace === "_Dev") {
                delete data.map;
                delete data.x;
                delete data.y;
                delete data.z;
                delete data.r;
            }

            await this.gameServerQueue.add("update", { 
                table: "character", 
                id: data.id, 
                set: data
            });
    
            if(data.inventory){
                await this.gameServerQueue.add("update", { 
                    table: "container", 
                    containerId: this.inventory.containerId, 
                    characterId: this.characterId,            
                    set: data.inventory
                });
            }
        }       
    } 

    public sendToolips(){
        this.inventory.slots.forEach((item) => {
            if(item instanceof Equipament)
                packetTooltip.send(this, item.Ref, item.serealize());
        });

        if(this.equipaments.length > 0){
            this.equipaments.map((equipament) => {
                packetTooltip.send(this, equipament.Ref, equipament.serealize());
            })
        };        
    }

    public disconnect(){
        if(this.socket){
            this.socket.close();
            this.save();
            this.saveToDatabase();
            this.map.leaveMap(this);
        }
    }

    //Misc
    public chatMessage(type: ChatChannel, message: string){
        if(message !== ""){
            const messageId = GUID.Generate();
            
            switch(type){
                case ChatChannel.All: 
                    const entities = new Set([...this.areaOfInterece, this]);

                    entities.forEach((entity) => {
                        packetChatMessage.send(entity, {
                            senderName: this.name,
                            entityId: this.mapIndex,
                            channel: type,
                            messageRef: messageId,
                            message
                        })

                        packetSay.send(entity, {
                            speaker: this,
                            message: message,
                            color: "255,255,255,255"
                        });
                    });
                break;
                case ChatChannel.Party: 
                    if(this.party){
                        this.party.members.forEach((entity) => packetChatMessage.send(entity, {
                            senderName: this.name,
                            entityId: this.mapIndex,
                            channel: type,
                            messageRef: messageId,
                            message
                        }));
                    }
                break;
            }
        }        
    }

    public override revive() : void {
        super.revive();
        this.save();

        setTimeout(() => {  
            this.tooltipSended =  []; 

            this.inventory.slots.forEach((item, slotId) => {
                packetAddItemContainer.send(this, {
                    amount: item.Amount,
                    containerId: this.inventory.containerId,
                    itemName: item.Namespace,
                    itemRef: item.Ref,
                    slotId,
                    itemRarity: item.Rarity,
                    goldCost: item.GoldCost,
                    weight: item.Weight
                }, false);

                if(
                    item instanceof Equipament || item instanceof PowerScroll || 
                    item instanceof PetItem || item instanceof MountItem
                ) {
                    packetTooltip.send(this, item.Ref, item.serealize());
                }                    
            });

            this.refreshEquipamentsList();
            this.calculateStats();
            this.calculateStatics();  
            this.sendToolips(); 

            packetUpdateSkillInfo.send(this);
        }, 500);  
    }

    public async inventoryChange(){
        const inventoryParsed : any = this.inventory.saveToModel();

        await this.gameServerQueue.add("update", { 
            table: "character", 
            id: this.characterId, 
            set: {
                inventory: (inventoryParsed) ? inventoryParsed : "{}",
            }
        });

        await this.gameServerQueue.add("update", { 
            table: "container", 
            containerId: this.inventory.containerId, 
            characterId: this.characterId,            
            set: inventoryParsed
        });
    }

    public teleport(mapName: string, mapWaypoint: string){
        this.save();
        this.saveToDatabase();

        const map = Maps.getMap(mapName.trim());

        if(map)
            map.teleportTo(this, mapWaypoint);            
        else
            packetSystemMessage.sendDirectSocket(this.socket, `Map '${mapName}' not exists.`);
    }

    //Stats
    public override calculateStats() : void {
        this.maxLife = 10 + ((this.vig + this.bonusVig) * 5) + (this.str + this.bonusStr); 
        this.maxStamina = 10 + ((this.str + this.bonusStr) * 2) + ((this.dex + this.bonusDex) * 3) + (this.vig + this.bonusVig);
        this.maxMana = 10 + ((this.int + this.bonusInt) * 3); 
    }

    public override addStatsPoint() : void {
        super.addStatsPoint();
        this.save();
        this.saveToDatabase();
        packetPlayerStatics.send(this);
    }

    public override addStat(stat: Stats) : void {
        super.addStat(stat);
        this.calculateStats();
        this.save();
        this.saveToDatabase();
        packetPlayerStatics.send(this);
    }

    public override regenStats() : void {
        super.regenStats();

        if(this.stamina <= 0) 
            this.updateEvent(EventType.SprintEnd);
    }

    public override onStatsChange(){
        packetUpdateStats.send(this);
        packetPlayerStatics.send(this);        
    }

    public getStaticsPlayer() : string {
        let statics = {
            "stats": {
                "str": this.str,
                "dex": this.dex,
                "int": this.int,
                "vig": this.vig,
                "agi": this.agi,
                "luc": this.luc,
                "bstr": this.bonusStr,
                "bdex": this.bonusDex,
                "bint": this.bonusInt,
                "bvig": this.bonusVig,
                "bagi": this.bonusAgi,
                "bluc": this.bonusLuc,
                "l": this.life,
                "ml": this.maxLife,
                "m": this.mana,
                "mm": this.maxMana,
                "s": this.stamina,
                "ms": this.maxStamina
            },
            "resistences": {
                "ca": this.physicalResistence,
                "f" : this.fireResistence,
                "c": this.coldResistence,
                "p": this.poisonResistence,
                "e": this.energyResistence,
                "l": this.lightResistence,
                "d": this.darkResistence
            },
            "lr": this.lifeRegeneration,
            "mr": this.manaRegenegation,
            "sr": this.staminaRegenegation,
            "bpd": this.bonusPhysicalDamage,
            "bmd": this.bonusMagicDamage,
            "wd": this.weaponDamage,
            "ws": this.weaponSpeed,
            "cc": this.criticalChance,
            "cd": this.criticalDamage,
            "ar": this.armor,
            "dr": this.damageReduction,
            "dc": this.dodgeChance,
            "rpd": this.reflectionPhysicalDamage,
            "rmd": this.refrectionMagicDamage,
            "lmc": this.lowerManaCost,
            "fc": this.fasterCasting,
            "cr": this.cooldownReduction,
            "sc": this.statsCap,
            "sp": this.statsPoints
        };

        return JSON.stringify(statics);
    }

    //Skills
    public override gainSkillExperiencie(skill: SkillName, gain: number = 3, saveOnDatabase: boolean = true) : void{
        super.gainSkillExperiencie(skill, gain, saveOnDatabase);
        this.save();
        this.saveToDatabase();
    }
    
    //Actions
    public override setAction(actionName: string, itemRef: string, index: number) : void {
        const action = actionName ? Actions.findActionByName(actionName) : null;
        const item = itemRef ? Items.getItemByRef(itemRef) : null;

        if(action !== null || item !== null){
            this.actionbar.set(index, new ActionbarRef(action, item, index));
            this.save();
            this.saveToDatabase();
        }
    }

    public override clearAction(index: number) : void {
        if(this.actionbar.has(index)){
            this.actionbar.delete(index);
            this.save();
            this.saveToDatabase();
        }
    }

    //Equipments
    public async equip(type: EquipamentType, itemId: string, itemRef: string, ring02: boolean = false) {
        await super.equip(type, itemId, itemRef, ring02);
        this.calculateStats();
        packetUpdateStats.send(this);
        packetPlayerStatics.send(this);  
        this.save();
        this.saveToDatabase();
    }

    public async desequip(type: EquipamentType, ring02: boolean = false, broadcast: boolean = false, slotId: number = -1) {
        await super.desequip(type, ring02, broadcast, slotId);
        this.refreshEquipamentsList();
        this.calculateStatics();
        this.calculateStats();
        packetUpdateStats.send(this);
        packetPlayerStatics.send(this);  
        this.save();
        this.saveToDatabase();
    }

    public async reduceDurability(type: EquipamentType) {
        switch(type){
            case EquipamentType.Helmet: 
                await Items.reduceDurability(this.helmet.ItemRef, this); 
                const helmetItem = Items.getItemByRef(this.helmet.ItemRef);
                packetRefreshTooltip.send(this, this.helmet.ItemRef, helmetItem.serealize());
            break;
            case EquipamentType.Chest: 
                await Items.reduceDurability(this.chest.ItemRef, this); 
                const chestItem = Items.getItemByRef(this.chest.ItemRef);
                packetRefreshTooltip.send(this, this.chest.ItemRef, chestItem.serealize());
            break;
            case EquipamentType.Gloves: 
                await Items.reduceDurability(this.gloves.ItemRef, this); 
                const glovesItem = Items.getItemByRef(this.gloves.ItemRef);
                packetRefreshTooltip.send(this, this.gloves.ItemRef, glovesItem.serealize());
            break;
            case EquipamentType.Pants: 
                await Items.reduceDurability(this.pants.ItemRef, this); 
                const pantsItem = Items.getItemByRef(this.pants.ItemRef);
                packetRefreshTooltip.send(this, this.pants.ItemRef, pantsItem.serealize());
            break;
            case EquipamentType.Boots: 
                await Items.reduceDurability(this.boots.ItemRef, this); 
                const bootsItem = Items.getItemByRef(this.boots.ItemRef);
                packetRefreshTooltip.send(this, this.boots.ItemRef, bootsItem.serealize());
            break;
            case EquipamentType.Offhand: 
                await Items.reduceDurability(this.offhand.ItemRef, this); 
                const offhandItem = Items.getItemByRef(this.offhand.ItemRef);
                packetRefreshTooltip.send(this, this.offhand.ItemRef, offhandItem.serealize());
            break;
            case EquipamentType.Weapon: 
                await Items.reduceDurability(this.mainhand.ItemRef, this);
                const mainhandItem = Items.getItemByRef(this.mainhand.ItemRef);
                packetRefreshTooltip.send(this, this.mainhand.ItemRef, mainhandItem.serealize()); 
            break;
            case EquipamentType.Instrument: 
                await Items.reduceDurability(this.instrument.ItemRef, this); 
                const instrumentItem = Items.getItemByRef(this.instrument.ItemRef);
                packetRefreshTooltip.send(this, this.instrument.ItemRef, instrumentItem.serealize()); 
            break;
            case EquipamentType.PickaxeTool: 
                await Items.reduceDurability(this.pickaxetool.ItemRef, this); 
                const pickaxetoolItem = Items.getItemByRef(this.pickaxetool.ItemRef);
                packetRefreshTooltip.send(this, this.pickaxetool.ItemRef, pickaxetoolItem.serealize());                 
            break;
            case EquipamentType.AxeTool: 
                await Items.reduceDurability(this.axetool.ItemRef, this); 
                const axetoolItem = Items.getItemByRef(this.axetool.ItemRef);
                packetRefreshTooltip.send(this, this.axetool.ItemRef, axetoolItem.serealize()); 
            break;
            case EquipamentType.ScytheTool: 
                await Items.reduceDurability(this.scythetool.ItemRef, this);
                const scythetoolItem = Items.getItemByRef(this.scythetool.ItemRef);
                packetRefreshTooltip.send(this, this.scythetool.ItemRef, scythetoolItem.serealize());
            break;
        }

        this.refreshEquipamentsList();
        this.calculateStatics();
    }

    //Collect / Gathering
    public startGathering(payload: string){
        const gatheringSpot = this.map.foliage.get(payload);

        if(gatheringSpot) {
            this.gatherableSpot = gatheringSpot;
            this.gatherableInteract = gatheringSpot.entityRespawned;
        }        
    }

    public async collect(){
        if(this.gatherableInteract){
            await this.gatherableInteract.collect(this);       

            if(this.gatherableInteract.tick <= 0){
                this.map.setFoliageAsCollected(this.gatherableInteract.foliageId);
                this.gatherableSpot.collected();
                this.gatherableInteract = null;
            }                
        }          
    }

    public async removeResource(itemName: string, quantity: number){
        let successRemoveItems = true;

        let slotId = this.inventory.getSlotByItemNamespace(itemName);
        let item = this.inventory.getItemByNamespace(itemName);

        if(slotId >= 0 && item){
            if(item.Amount > quantity)
                await this.inventory.changeAmount(slotId, item.Amount - quantity);
            else if(item.Amount === quantity)
                await this.inventory.removeItem(item.Ref);
            else
                successRemoveItems = false;
        }                        
        else {
            successRemoveItems = false;
        }                        
        
        return successRemoveItems;
    }

    public async craftItem(recipeName: string, amount: number = 1){
        if(CraftRecipe.Recipes.has(recipeName)){
            const recipe = CraftRecipe.Recipes.get(recipeName);
            const baseItem = Items.createItemByClass(recipe.resultItem, this.name);
            let hasAllItems = true;

            for(let resource of recipe.resources){
                if(!this.inventory.hasItemAmount(resource.ItemName, resource.Quantity * amount))
                    hasAllItems = false;
            }

            if(this.getGoldCoins() < (baseItem.GoldCost / 2)){
                hasAllItems = false;
                packetSystemMessage.sendDirectSocket(this.socket, `You do not have enough gold coins to carry out crafting.`);
            }
                
            if(hasAllItems){
                let successRemoveItems = true;
                let bonusExp = 0;

                for(let resource of recipe.resources){
                    let slotId = this.inventory.getSlotByItemNamespace(resource.ItemName);
                    let item = this.inventory.getItemByNamespace(resource.ItemName);

                    if(slotId >= 0 && item){
                        if(item.Amount > (resource.Quantity * amount))
                            await this.inventory.changeAmount(slotId, item.Amount - (resource.Quantity * amount));
                        else if(item.Amount === (resource.Quantity * amount))
                            await this.inventory.removeItem(item.Ref);
                        else
                            successRemoveItems = false;
                    }                        
                    else {
                        successRemoveItems = false;
                    }                        
                }

                if(successRemoveItems && await this.removeGoldCoins(baseItem.GoldCost / 2)){
                    const playerSkill = this.getSkillValue(recipe.skillReq);

                    if(playerSkill >= recipe.skillLevel || recipe.skillReq === SkillName.Manufacturing){                        
                        const chanceCraft = [50,75,100];
                        const craftChance = Math.max((playerSkill >= (recipe.skillLevel + 1)) ? 100 : Math.round((playerSkill * 100) / recipe.skillLevel), 50);                        
                        const successCraft = (craftChance < 100 && recipe.skillReq !== SkillName.Manufacturing) ? Random.MinMaxInt(1, 100) <= craftChance : true;

                        if(successCraft || recipe.skillReq === SkillName.Manufacturing || craftChance >= 100){
                            if(craftChance >= 100 && baseItem instanceof Equipament)
                                baseItem.randomRarity(this);

                            let props = null;
        
                            if(
                                baseItem instanceof Equipament || baseItem instanceof PowerScroll || 
                                baseItem instanceof PetItem || baseItem instanceof MountItem
                            ) {
                                props = baseItem.serealize();
                            }

                            const hasStackableItem = this.inventory.hasStackableItem(baseItem);
                            
                            const itemRef = await (this.socket.services.itemsService as ItemsService).createItem(
                                this.inventory.containerId,
                                this.characterId,
                                baseItem.Namespace,
                                recipe.resultQuantity,
                                "crafting",
                                null,
                                props, 
                                (hasStackableItem === -1)
                            );

                            if(baseItem instanceof Equipament)
                                bonusExp = playerSkill * 3;
    
                            if(playerSkill <= (recipe.skillLevel + 1))
                                this.gainSkillExperiencie(recipe.skillReq, playerSkill + bonusExp);

                            if(baseItem.Rarity === ItemRarity.Legendary)
                                packetSpecialMessage.send(this, `You crafted a legendary item!!!!`);
    
                            const item = Items.getItemByRef(itemRef);
                            packetSystemMessage.sendDirectSocket(this.socket, `You received +${recipe.resultQuantity} ${baseItem.Name}`);
                            packetCraftingLog.send(this, "Crafting Success!", true);
                            this.inventory.addItem(itemRef, recipe.resultQuantity, -1);
                            this.inventoryChange();

                            if(baseItem instanceof Equipament)
                                packetTooltip.send(this, itemRef, item.serealize()); 
                        }
                        else {
                            this.inventoryChange();

                            if(playerSkill <= (recipe.skillLevel + 1))
                                this.gainSkillExperiencie(recipe.skillReq, Math.round(playerSkill * 2) + bonusExp);

                            packetSystemMessage.sendDirectSocket(this.socket, `You failed in your attempt to create ${baseItem.Name} but you receive double experience for the attempt`);
                            packetCraftingLog.send(this, "Crafting Fail!", false);
                        }                        
                    }
                    else {
                        this.inventoryChange();
                        
                        if(playerSkill <= (recipe.skillLevel + 1))
                            this.gainSkillExperiencie(recipe.skillReq, Math.round(playerSkill * 4));

                        packetSystemMessage.sendDirectSocket(this.socket, `You failed in your attempt to create ${baseItem.Name} but you receive triple experience for the attempt`);
                        packetCraftingLog.send(this, "Crafting Fail!", false);
                    }                  
                }
                else {
                    packetSystemMessage.sendDirectSocket(this.socket, `An error occurred when trying to craft.`);
                }
            }
            else{
                packetSystemMessage.sendDirectSocket(this.socket, `You do not have enough resources to carry out crafting.`);
            }
        }
    }

    //Vendor
    public getGoldCoins() : number {
        const goldcoin = this.inventory.getItemByNamespace("GoldCoin");
        return (goldcoin) ? goldcoin.Amount : 0;
    }

    public async removeGoldCoins(amount: number) : Promise<boolean> {
        const goldcoin = this.inventory.getItemByNamespace("GoldCoin");
        const slot = this.inventory.getSlotByItemNamespace("GoldCoin");

        if(goldcoin && goldcoin.Amount >= amount && slot !== null){
            await this.inventory.changeAmount(slot, goldcoin.Amount - amount);
            return true;
        }

        return false;
    }

    public async removeItem(ref: string, amount: number) : Promise<boolean> {
        const item = this.inventory.getItem(ref);
        const slot = this.inventory.getSlotByRef(ref);

        if(item && item.Amount === 1 && slot !== null){            
            await this.inventory.removeItem(ref);
            return true;
        }
        else if(item && item.Amount >= amount && slot !== null){
            await this.inventory.changeAmount(slot, item.Amount - amount);
            return true;
        }

        return false;
    }

    public async buyItem(namespace: string, amount: number) {
        try{
            if(this.vendorList){
                this.vendorList.data.map(async (ref) => {
                    if(ref.ns === namespace) {
                        const total = ref.g * amount;
                        const playerGoldCoins = this.getGoldCoins();
                        const baseItemCls = Items.getItemBase(ref.ns);

                        if(baseItemCls){
                            const baseItem = new baseItemCls();

                            if(total <= playerGoldCoins && baseItem){
                                if(await this.removeGoldCoins(total)){
                                    if(baseItem instanceof Stackable){
                                        const itemRef = await (this.socket.services.itemsService as ItemsService).createItem(
                                            this.inventory.containerId,
                                            this.characterId,
                                            baseItem.Namespace,
                                            amount,
                                            "buy",
                                            null,
                                            baseItem.serealize()
                                        );
    
                                        this.gainSkillExperiencie(SkillName.Diplomacy);
    
                                        const item = Items.getItemByRef(itemRef);
                                        packetSystemMessage.sendDirectSocket(this.socket, `You received +${amount} ${baseItem.Name}`);
                                        await this.inventory.addItem(itemRef, amount, -1);
    
                                        if(baseItem instanceof Equipament)
                                            packetTooltip.send(this, itemRef, item.serealize());
                                    }
                                    else{
                                        for(let i = 0; i < amount; i++){
                                            const itemRef = await (this.socket.services.itemsService as ItemsService).createItem(
                                                this.inventory.containerId,
                                                this.characterId,
                                                baseItem.Namespace,
                                                1,
                                                "buy",
                                                null,
                                                baseItem.serealize()
                                            );

                                            const item = Items.getItemByRef(itemRef);
                                            packetSystemMessage.sendDirectSocket(this.socket, `You received +1 ${baseItem.Name}`);
                                            await this.inventory.addItem(itemRef, 1);

                                            if(baseItem instanceof Equipament)
                                                packetTooltip.send(this, itemRef, item.serealize());
                                        }

                                        this.gainSkillExperiencie(SkillName.Diplomacy);
                                    }                                     
                                }
                            }
                        }

                        this.save();
                        this.saveToDatabase();
                    }
                });
            }
        } catch (e){ }        
    }

    public async sellItem(ref: string, amount: number = 1) {
        try{
            const item = this.inventory.getItem(ref);            

            if(item){
                const totalGainGold = item.GoldCost * amount;

                if(await this.removeItem(ref, amount)){
                    await this.addItem("GoldCoin", totalGainGold, "sell");
                    this.save();
                    this.saveToDatabase();
                }
            }
        } catch (e){ }  
    }

    public async addItem(baseItemName: string, amount: number = 1, context: string = "add") {
        const baseItemCls = Items.getItemBase(baseItemName);

        if(baseItemCls){
            const baseItem = new baseItemCls();
            const hasStackableItem = this.inventory.hasStackableItem(baseItem);
            let props = null;
            
            if(
                baseItem instanceof Equipament || baseItem instanceof PowerScroll || 
                baseItem instanceof PetItem || baseItem instanceof MountItem
            ) {
                props = baseItem.serealize();
            }

            const itemRef = await (this.socket.services.itemsService as ItemsService).createItem(
                this.inventory.containerId,
                this.characterId,
                baseItem.Namespace,
                amount,
                context,
                null,
                props, 
                (hasStackableItem === -1)
            );

            const item = Items.getItemByRef(itemRef);
            packetSystemMessage.sendDirectSocket(this.socket, `You received +${amount} ${baseItem.Name}`);
            this.inventory.addItem(itemRef, amount, -1);

            this.save();
            this.saveToDatabase();

            if(
                item instanceof Equipament || item instanceof PowerScroll || 
                item instanceof PetItem || item instanceof MountItem
            ) {
                packetTooltip.send(this, itemRef, item.serealize());
            }
        }
    }

    public async addItemByClass(cls: { new (): any }, amount: number, context: string = "add") {
        if(cls){
            const baseItem = new cls();
            let props = null;

            if(baseItem instanceof PowerScroll)
                (baseItem as PowerScroll).generateAttrs();
            else if(baseItem instanceof Equipament){
                (baseItem as Equipament).generateAttrs();
                (baseItem as Equipament).generateRandomAttrs();
                (baseItem as Equipament).updateGoldCost();
            }
            
            if(
                baseItem instanceof Equipament || baseItem instanceof PowerScroll || 
                baseItem instanceof PetItem || baseItem instanceof MountItem
            ) {
                props = baseItem.serealize();
            }

            const itemRef = await (this.socket.services.itemsService as ItemsService).createItem(
                this.inventory.containerId,
                this.characterId,
                baseItem.Namespace,
                amount,
                context,
                null,
                props
            );

            const item = Items.getItemByRef(itemRef);
            packetSystemMessage.sendDirectSocket(this.socket, `You received +${amount} ${baseItem.Name}`);
            this.inventory.addItem(itemRef, amount, -1);

            this.save();
            this.saveToDatabase();

            if(
                item instanceof Equipament || item instanceof PowerScroll || 
                item instanceof PetItem || item instanceof MountItem
            ) {
                packetTooltip.send(this, itemRef, item.serealize());
            }
        }
    }

    //Party
    public requestJoinParty(characterId: string) {
        if(!this.party)
            this.party = new Party(this);

        if(this.party.owner.characterId === this.characterId) {            
            this.party.requestMember(characterId);
            const player = Player.getPlayer(characterId);

            if(player)
                packetSystemMessage.sendDirectSocket(this.socket, `You sent a party request to ${player.name}.`);
            else
                packetSystemMessage.sendDirectSocket(this.socket, `The player is not currently online, therefore it cannot be invited.`);
        }            
        else
            packetSystemMessage.sendDirectSocket(this.socket, `Only the group leader can invite members.`);
    }

    public confirmPartyRequest(sessionId: string) {
        if(Party.partySessions.has(sessionId)){
            const session = Party.partySessions.get(sessionId);
            session.joinMember(this);
        }
    }

    public leaveParty() {
        if(this.party){
            this.party.leave(this);
            this.party = null;
            this.partyOwner = null;
        }
    }

    //Quest
    public async finishQuest(namespace: string) {
        let hasQuest = false;

        this.dailyQuest.questsProgress.map(async (quest) => {
            if(quest.namespace === namespace && !quest.completed) {
                switch(quest.type) {
                    case QuestType.Collect:
                        let hasAllItems = true;

                        for(let ref of quest.itemCollect) {
                            if(!this.inventory.hasItemAmount(ref.ItemName, ref.Quantity))
                                hasAllItems = false;                                
                        }

                        if(hasAllItems) {                            
                            for(let ref of quest.itemCollect) 
                                await this.removeResource(ref.ItemName, ref.Quantity);
                                   
                            for(let reward of quest.rewards)
                                await this.addItemByClass(reward.Item, reward.Quantity);  
                            
                            quest.completed = true;
                            hasQuest = true;
                        }
                    break;
                }
            }
        });

        if(hasQuest){
            this.save();
            this.saveToDatabase();
        }            
    }

    public async favQuest(namespace: string, status: boolean) {
        let hasQuest = false;

        this.dailyQuest.questsProgress.map((quest) => {
            if(quest.namespace === namespace) {
                quest.fav = status;
                hasQuest = true;
            }
        });

        if(hasQuest)
            this.save();
    }

    //Trade
    public requestTrade(characterId: string) {
        if(!this.trade)
            this.trade = new SafeTrade(this);

        if(this.trade.owner.characterId === this.characterId)
            this.trade.requestTrade(characterId);
        else
            packetSystemMessage.sendDirectSocket(this.socket, `The player is already in another trade.`);
    }

    public acceptTrade(sessionId: string) {
        const sessionTrade = SafeTrade.getSession(sessionId);

        if(sessionTrade)
            sessionTrade.acceptTrade(this);
    }
    
    public notAcceptTrade(sessionId: string) {
        const sessionTrade = SafeTrade.getSession(sessionId);

        if(sessionTrade)
            sessionTrade.notAccept(this);            
    }

    public changeStatusTrade(sessionId: string, newStatus: boolean) {
        const sessionTrade = SafeTrade.getSession(sessionId);

        if(sessionTrade)
            sessionTrade.changeStatus(this, newStatus);  
    }

    public cancelTrade(sessionId: string) {
        const sessionTrade = SafeTrade.getSession(sessionId);

        if(sessionTrade)
            sessionTrade.cancelTrade(this);  
    }

    //Friends
    public requestFriend(characterId: string) {
        if(!this.friends.includes(characterId) && !this.friendsRequests.includes(characterId))
            this.friendsRequests.push(characterId);
        else
            packetSystemMessage.sendDirectSocket(this.socket, `The player is already on your friends list.`);
    }

    public acceptFriend(characterId: string) {
        const requestIndex = this.friendsRequests.indexOf(characterId);

        if (requestIndex !== -1) {
            this.friends.push(characterId);
            this.friendsRequests.splice(requestIndex, 1);
        }
    }

    public notAcceptFriend(characterId: string) {
        const requestIndex = this.friendsRequests.indexOf(characterId);

        if (requestIndex !== -1) 
            this.friendsRequests.splice(requestIndex, 1);
    }

    //Card
    public async appendCard(equipamentRef: string, itemRef: string) {
        if(this.inventory.hasItem(equipamentRef) && this.inventory.hasItem(itemRef)){
            const item = this.inventory.getItem(equipamentRef);
            const itemRefAppend = this.inventory.getItem(itemRef);

            if(item instanceof Equipament){
                const equipament = (item as Equipament);

                if(equipament.CardSlots > 0 && equipament.Cards.length < equipament.CardSlots){
                    equipament.Cards.push(itemRefAppend.Namespace);
                    Items.setItem(equipament.Ref, equipament);
                    packetRefreshTooltip.send(this, equipament.Ref, equipament.serealize()); 
                    this.inventory.save();
                    await this.inventory.removeItem(itemRef);

                    this.socket.services.gameServerQueue.add("update", {
                        table: "item", 
                        id: equipament.Ref,
                        set: { props: equipament.serealize() }                        
                    });
                }
            }

            this.save();
            this.saveToDatabase();
        }
    }

    //Guild 
    public async createGuild(medadata: {
        guildName: string,
        banner: number,
        pattern: number,
        symbol: number,
        bannerColor: string,
        patternColor: string,
        symbolColor: string
    }) {
        if(this.getGoldCoins() >= this.createGuildCost){
            if(await this.removeGoldCoins(this.createGuildCost)){
                const flag = {
                    banner: medadata.banner,
                    pattern: medadata.pattern,
                    symbol: medadata.symbol,
                    bannerColor: medadata.bannerColor,
                    patternColor: medadata.patternColor,
                    symbolColor: medadata.symbolColor
                };

                const members = JSON.stringify([{ 
                    id: this.characterId, 
                    name: this.name, 
                    plevel: GuildAccessLevel.Owner,
                    tag: this.hashtag 
                }]);

                const guildId = await (this.socket.services.guildService as GuildService).createGuild(
                    this.characterId, 
                    medadata.guildName,
                    flag,
                    members
                );

                this.guild = new Guild(guildId, this.characterId, medadata.guildName, JSON.stringify(flag), 100, 1);

                Guilds.fromDatabase({
                    id: guildId,
                    owner: this.characterId,
                    guildName: medadata.guildName,
                    flag: JSON.stringify(flag),
                    maxMembers: 100,
                    members,
                    level: 1
                });

                this.save();
                this.saveToDatabase();

                const entities = new Set([...this.areaOfInterece, this]);

                entities.forEach((entity) => {
                    packetJoinGuild.send(entity, {
                        entityId: this.mapIndex,
                        guildId: guildId,
                        guildName: medadata.guildName
                    });
                });
            } 
        }   
        else {
            packetSystemMessage.sendDirectSocket(this.socket, `You do not have enough gold to create the guild.`);
        }
    }   

    public guildList() {
        const guilds = Guilds.getGuilds();
        packetGuildsList.send(this, JSON.stringify({ guilds: guilds }));
    }

    public guildData(guildId: string) {
        const guild = Guilds.getGuild(guildId);

        if(guild)
            packetGuildData.send(this, JSON.stringify(guild.serialize(guild.Owner === this.characterId)));
    }

    public guildRequestJoin(guildId: string) {
        const guild = Guilds.getGuild(guildId);

        if(guild) 
            guild.addRequest(this);
    }

    public guildAcceptRequest(requestId: string) {
        const guild = Guilds.getGuild(this.guild.Id);

        if(guild && guild.hasPlevel(GuildAccessLevel.Staff, this)) 
            guild.acceptRequest(this, requestId);
    }

    public guildDenyRequest(requestId: string) {
        const guild = Guilds.getGuild(this.guild.Id);

        if(guild && guild.hasPlevel(GuildAccessLevel.Staff, this)) 
            guild.denyRequest(this, requestId);
    }  
    
    public removeGuildMember(characterId: string){
        const guild = Guilds.getGuild(this.guild.Id);

        if(guild && guild.hasPlevel(GuildAccessLevel.Owner, this)) 
            guild.removeGuildMember(this, characterId);
    }

    public leaveGuild(){
        const guild = Guilds.getGuild(this.guild.Id);

        if(guild) 
            guild.leaveGuild(this);
    }

    //Events
    public createEvent(eventType: EventInstanceType) {
        const mapService = (this.socket.services.mapsService as MapsService);
        const event = EventInstance.CreateEvent(eventType, mapService);
        event.Join(this);
    
        //Cria o event instance (gerenciar o disconnect, o tempo e cria so player fake caso seja o tipo de evento)
        //Caso for party, enviar request para todos os membros
            //Ao todos da party aceita, teleporta todo mundo
        //Se for fila, entra pro sistema de procura/match de grupo
            //Ao finalizar a fila, teleporta tudo mundo
        //Se for solo, teleporta
    }

    public playerActions(type: PlayerActions, medatata: any){
        switch(type){
            case PlayerActions.RequestFriend: this.requestFriend(medatata.characterId); break;
        }
    }

    //Steam
    public setArchivement(archivementName: string){
        //if(this.steamArchivements.indexOf(archivementName) <= -1){
            this.steamArchivements.push(archivementName);
            this.save();
            this.saveToDatabase();
            packetSteamArchivement.send(this, archivementName);
        //}
    }

    public checkSkillArchivement(){
        this.steamArchivementsSkill.forEach((archivementInfo) => {
            const playerSkill = this.getSkillValue(archivementInfo.skill);

            if(playerSkill >= archivementInfo.value)
                this.setArchivement(archivementInfo.archivementName);
        });
    }
} 