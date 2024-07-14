import { Logger } from "@nestjs/common";
import { SkillName } from "@enums";
import { Equipament, Item } from "..";

export interface IRecipeSettings {
    ResultItem: Item;
    ResultQuantity: number;
    Resources: Array<IResourceRef>;
    SkillReq: SkillName;
    SkillLevel: number;
    Category: string;
}

export interface IVariations {
    Resource: IResourceRef,
    Amplify: number;
}

export interface IResourceRef {
    ItemName: string,
    Quantity: number;
}

export class CraftRecipe {
    public static readonly logger = new Logger(CraftRecipe.name);
    public static Recipes : Map<string, CraftRecipe> = new Map<string, CraftRecipe>();
    public static RecipesList = {};

    public resultItem : { new (): any };
    public resultQuantity : number = 1;
    public resources: Array<IResourceRef> = new Array<IResourceRef>();
    public skillReq: SkillName = SkillName.None;
    public skillLevel: number = 0;
    public category: string = "";

    public static addRecipe(resultItem: string, recipe: CraftRecipe) : void {
        if(!CraftRecipe.Recipes.has(resultItem))
            CraftRecipe.Recipes.set(resultItem, recipe);
    }

    public static hasRecipe(resultItem: string) : boolean {
        return CraftRecipe.Recipes.has(resultItem);
    }

    public static getRecipe(resultItem: string) : CraftRecipe | null {
        return CraftRecipe.Recipes.has(resultItem) ? CraftRecipe.Recipes.get(resultItem) : null;
    }

    public static generateCraftLists(){
        Logger.verbose("Loading Crafting Recipes...", "CraftRecipe");

        CraftRecipe.Recipes.forEach((recipe, namespace) => {
            if(!CraftRecipe.RecipesList[recipe.skillReq])
                CraftRecipe.RecipesList[recipe.skillReq] = { groups: [], data: [], skill: recipe.skillReq };

            if(CraftRecipe.RecipesList[recipe.skillReq].groups.indexOf(recipe.category) < 0)
                CraftRecipe.RecipesList[recipe.skillReq].groups.push(recipe.category);

            const baseItem = new recipe.resultItem() as Item;

            CraftRecipe.RecipesList[recipe.skillReq].data.push({
                "n": namespace,
                "s": recipe.skillLevel,
                "c": CraftRecipe.RecipesList[recipe.skillReq].groups.indexOf(recipe.category),
                "r": recipe.resources.map((v) => { return `${v.ItemName}:${v.Quantity}` }),
                "i": `${baseItem.Namespace}:${recipe.resultQuantity}`,
                "g": baseItem.GoldCost / 2,
                "ci": baseItem.CraftingInfo.size > 0 ? Array.from(baseItem.CraftingInfo.entries()).map(([key, value]) => `${key}:${value}`) : []
            });
        });       

        for(let key in CraftRecipe.RecipesList) 
            CraftRecipe.RecipesList[key].data.sort((a,b) => a.skillLevel<b.skillLevel);
                
        this.logger.verbose(`${CraftRecipe.Recipes.size} recipes loaded...`);
    }

    constructor(
        resultItem : { new (): any }, 
        resultQuantity : number,
        resources: Array<IResourceRef>,
        skillReq: SkillName,
        skillLevel: number,
        category: string
    ){
        this.resultItem = resultItem;
        this.resultQuantity = resultQuantity;
        this.resources = resources;
        this.skillReq = skillReq;
        this.skillLevel = skillLevel;
        this.category = category;
    }
}