import { Logger } from "@nestjs/common";
import { Item, Items } from "../../items";

export class SellItem {
    ItemBase: { new (): any };
}

export class BaseVendor {
    public static readonly logger = new Logger(BaseVendor.name);
    public static Profiles : Map<string, BaseVendor> = new Map<string, BaseVendor>();
    public static VendorList = {};

    public sellItems: Array<string> = new Array<string>();

    public static addVendorProfile(namespace: string, profile: BaseVendor) : void {
        if(!BaseVendor.Profiles.has(namespace))
            BaseVendor.Profiles.set(namespace, profile);
    }

    public static hasVendorProfile(namespace: string) : boolean {
        return BaseVendor.Profiles.has(namespace);
    }

    public static getVendorProfile(namespace: string) : BaseVendor | null{
        return BaseVendor.Profiles.has(namespace) ? BaseVendor.Profiles.get(namespace) : null;
    }

    public static generateLists(){
        BaseVendor.logger.verbose("Loading Vendor Lists...", "BaseVendor");

        BaseVendor.Profiles.forEach((vendor, namespace) => {
            if(!BaseVendor.VendorList[namespace])
                BaseVendor.VendorList[namespace] = { data : [] };

            BaseVendor.logger.verbose(`Profile ${namespace} loading: ${vendor.sellItems.length} item`);

            vendor.sellItems.map((sellItemRef) => {                
                if(sellItemRef){
                    const base = Items.getItemBase(sellItemRef);

                    if(base){
                        const baseItem = new base() as Item;

                        if(baseItem){                        
                            BaseVendor.VendorList[namespace].data.push({
                                "na": baseItem.Name,
                                "ns": baseItem.Namespace,
                                "g": baseItem.GoldCost * 3
                            });
                        }
                    }
                }                
            });
        });

        BaseVendor.logger.verbose(`${BaseVendor.Profiles.size} vendor loaded...`);
    }

    constructor(sellItems: Array<string>){
        this.sellItems = sellItems
    }
}