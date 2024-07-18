import * as uuid from "uuid";
import { Subject } from "rxjs";

import { 
    Entity, Item, Items, 
    Player, Random, Stackable,
    Consumable, Equipament, PowerScroll, 
    PetItem, MountItem, GoldCoin, LootPack
} from "..";

import { ItemsService } from "@services";
import { GUID } from "@utils";

import { 
    packetAddItemContainer, 
    packetChangeItemAmountContainer, 
    packetRemoveItemContainer,
    packetTooltip 
} from "@network";

export enum ContainerType {
    Stash,
    Loot,
    Trade,
    Inventory,
    Recipient
}

export enum DefaultLootType {
    Poor,
    Meager,
    Average,
    Rich,
    FilthyRich,
    UltraRich,
    SuperBoss
}

export class SlotRef { 
    public slotId : number;
    public item: Item;

    constructor(slotId : number, item: Item){
        this.slotId = slotId;
        this.item = item;
    }
}

export class Container {
    public owner: Entity;
    public containerId: string;
    public slots : Map<number, Item> = new Map<number, Item>();
    public itemIndex: Map<string, SlotRef> = new Map<string, SlotRef>();
    public observers: Array<Player> = new Array<Player>();
    public onChange: Subject<Container> = new Subject<Container>();

    constructor(owner: Entity, containerId: string = null){
        this.owner = owner;
        this.containerId = (containerId) ? containerId.substring(0, 12) : GUID.NewID();
        this.slots = new Map<number, Item>();
        this.itemIndex = new Map<string, SlotRef>();
    }

    async loadFromModel(data: any) {
        if(typeof data === "string")
            data = JSON.parse(data);

        if(data){
            for(let itemData of data){
                let slotId = itemData.slotId || itemData.SlotId;
                slotId = (itemData.slotId === 0) ? itemData.slotId : slotId;
                const item = Items.getItemByRef(itemData.ItemRef);
    
                if(item && slotId >= 0){ 
                    this.slots.set(slotId, item);
                    this.itemIndex.set(item.Ref, new SlotRef(slotId, item));
                }
            }
        }
    }

    public changeOwner(newOwner: Entity) : Container{
        this.owner = newOwner;
        return this;
    }

    saveToModel() {
        let inventory = {};

        this.slots.forEach((item, slotId) => {
            if(item){
                inventory[slotId] = { 
                    ItemName: item.Namespace, 
                    Amount: Math.round(item.Amount), 
                    ItemRef: item.Ref 
                };
            }
        });

        return JSON.stringify(inventory);
    }

    getEmptySlot() : number {
        for(let i = 0; i < 100; i++){
            if(!this.slots.has(i))
                return i;
        }

        return this.slots.size;
    }

    hasStackableItem(item: Item) : number {
        if(item instanceof Stackable){
            const namespace = (item as Stackable).Namespace;
            let slotId = -1;

            this.slots.forEach((item, id) => {
                if(item.Namespace === namespace)
                    slotId = id;
            });

            return slotId;
        }

        return -1;
    }

    async addItem(ref: string, amount: number = 1, slotId: number = -1, showHint: boolean = true) : Promise<number> {
        if(this.containerId){
            let item = Items.getItemByRef(ref); 
            
            if(item){
                const stackableItemSlotId = this.hasStackableItem(item);
                const observers = new Set([...this.observers, this.owner]);

                item.ContainerId = this.containerId;

                if(stackableItemSlotId < 0){ //Add 
                    slotId = (slotId > -1) ? slotId : this.getEmptySlot();
        
                    if(amount <= 0){
                        amount = 1;
                        slotId = -1;
                    }
        
                    if(item){
                        if(slotId > -1 && item) {
                            this.itemIndex.set(ref, new SlotRef(slotId, item));
                            this.slots.set(slotId, item);
                            Items.setItem(ref, item);
        
                            if(this.owner){
                                if(this.owner && this.owner.socket) {
                                    this.owner.socket.services.gameServerQueue.add("update", {
                                        table: "item", 
                                        id: ref,
                                        set: { slotId, containerId: this.containerId }                        
                                    });
                                }

                                observers.forEach((observer) => {
                                    packetAddItemContainer.send(observer, {
                                        containerId: this.containerId,
                                        slotId,
                                        itemRef: ref,
                                        itemName: item.Namespace,
                                        amount: amount,
                                        itemRarity: item.Rarity,
                                        goldCost: item.GoldCost,
                                        weight: item.Weight
                                    }, showHint);

                                    if(
                                        item instanceof Equipament || item instanceof PowerScroll || 
                                        item instanceof PetItem || item instanceof MountItem
                                    ) {
                                        packetTooltip.send(observer as Player, ref, item.serealize()); 
                                    }                                    
                                });   
                                
                                this.onChange.next(this);
                            }
                        }                
                    }

                    this.owner.save();    
                    return slotId;
                }
                else {
                    let itemRef = this.slots.get(stackableItemSlotId);
                    let itemInSlot = Items.getItemByRef(itemRef.Ref);
        
                    if(stackableItemSlotId > -1 && item){
                        itemInSlot.Amount += amount;
        
                        this.itemIndex.set(itemInSlot.Ref, new SlotRef(stackableItemSlotId, itemInSlot));
                        this.slots.set(stackableItemSlotId, itemInSlot);
                        Items.setItem(ref, itemInSlot);
        
                        if(this.owner){
                            if(this.owner && this.owner.socket){
                                this.owner.socket.services.gameServerQueue.add("update", {
                                    table: "item", 
                                    id: itemInSlot.Ref,
                                    set: { amount: itemInSlot.Amount }                        
                                });

                                this.owner.socket.services.gameServerQueue.add("delete", {
                                    table: "item", 
                                    id: ref                      
                                });
                            }

                            observers.forEach((observer) => {
                                packetChangeItemAmountContainer.send(observer, {
                                    containerId: this.containerId,
                                    slotId: stackableItemSlotId,
                                    amount: itemInSlot.Amount
                                });
                            }); 

                            this.onChange.next(this);
                        }
                    }

                    this.owner.save();    
                    return stackableItemSlotId;
                }
            }
        }
    }

