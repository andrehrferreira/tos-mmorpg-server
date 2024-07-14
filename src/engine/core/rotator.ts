import { Vector3 } from "./vector3";

export class Rotator {
    roll: number;  
    pitch: number; 
    yaw: number; 

    constructor(roll: number = 0, pitch: number = 0, yaw: number = 0) {
        this.roll = roll;
        this.pitch = pitch;
        this.yaw = yaw;
    }

    public static Zero() : Rotator {
        return new Rotator(0,0,0);
    }

    private toRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }

    public rotateVector(vector: Vector3): Vector3 {
        let radRoll = this.toRadians(this.roll);
        let radPitch = this.toRadians(this.pitch);
        let radYaw = this.toRadians(this.yaw);

        let rotatedZ = new Vector3(
            vector.x * Math.cos(radYaw) - vector.y * Math.sin(radYaw),
            vector.x * Math.sin(radYaw) + vector.y * Math.cos(radYaw),
            vector.z
        );

        let rotatedY = new Vector3(
            rotatedZ.x * Math.cos(radPitch) + rotatedZ.z * Math.sin(radPitch),
            rotatedZ.y,
            -rotatedZ.x * Math.sin(radPitch) + rotatedZ.z * Math.cos(radPitch)
        );

        let rotatedX = new Vector3(
            rotatedY.x,
            rotatedY.y * Math.cos(radRoll) - rotatedY.z * Math.sin(radRoll),
            rotatedY.y * Math.sin(radRoll) + rotatedY.z * Math.cos(radRoll)
        );

        return rotatedX;
    }

    public diff(other: Rotator): boolean {
        const roundX1 = Math.round(this.roll);
        const roundY1 = Math.round(this.pitch);
        const roundZ1 = Math.round(this.yaw);
        const roundX2 = Math.round(other.roll);
        const roundY2 = Math.round(other.pitch);
        const roundZ2 = Math.round(other.yaw);

        return roundX1 !== roundX2 || roundY1 !== roundY2 || roundZ1 !== roundZ2;
    }

    public copy(){
        return new Rotator(this.roll, this.pitch, this.yaw);
    }

    public toString(){
        return `Roll: ${this.roll}, Pitch: ${this.pitch}, Yaw: ${this.yaw}`;
    }
}
