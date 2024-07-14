import { Resource, Items } from "..";

export class Hides extends Resource {
    public Namespace: string = "Hides";
    public Name: string = "Hides"; 
    public Weight: number = 0.5;
    public GoldCost: number = 5;
}

export class ScaledHides extends Resource {
    public Namespace: string = "ScaledHides";
    public Name: string = "Scaled Hides"; 
    public Weight: number = 1;
    public GoldCost: number = 10;
}

export class SpinedHides extends Resource {
    public Namespace: string = "SpinedHides";
    public Name: string = "Spined Hides"; 
    public Weight: number = 2;
    public GoldCost: number = 20;
}

export class DemonicHides extends Resource {
    public Namespace: string = "DemonicHides";
    public Name: string = "Demonic Hides"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

export class DarknessHides extends Resource {
    public Namespace: string = "DarknessHides";
    public Name: string = "Darkness Hides"; 
    public Weight: number = 5;
    public GoldCost: number = 50;
}

export class BarbedHides extends Resource {
    public Namespace: string = "BarbedHides";
    public Name: string = "Barbed Hides"; 
    public Weight: number = 6;
    public GoldCost: number = 60;
}

export class DragonHides extends Resource {
    public Namespace: string = "DragonHides";
    public Name: string = "Dragon Hides"; 
    public Weight: number = 10;
    public GoldCost: number = 200;
}

export class DivineHides extends Resource {
    public Namespace: string = "DivineHides";
    public Name: string = "Divine Hides"; 
    public Weight: number = 10;
    public GoldCost: number = 500;
}

Items.AddBaseItem("Hides", Hides);
Items.AddBaseItem("ScaledHides", ScaledHides);
Items.AddBaseItem("SpinedHides", SpinedHides);
Items.AddBaseItem("DemonicHides", DemonicHides);
Items.AddBaseItem("DarknessHides", DarknessHides);
Items.AddBaseItem("BarbedHides", BarbedHides);
Items.AddBaseItem("DragonHides", DragonHides);
Items.AddBaseItem("DivineHides", DivineHides);

export class Leather extends Resource {
    public Namespace: string = "Leather";
    public Name: string = "Leather"; 
    public Weight: number = 1;
    public GoldCost: number = 5;
}

export class HardLeather extends Resource {
    public Namespace: string = "HardLeather";
    public Name: string = "Hard Leather"; 
    public Weight: number = 1;
    public GoldCost: number = 10;
}

export class ScaledLeather extends Resource {
    public Namespace: string = "ScaledLeather";
    public Name: string = "Scaled Leather"; 
    public Weight: number = 2;
    public GoldCost: number = 30;
}

export class HardScaledLeather extends Resource {
    public Namespace: string = "HardScaledLeather";
    public Name: string = "Hard Scaled Leather"; 
    public Weight: number = 2;
    public GoldCost: number = 35;
}

export class SpinnedLeather extends Resource {
    public Namespace: string = "SpinnedLeather";
    public Name: string = "Spinned Leather"; 
    public Weight: number = 2;
    public GoldCost: number = 40;
}

export class IronScaledLeather extends Resource {
    public Namespace: string = "IronScaledLeather";
    public Name: string = "Iron Scaled Leather"; 
    public Weight: number = 2;
    public GoldCost: number = 60;
}

export class BarbedLeather extends Resource {
    public Namespace: string = "BarbedLeather";
    public Name: string = "Barbed Leather"; 
    public Weight: number = 3;
    public GoldCost: number = 80;
}

export class DemonicLeather extends Resource {
    public Namespace: string = "DemonicLeather";
    public Name: string = "Demonic Leather"; 
    public Weight: number = 3;
    public GoldCost: number = 100;
}

export class DarknessLeather extends Resource {
    public Namespace: string = "DarknessLeather";
    public Name: string = "Darkness Leather"; 
    public Weight: number = 3;
    public GoldCost: number = 100;
}

export class DragonLeather extends Resource {
    public Namespace: string = "DragonLeather";
    public Name: string = "Dragon Leather"; 
    public Weight: number = 4;
    public GoldCost: number = 100;
}

export class DivineLeather extends Resource {
    public Namespace: string = "DivineLeather";
    public Name: string = "Divine Leather"; 
    public Weight: number = 4;
    public GoldCost: number = 500;
}

Items.AddBaseItem("Leather", Leather);
Items.AddBaseItem("HardLeather", HardLeather);
Items.AddBaseItem("ScaledLeather", ScaledLeather);
Items.AddBaseItem("HardScaledLeather", HardScaledLeather);
Items.AddBaseItem("SpinnedLeather", SpinnedLeather);
Items.AddBaseItem("IronScaledLeather", IronScaledLeather);
Items.AddBaseItem("BarbedLeather", BarbedLeather);
Items.AddBaseItem("DemonicLeather", DemonicLeather);
Items.AddBaseItem("DarknessLeather", DarknessLeather);
Items.AddBaseItem("DragonLeather", DragonLeather);
Items.AddBaseItem("DivineLeather", DivineLeather);