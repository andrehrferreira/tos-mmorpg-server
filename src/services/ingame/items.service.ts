import * as uuid from "uuid";
import * as uuidToHex from "uuid-to-hex";
import Redis from 'ioredis';

import { Injectable, Logger } from "@nestjs/common";
import { InjectRedis } from '@nestjs-modules/ioredis';

import { RepositoryService } from '../utils/repository.service';
import { Items } from "@engine";

@Injectable()
export class ItemsService {
    private readonly logger = new Logger(ItemsService.name);

    constructor(
        @InjectRedis() private readonly redis: Redis,
		private repository: RepositoryService
	){}

    async loadAll(){
        this.logger.verbose("Loading Items...");

        const itemsData = await this.repository.getItems();

        for(let item of itemsData)
            Items.itemFromDatabase(item);
        
        this.logger.verbose(`${itemsData.length} Items loaded...`);
    }

    createItemId(): string {
        const tmpUUID = uuid.v4();
        const hexStringWithLeadingZero = uuidToHex(tmpUUID, true);
        return hexStringWithLeadingZero.substr(0, 10);
    }

    async createItem(
        containerId: string, 
        owner: string, 
        itemName: string, 
        amount: number, 
        createBy: string, 
        createByAdmin: string = "",
        props: any = null,
        createInDatabase: boolean = true
    ) {
        const itemId = this.createItemId();

        const cleanProps = (props: any) => {
            if (typeof props === 'object' && props !== null) {
                return Object.keys(props).reduce((acc, key) => {
                    if (props[key]) {
                        acc[key] = props[key];
                    }
                    return acc;
                }, {} as any);
            }
            return null;
        };

        const filteredProps = cleanProps(props);

        if(createInDatabase){
            const result = this.repository.createItem({
                containerId: containerId,
                id: itemId,
                owner, itemName,
                amount, createBy,
                createAt: new Date(),
                createByAdmin,
                props: (typeof props === "object") ? JSON.stringify(filteredProps) : null
            });

            Items.itemFromDatabase({
                itemName: itemName,
                amount, itemRef: itemId,
                props: filteredProps
            });

            return (result) ? itemId : null;
        }
        else {
            Items.itemFromDatabase({
                itemName: itemName,
                amount, itemRef: itemId,
                props: filteredProps
            });

            return itemId;
        }
    }

    async deleteItem(itemRef: string){
        await this.repository.deleteItem(itemRef);
    }

    async updateItem(itemRef: string, data: any){
        await this.repository.updateItem(itemRef, data);
    }
}