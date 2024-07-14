import { GUID } from '@utils';

import { 
    Container, Player, Containers, WindowType 
} from "..";

import {
    packetSystemMessage, packetRequestTrade,
    packetOpenTradeWindow, packetChangeStatusTrade,
    packetCloseWindow
} from "@network";

export class SafeTrade {
    public static tradeSessions: Map<string, SafeTrade> = new Map<string, SafeTrade>();

    public id: string;
    public owner: Player;
    public otherPlayer: Player;
    public requestCharacterId: string;

    public ownerContainer: Container;
    public otherContainer: Container;

    public ownerAccept: boolean = false;
    public otherAccept: boolean = false;

    constructor(owner: Player) {
        this.id = GUID.NewID();
        this.owner = owner;
        SafeTrade.tradeSessions.set(this.id, this);
    }

    public static getSession(id: string) {
        return SafeTrade.tradeSessions.has(id) ? SafeTrade.tradeSessions.get(id) : null;
    }

    public static destroySession(id: string){
        if(SafeTrade.tradeSessions.has(id)){
            SafeTrade.tradeSessions.get(id).destroy();
            SafeTrade.tradeSessions.delete(id);
        }            
    }

    public destroy(){
        this.owner.trade = null;

        if(this.otherPlayer)
            this.otherPlayer.trade = null;
    }
    
    public requestTrade(characterId: string){
        if(Player.players.has(characterId)){
            const player = Player.players.get(characterId);
            this.requestCharacterId = characterId;

            if(player && !player.trade)
                packetRequestTrade.send(player, this.id, this.owner.name);
            else 
                packetSystemMessage.sendDirectSocket(this.owner.socket, `The player is already in another group.`);
        }
    }

    public acceptTrade(player: Player){
        if(player.characterId === this.requestCharacterId){
            this.otherPlayer = player;

            //Create containers
            this.ownerContainer = new Container(this.owner);
            this.ownerContainer.addObserver(this.otherPlayer);
            Containers.set(this.ownerContainer.containerId, this.ownerContainer);
            this.otherContainer = new Container(this.otherPlayer);
            this.otherContainer.addObserver(this.owner);
            Containers.set(this.otherContainer.containerId, this.otherContainer);

            //Open windows
            packetOpenTradeWindow.send(this.owner, {
                tradeId: this.id,
                ownerContainer: this.ownerContainer.containerId, 
                otherContainer: this.otherContainer.containerId,
                isOwner: true
            });

            packetOpenTradeWindow.send(this.otherPlayer, {
                tradeId: this.id,
                ownerContainer: this.ownerContainer.containerId, 
                otherContainer: this.otherContainer.containerId,
                isOwner: false
            });
        }
    }

    public notAccept(player: Player){
        if(player.characterId === this.requestCharacterId){
            packetSystemMessage.sendDirectSocket(
                this.owner.socket, 
                `The other player does not accept starting an exchange with you.`
            );
            
            SafeTrade.destroySession(this.id);
        }
    }

    public changeStatus(player: Player, status: boolean){
        if(player.characterId === this.owner.characterId){
            this.ownerAccept = status;
            packetChangeStatusTrade.send(this.otherPlayer, status);
        }            
        else if(this.otherPlayer && player.characterId === this.otherPlayer.characterId){
            this.otherAccept = status;
            packetChangeStatusTrade.send(this.owner, status);
        }

        if(this.ownerAccept && this.otherAccept)
            this.finishTrade();
    }

    public async cancelTrade(player: Player){
        if(
            this.otherPlayer && 
            (
                player.characterId == this.owner.characterId || 
                player.characterId === this.otherPlayer.characterId
            )
        ){
            //Info
            packetSystemMessage.sendDirectSocket(this.otherPlayer.socket, `The trade was finalized by the action of one of the players involved.`);
            packetSystemMessage.sendDirectSocket(this.owner.socket, `The trade was finalized by the action of one of the players involved.`);

            //Close window
            packetCloseWindow.send(this.otherPlayer, WindowType.Trade);
            packetCloseWindow.send(this.owner, WindowType.Trade);

            //Returning Items
            if(this.ownerContainer.count() > 0)
                await this.ownerContainer.sendToInventory();

            if(this.otherContainer.count() > 0)
                await this.otherContainer.sendToInventory();

            this.otherPlayer.save();
            this.owner.save();

            SafeTrade.destroySession(this.id);
        }
    }

    public async finishTrade(){
        //Trade itens
        await this.ownerContainer.changeOwner(this.otherPlayer).sendToInventory();
        await this.otherContainer.changeOwner(this.owner).sendToInventory();

        //Close windows
        packetCloseWindow.send(this.otherPlayer, WindowType.Trade);
        packetCloseWindow.send(this.owner, WindowType.Trade);

        //Info
        packetSystemMessage.sendDirectSocket(this.otherPlayer.socket, `Trade completed successfully!`);
        packetSystemMessage.sendDirectSocket(this.owner.socket, `Trade completed successfully!`);

        this.otherPlayer.save();
        this.otherPlayer.saveToDatabase();
        this.owner.save();
        this.owner.saveToDatabase();

        SafeTrade.destroySession(this.id);
    }
}