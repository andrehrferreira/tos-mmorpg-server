import { Resource, Items } from "..";

export class Wood extends Resource {
    public Namespace: string = "Wood";
    public Name: string = "Wood"; 
    public Weight: number = 1;
    public GoldCost: number = 1;
}

export class IpeWood extends Resource {
    public Namespace: string = "IpeWood";
    public Name: string = "Ipe Wood"; 
    public Weight: number = 2;
    public GoldCost: number = 10;
}

export class OakWood extends Resource {
    public Namespace: string = "OakWood";
    public Name: string = "Oak Wood"; 
    public Weight: number = 2;
    public GoldCost: number = 20;
}

export class MapleWood extends Resource {
    public Namespace: string = "MapleWood";
    public Name: string = "Maple Wood"; 
    public Weight: number = 2;
    public GoldCost: number = 30;
}

export class MagicOakWood extends Resource {
    public Namespace: string = "MagicOakWood";
    public Name: string = "Magic Oak Wood"; 
    public Weight: number = 2;
    public GoldCost: number = 50;
}

export class ElvenWood extends Resource {
    public Namespace: string = "ElvenWood";
    public Name: string = "Elven Wood"; 
    public Weight: number = 4;
    public GoldCost: number = 100;
}

export class EbanoWood extends Resource {
    public Namespace: string = "EbanoWood";
    public Name: string = "Ebano Wood"; 
    public Weight: number = 4;
    public GoldCost: number = 250;
}

export class RareElvenWood extends Resource {
    public Namespace: string = "RareElvenWood";
    public Name: string = "Rare Elven Wood"; 
    public Weight: number = 4;
    public GoldCost: number = 500;
}

export class WhiteMapleWood extends Resource {
    public Namespace: string = "WhiteMapleWood";
    public Name: string = "White Maple Wood"; 
    public Weight: number = 4;
    public GoldCost: number = 1000;
}

Items.AddBaseItem("Wood", Wood);
Items.AddBaseItem("IpeWood", IpeWood);
Items.AddBaseItem("OakWood", OakWood);
Items.AddBaseItem("MapleWood", MapleWood);
Items.AddBaseItem("MagicOakWood", MagicOakWood);
Items.AddBaseItem("ElvenWood", ElvenWood);
Items.AddBaseItem("EbanoWood", EbanoWood);
Items.AddBaseItem("RareElvenWood", RareElvenWood);
Items.AddBaseItem("WhiteMapleWood", WhiteMapleWood);

export class WoodBoard extends Resource {
    public Namespace: string = "WoodBoard";
    public Name: string = "Wood Board"; 
    public Weight: number = 2;
    public GoldCost: number = 1;
}

export class IpeBoard extends Resource {
    public Namespace: string = "IpeBoard";
    public Name: string = "Ipe Board"; 
    public Weight: number = 2;
    public GoldCost: number = 30;
}

export class OakBoard extends Resource {
    public Namespace: string = "OakBoard";
    public Name: string = "Oak Board"; 
    public Weight: number = 2;
    public GoldCost: number = 60;
}

export class MapleBoard extends Resource {
    public Namespace: string = "MapleBoard";
    public Name: string = "Maple Board"; 
    public Weight: number = 2;
    public GoldCost: number = 90;
}

export class MagicOakBoard extends Resource {
    public Namespace: string = "MagicOakBoard";
    public Name: string = "Magic Oak Board"; 
    public Weight: number = 2;
    public GoldCost: number = 150;
}

export class ElvenBoard extends Resource {
    public Namespace: string = "ElvenBoard";
    public Name: string = "Elven Board"; 
    public Weight: number = 3;
    public GoldCost: number = 300;
}

export class EbanoBoard extends Resource {
    public Namespace: string = "EbanoBoard";
    public Name: string = "Ebano Board"; 
    public Weight: number = 3;
    public GoldCost: number = 750;
}

export class RareElvenBoard extends Resource {
    public Namespace: string = "RareElvenBoard";
    public Name: string = "Rare Elven Board"; 
    public Weight: number = 3;
    public GoldCost: number = 1500;
}

export class WhiteMapleBoard extends Resource {
    public Namespace: string = "WhiteMapleBoard";
    public Name: string = "White Maple Board"; 
    public Weight: number = 4;
    public GoldCost: number = 3000;
}

Items.AddBaseItem("WoodBoard", WoodBoard);
Items.AddBaseItem("IpeBoard", IpeBoard);
Items.AddBaseItem("OakBoard", OakBoard);
Items.AddBaseItem("MapleBoard", MapleBoard);
Items.AddBaseItem("MagicOakBoard", MagicOakBoard);
Items.AddBaseItem("ElvenBoard", ElvenBoard);
Items.AddBaseItem("EbanoBoard", EbanoBoard);
Items.AddBaseItem("RareElvenBoard", RareElvenBoard);
Items.AddBaseItem("WhiteMapleBoard", WhiteMapleBoard);