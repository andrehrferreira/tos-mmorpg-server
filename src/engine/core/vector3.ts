export class Vector3 {
    public x: number;
    public y: number;
    public z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public static Zero() : Vector3{
        return new Vector3(0,0,0);
    }

    public static One() : Vector3{
        return new Vector3(1,1,1);
    }

    public add(v: Vector3): Vector3 {
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    public addScalar(v: number): Vector3 {
        return new Vector3(this.x + v, this.y + v, this.z + v);
    }

    public subtract(v: Vector3): Vector3 {
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    public multiplyScalar(scalar: number): Vector3 {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    public divideScalar(scalar: number): Vector3 {
        if (scalar !== 0) 
            return new Vector3(this.x / scalar, this.y / scalar, this.z / scalar);
        else 
            return new Vector3(0, 0, 0);
    }

    public normalize(): Vector3 {
        const length = this.length();
        return this.divideScalar(length);
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public static dot(v1: Vector3, v2: Vector3): number {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }

    public static cross(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
            v1.y * v2.z - v1.z * v2.y,
            v1.z * v2.x - v1.x * v2.z,
            v1.x * v2.y - v1.y * v2.x
        );
    }

    public distanceTo(other: Vector3): number {
        return Math.sqrt(
            (this.x - other.x) ** 2 +
            (this.y - other.y) ** 2 +
            (this.z - other.z) ** 2
        );
    }

    public distanceBetween(other: Vector3) : number{
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        const dz = other.z - this.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    public diff(other: Vector3): boolean {
        const roundX1 = Math.round(this.x);
        const roundY1 = Math.round(this.y);
        const roundZ1 = Math.round(this.z);
        const roundX2 = Math.round(other.x);
        const roundY2 = Math.round(other.y);
        const roundZ2 = Math.round(other.z);

        return roundX1 !== roundX2 || roundY1 !== roundY2 || roundZ1 !== roundZ2;
    }

    public scale(scalar: number) : Vector3 {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    public lerp(target: Vector3, t: number): Vector3 {
        t = Math.max(0, Math.min(1, t));
        const newX = (1 - t) * this.x + t * target.x;
        const newY = (1 - t) * this.y + t * target.y;
        const newZ = (1 - t) * this.z + t * target.z;
        return new Vector3(newX, newY, newZ);
    }

    public copy(){
        return new Vector3(this.x, this.y, this.z);
    }

    public toString(){
        return `X: ${this.x}, Y: ${this.y}, Z: ${this.z}`;
    }
}
