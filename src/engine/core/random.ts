export class Random {
    public static MinMaxInt(min: number, max: number){
        if (min >= max)
            return min;

        const range = max - min + 1;
        return Math.floor(Math.random() * range) + min;
    }

    public static DropChance(chance: number): boolean {
        if (chance < 0.01 || chance > 100) 
            return false;
        
        const probability = chance / 100;
        const randomNum = Math.random();
        return randomNum < probability;
    }

    public static ArrRandom<T>(array: T[]): T | null {
        if (array.length === 0) 
            return null;
        
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }
}