    hasItem(ref: string) : boolean {
        return this.itemIndex.has(ref);
    }

    hasItemAmount(itemName: string, amount: number) : boolean {
        let result = false;

        this.slots.forEach((item) => {
            if(item.Namespace === itemName && item.Amount >= amount)
                result = true;
        });

        return result;
    }

    hasItemBySlotId(slotId: number) : boolean {
        return this.slots.has(slotId);
    }

    getItemSlot(ref: string) : SlotRef | null {
        return this.itemIndex.has(ref) ? this.itemIndex.get(ref) : null;
    }

    getItem(ref: string) : Item | null {
        return this.itemIndex.has(ref) ? this.itemIndex.get(ref).item : null;
    }

    getItemByNamespace(itemName: string) : Item | null {
        let result = null;

        this.slots.forEach((item) => {
            if(item.Namespace === itemName)
                result = item;
        });

        return result;
    }

    getSlot(slotId: number) : Item | null {
        return (this.slots.has(slotId)) ? this.slots.get(slotId) : null;
    }

    getSlotByItemNamespace(itemName: string) : number {
        let result = -1;

        this.slots.forEach((item, slotId) => {
            if(item.Namespace === itemName)
                result = slotId;
        });

        return result;
    }

    getSlotByRef(ref: string) : number {
        let result = -1;

        this.slots.forEach((item, slotId) => {
            if(item.Ref === ref)
                result = slotId;
        });

        return result;
    }

    clearSlot(slotId: number) : boolean {
        if(this.slots.has(slotId)){
            const itemRef = this.slots.get(slotId);
            this.slots.delete(slotId);
            this.itemIndex.delete(itemRef.Ref);
            const observers = new Set([...this.observers, this.owner]);

            //if(this.owner){  
                observers.forEach((observer) => {  
                    packetRemoveItemContainer.send(observer, {
                        containerId: this.containerId,
                        itemRef: itemRef.Ref,
                        slotId
                    });
                });

                this.onChange.next(this);
            //}

            return true;
        }
        
        return false;
    }

    async changeAmount(slotId: number, amount: number) : Promise<boolean> {
        if(this.slots.has(slotId)){
            const observers = new Set([...this.observers, this.owner]);
            let item = this.slots.get(slotId);
            
            if(amount > 0){                
                item.Amount = Math.round(amount);
                this.slots.set(slotId, item);
                Items.setItem(item.Ref, item);

                if(this.owner && this.owner.socket){
                    this.owner.socket.services.gameServerQueue.add("update", {
                        table: "item", 
                        id: item.Ref,
                        set: { amount }                        
                    });

                    observers.forEach((observer) => {
                        packetChangeItemAmountContainer.send(observer, {
                            containerId: this.containerId,
                            slotId, amount
                        });
                    });  
                    
                    this.save();

                    if(this.owner instanceof Player){
                        await (this.owner as Player).save();
                        await (this.owner as Player).saveToDatabase();
                    }

                    this.onChange.next(this);
                }

                return true;
            }
            else{
                await this.removeItem(item.Ref);
                return true;
            }            
        }
        else{
            return false;
        }
    }

