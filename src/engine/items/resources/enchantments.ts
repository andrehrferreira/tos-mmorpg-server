import { Resource, Items } from "..";

export class ColdEssence extends Resource {
    public Namespace: string = "ColdEssence";
    public Name: string = "Cold Essence"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
}

export class DarknessEssence extends Resource {
    public Namespace: string = "DarknessEssence";
    public Name: string = "Darkness Essence"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;
}

export class EarthEssence extends Resource {
    public Namespace: string = "EarthEssence";
    public Name: string = "Earth Essence"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
}

export class FireEssence extends Resource {
    public Namespace: string = "FireEssence";
    public Name: string = "Fire Essence"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
}

export class LightEssence extends Resource {
    public Namespace: string = "LightEssence";
    public Name: string = "Light Essence"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
}

export class NatureEssence extends Resource {
    public Namespace: string = "NatureEssence";
    public Name: string = "Nature Essence"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
}

export class WindEssence extends Resource {
    public Namespace: string = "WindEssence";
    public Name: string = "Wind Essence"; 
    public Weight: number = 0.1;
    public GoldCost: number = 10;
}

export class ElementalDust extends Resource {
    public Namespace: string = "ElementalDust";
    public Name: string = "Elemental Dust"; 
    public Weight: number = 0.1;
    public GoldCost: number = 50;
}

export class MagicDust extends Resource {
    public Namespace: string = "MagicDust";
    public Name: string = "Magic Dust"; 
    public Weight: number = 0.1;
    public GoldCost: number = 100;
}

export class MagicEssence extends Resource {
    public Namespace: string = "MagicEssence";
    public Name: string = "Magic Essence"; 
    public Weight: number = 0.1;
    public GoldCost: number = 300;
}

Items.AddBaseItem("ColdEssence", ColdEssence);
Items.AddBaseItem("DarknessEssence", DarknessEssence);
Items.AddBaseItem("EarthEssence", EarthEssence);
Items.AddBaseItem("FireEssence", FireEssence);
Items.AddBaseItem("LightEssence", LightEssence);
Items.AddBaseItem("NatureEssence", NatureEssence);
Items.AddBaseItem("WindEssence", WindEssence);
Items.AddBaseItem("ElementalDust", ElementalDust);
Items.AddBaseItem("MagicDust", MagicDust);
Items.AddBaseItem("MagicEssence", MagicEssence);