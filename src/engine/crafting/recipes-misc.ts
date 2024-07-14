import { SkillName } from "@enums";
import { CraftRecipe } from "./crafting-recipe";

import { 
    EmptyBottle
} from "../items";

CraftRecipe.addRecipe("EmptyBottle", new CraftRecipe(
    EmptyBottle, 1, [
        { ItemName: "Sand", Quantity: 3 }
    ], SkillName.Blacksmithing, 0, "Others"
));