    async removeItem(ref: string) : Promise<boolean> {
        if(this.itemIndex.has(ref)){
            const observers = new Set([...this.observers, this.owner]);
            const slotref = this.itemIndex.get(ref);
            this.itemIndex.delete(ref);
            this.slots.delete(slotref.slotId);
            Items.removeItem(slotref.item.Ref);
            
            if(this.owner){
                if(this.owner.socket){
                    this.owner.socket.services.gameServerQueue.add("update", {
                        table: "item", 
                        id: slotref.item.Ref,
                        set: { deleted: true, deletedAt: new Date() }                        
                    });
                } 

                observers.forEach((observer) => {  
                    packetRemoveItemContainer.send(observer, {
                        containerId: this.containerId,
                        itemRef: slotref.item.Ref,
                        slotId: slotref.slotId
                    });
                });
                    
                this.onChange.next(this);
            }

            this.save();

            if(this.owner instanceof Player){
                await (this.owner as Player).save();
                await (this.owner as Player).saveToDatabase();
            }

            return true;
        }   

        return false;
    }

    async moveItem(from: number, to: number) : Promise<boolean> {
        const slotFrom = this.slots.get(from);
        const slotTo = this.slots.get(to);

        if(slotFrom){
            if(slotTo){
                this.itemIndex.set(slotTo.Ref, new SlotRef(from, slotTo));
                this.slots.set(from, slotTo);
            
                if(this.owner && this.owner.socket){
                    this.owner.socket.services.gameServerQueue.add("update", {
                        table: "item", 
                        id: slotTo.Ref,
                        set: { slotId: from, containerId: this.containerId }                        
                    });
                }  
            }
                
            this.itemIndex.set(slotFrom.Ref, new SlotRef(to, slotFrom));
            this.slots.set(to, slotFrom);

            if(this.owner && this.owner.socket){
                this.owner.socket.services.gameServerQueue.add("update", {
                    table: "item", 
                    id: slotFrom.Ref,
                    set: { slotId: to, containerId: this.containerId }                        
                });
            }    

            if(!slotTo){
                this.itemIndex.delete(slotFrom.Ref);
                this.slots.delete(from);
            }

            this.save();

            if(this.owner instanceof Player){
                await (this.owner as Player).save();
                await (this.owner as Player).saveToDatabase();
            }

            this.onChange.next(this);
            return true;
        }

        return false;
    }

    async changeContainer(
        currentSlotId: number, 
        containerTo: Container, 
        newSlotId: number, 
        amount: number = 1
    ){
        const currentItem = this.getSlot(currentSlotId);

        if(currentItem){
            const totalItem = (currentItem.Amount === amount);
            const hasItem = containerTo.hasItemBySlotId(newSlotId);

            if(!totalItem) {
                if(this.owner.socket){
                    const newAmount = currentItem.Amount - amount;

                    if(newAmount > 0){                        
                        const itemRef = await (this.owner.socket.services.itemsService as ItemsService).createItem(
                            containerTo.containerId, 
                            containerTo.owner.characterId,
                            currentItem.Namespace,
                            amount,
                            "split",
                            currentItem.serealize()
                        );

                        await this.changeAmount(currentSlotId, newAmount);    
                        containerTo.addItem(itemRef, amount);                                           
                    }
                    else {
                        return;
                    }                    
                }  
            }
            else {
                const observers = new Set([...this.observers, this.owner]);
                let slotId = (hasItem) ? containerTo.getEmptySlot() : newSlotId; 
                                
                const itemRef = await (this.owner.socket.services.itemsService as ItemsService).createItem(
                    this.containerId,
                    this.owner.characterId,
                    currentItem.Namespace,
                    amount,
                    "slipt",
                    null,
                    currentItem.serealize()
                );

                let realSlotAlloc = await containerTo.addItem(itemRef, amount, slotId);                   
                this.clearSlot(currentSlotId);

                if(this.owner && this.owner.socket){
                    this.owner.socket.services.gameServerQueue.add("delete", {
                        table: "item", 
                        id: currentItem.Ref                     
                    });

                    if(realSlotAlloc === slotId){
                        observers.forEach((observer) => {
                            packetAddItemContainer.send(observer, {
                                containerId: containerTo.containerId,
                                slotId: slotId,
                                itemRef: currentItem.Ref,
                                itemName: currentItem.Namespace,
                                amount: amount,
                                itemRarity: currentItem.Rarity,
                                goldCost: currentItem.GoldCost,
                                weight: currentItem.Weight
                            });
                        });
                    }
                }                
            }    
            
            this.onChange.next(this);
            this.save();
            containerTo.save();

            if(this.owner instanceof Player){
                await (this.owner as Player).save();
                await (this.owner as Player).saveToDatabase();
            }
        }
    }

