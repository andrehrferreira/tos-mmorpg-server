import { Vector3 } from "./vector3";
import { Rotator } from "./rotator";

export class Transform {
    public position: Vector3;
    public rotation: Rotator;
    public scale: Vector3;

    copy(){
        return new Transform(
            this.position.copy(), 
            this.rotation.copy(),
            new Vector3(1,1,1)
        );
    }

    constructor(position: Vector3 = new Vector3(), rotation: Rotator = new Rotator(), scale: Vector3 = new Vector3(1, 1, 1)) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}