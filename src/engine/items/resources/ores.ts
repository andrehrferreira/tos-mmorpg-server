import { Resource, Items } from "..";

export class IronOre extends Resource {
    public Namespace: string = "IronOre";
    public Name: string = "Iron Ore"; 
    public Weight: number = 1;
    public GoldCost: number = 1;
}

export class CopperOre extends Resource {
    public Namespace: string = "CopperOre";
    public Name: string = "Copper Ore"; 
    public Weight: number = 2;
    public GoldCost: number = 1;
}

export class SilverOre extends Resource {
    public Namespace: string = "SilverOre";
    public Name: string = "Silver Ore"; 
    public Weight: number = 2;
    public GoldCost: number = 5;
}

export class GoldOre extends Resource {
    public Namespace: string = "GoldOre";
    public Name: string = "Gold Ore"; 
    public Weight: number = 3;
    public GoldCost: number = 25;
}

export class DarkOre extends Resource {
    public Namespace: string = "DarkOre";
    public Name: string = "Dark Ore"; 
    public Weight: number = 4;
    public GoldCost: number = 150;
}

export class MithrilOre extends Resource {
    public Namespace: string = "MithrilOre";
    public Name: string = "Mithril Ore"; 
    public Weight: number = 6;
    public GoldCost: number = 300;
}

export class HeavenlyOre extends Resource {
    public Namespace: string = "HeavenlyOre";
    public Name: string = "Heavenly Ore"; 
    public Weight: number = 10;
    public GoldCost: number = 2000;
}

Items.AddBaseItem("IronOre", IronOre);
Items.AddBaseItem("CopperOre", CopperOre);
Items.AddBaseItem("SilverOre", SilverOre);
Items.AddBaseItem("GoldOre", GoldOre);
Items.AddBaseItem("DarkOre", DarkOre);
Items.AddBaseItem("MithrilOre", MithrilOre);
Items.AddBaseItem("HeavenlyOre", HeavenlyOre);

//Ingot
export class CopperIngot extends Resource {
    public Namespace: string = "CopperIngot";
    public Name: string = "Copper Ingot"; 
    public Weight: number = 1;
    public GoldCost: number = 5;
}

export class IronIngot extends Resource {
    public Namespace: string = "IronIngot";
    public Name: string = "Iron Ingot"; 
    public Weight: number = 1;
    public GoldCost: number = 5;
}

export class SteelIngot extends Resource {
    public Namespace: string = "SteelIngot";
    public Name: string = "Steel Ingot"; 
    public Weight: number = 0.5;
    public GoldCost: number = 15;
}

export class SilverIngot extends Resource {
    public Namespace: string = "SilverIngot";
    public Name: string = "Silver Ingot"; 
    public Weight: number = 1;
    public GoldCost: number = 25;
}

export class GoldIngot extends Resource {
    public Namespace: string = "GoldIngot";
    public Name: string = "Gold Ingot"; 
    public Weight: number = 2;
    public GoldCost: number = 50;
}

export class DarkIngot extends Resource {
    public Namespace: string = "DarkIngot";
    public Name: string = "Dark Ingot"; 
    public Weight: number = 2;
    public GoldCost: number = 100;
}

export class DarkSteelIngot extends Resource {
    public Namespace: string = "DarkSteelIngot";
    public Name: string = "Dark Steel Ingot"; 
    public Weight: number = 1.5;
    public GoldCost: number = 150;
}

export class DwarfMetalIngot extends Resource {
    public Namespace: string = "DwarfMetalIngot";
    public Name: string = "Dwarf Metal Ingot"; 
    public Weight: number = 10;
    public GoldCost: number = 500;
}

export class MithrilIngot extends Resource {
    public Namespace: string = "MithrilIngot";
    public Name: string = "Mithril Ingot"; 
    public Weight: number = 10;
    public GoldCost: number = 500;
}

export class HeavenlyIngot extends Resource {
    public Namespace: string = "HeavenlyIngot";
    public Name: string = "Heavenly Ingot"; 
    public Weight: number = 10;
    public GoldCost: number = 1000;
}

Items.AddBaseItem("CopperIngot", CopperIngot);
Items.AddBaseItem("IronIngot", IronIngot);
Items.AddBaseItem("SteelIngot", SteelIngot);
Items.AddBaseItem("SilverIngot", SilverIngot);
Items.AddBaseItem("GoldIngot", GoldIngot);
Items.AddBaseItem("DarkIngot", DarkIngot);
Items.AddBaseItem("DarkSteelIngot", DarkSteelIngot);
Items.AddBaseItem("DwarfMetalIngot", DwarfMetalIngot);
Items.AddBaseItem("MithrilIngot", MithrilIngot);
Items.AddBaseItem("HeavenlyIngot", HeavenlyIngot);