    async consume(slotId: number){
        const item = this.getSlot(slotId);

        if(item){
            if((item instanceof Consumable || item instanceof PowerScroll) && item.Amount > 0){
                if(item.Amount === 1){
                    await (item as Consumable).use(this.owner);
                    await this.clearSlot(slotId);                
                }
                else if(await this.changeAmount(slotId, item.Amount - 1)){
                    if(item instanceof Consumable)
                        await (item as Consumable).use(this.owner);
                    else if(item instanceof PowerScroll)
                        await (item as PowerScroll).use(this.owner as Player);
                }

                if(this.owner instanceof Player){
                    await (this.owner as Player).save();
                    await (this.owner as Player).saveToDatabase();
                }
            }
        }
    }

    async sendToInventory(){
        this.itemIndex.forEach(async (item) => {
            await this.changeContainer(
                item.slotId, 
                this.owner.inventory,
                -1,
                item.item.Amount
            );
            //this.owner.inventory.addItem(item.item.Ref, item.item.Amount)
            //this.removeItem(item.item.Ref);
        });
    }

    count() : number {
        return this.itemIndex.size;
    }

    public addObserver(player: Player){
        this.observers.push(player);
    }

    public clearObeservers(){
        this.observers = new Array<Player>();
    }

    async save() {
        if(this.owner && this.owner.socket){
            this.owner.save();
            const containerParsed : any = this.saveToModel();

            await this.owner.socket.services.gameServerQueue.add("update", { 
                table: "container", 
                containerId: this.containerId, 
                characterId: this.owner.characterId,            
                set: (containerParsed) ? containerParsed : "{}"
            });
        }
    }
}

export class LootRef {
    chance: number;
    amountMin: number;
    amountMax: number;

    constructor(chance: number, amountMin: number, amountMax: number){
        this.chance = chance;
        this.amountMin = amountMin;
        this.amountMax = amountMax;
    }
}

export class Loot extends Container {
    private dropsPossibility: Map<{ new (): any }, LootRef> = new Map<{ new (): any }, LootRef>();

    public dropChance(cls: any, chance: number, amountMin: number, amountMax: number = 1){
        if(cls !== null && cls !== undefined)
            this.dropsPossibility.set(cls, new LootRef(chance, amountMin, amountMax));
    }

    public async generateLoot(player: Player) : Promise<void> {
        if(player && player.socket){
            this.dropsPossibility.forEach(async (ref, cls) => {
                if(Random.DropChance(ref.chance)){
                    const baseItem = Items.createItemByClass(cls);                    
                    const amount = Random.MinMaxInt(ref.amountMin, ref.amountMax);

                    const itemRef = await (player.socket.services.itemsService as ItemsService).createItem(
                        this.containerId,
                        this.owner.id,
                        baseItem.Namespace,
                        amount,
                        "loot",
                        null,
                        baseItem.serealize()
                    );

                    await this.addItem(itemRef, amount);
                    Containers.set(this.containerId, this);
                }
            });
        }
    }

    public setBaseType(type: DefaultLootType){
        switch(type){
            case DefaultLootType.Poor: 
                this.dropChance(GoldCoin, 100, 11, 20);
                this.dropChance(LootPack.getMagicItemsPoor(), 0.02, 1);
                this.dropChance(LootPack.getInstruments(), 0.02, 1);
            break;
        }
    }
}

export class Containers {
    public static containers: Map<string, Container> = new Map<string, Container>();

    public static fromDatabase(data: any) { 
        const container = new Container(null, data.containerId);
        const items = JSON.parse(data.items);

        let itemsParsed = [];

        if(itemsParsed){
            for(let slotId in items){
                try{
                    if(slotId !== null && parseInt(slotId) >= 0) {
                        items[slotId].slotId = parseInt(slotId);
                        itemsParsed.push(items[slotId]);  
                    }                           
                }
                catch{}                     
            }    
        }

        container.loadFromModel(itemsParsed);
        Containers.containers.set(data.containerId, container);
    }

    public static has(containerId: string) : boolean {
        return Containers.containers.has(containerId);
    }

    public static get(containerId: string) : Container | null {
        return Containers.containers.has(containerId) ? 
            Containers.containers.get(containerId) : 
            null;
    }

    public static set(containerId: string, container: Container){
        Containers.containers.set(containerId, container);
    }

    public static getOrCreate(containerId: string, entity: Entity) : Container {
        if(Containers.containers.has(containerId)){
            const container = Containers.containers.get(containerId);
            container.owner = entity;
            Containers.containers.set(containerId, container);
            return container;
        }
        else {
            const newContainer = new Container(entity, containerId);
            Containers.containers.set(containerId, newContainer);
            return newContainer;
        }
    }
}