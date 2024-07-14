export class GUID {
    public static Generate(){
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    }

    public static NewID(size: number = 6){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        const charactersLength = characters.length;

        for (let i = 0; i < size; i++) 
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        
        return result;
    }

    public static ToInt(Id: string) : number {
        return parseInt(Id, 36);
    }

    public static IntToId(value: number) : string {
        let stringID = value.toString(36).toUpperCase();        
        return stringID;
    }
}