import { GUID } from "@utils";

export class ByteBuffer {
    private buffer: Uint8Array;

    private position: number;

    constructor(data?: Uint8Array) {
        this.buffer = data || new Uint8Array();
        this.position = 0;
    }

    public static toArrayBuffer(buffer, startIndex = 0) : Uint8Array {
        const length = buffer.length - startIndex;
        const arrayBuffer = new ArrayBuffer(length);
        const view = new Uint8Array(arrayBuffer);

        for (let i = startIndex; i < buffer.length; ++i) 
          view[i - startIndex] = buffer[i];
        
        return view;
    }

    public static utoArrayBuffer(buffer: ArrayBuffer, startIndex: number = 0): Uint8Array {
        const length = buffer.byteLength - startIndex;
        const view = new Uint8Array(buffer, startIndex, length);
        return view;
    }

    private ensureCapacity(requiredBytes: number) {
        const requiredCapacity = this.position + requiredBytes;

        if (requiredCapacity > this.buffer.length) {
            const newBuffer = new Uint8Array(requiredCapacity);
            newBuffer.set(this.buffer, 0);
            this.buffer = newBuffer;
        }
    }

    public static createEmptyByteBuffer(): ByteBuffer {
        return new ByteBuffer();
    }

    public static createByteBufferFromBase64(base64Data: string): ByteBuffer {
        const binaryString = atob(base64Data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);

        for (let i = 0; i < len; i++) 
            bytes[i] = binaryString.charCodeAt(i);
        
        return new ByteBuffer(bytes);
    }

    public static splitPackets(combinedBuffer: ByteBuffer): ByteBuffer[] {
        const packets: ByteBuffer[] = [];
        const bufferData = combinedBuffer.getBuffer();
        let startPosition = 1;
        const bufferSize = bufferData.length;
    
        for (let i = 1; i <= bufferSize - 4; i++) {
            if (
                bufferData[i] === 0xFE &&
                bufferData[i + 1] === 0xFE &&
                bufferData[i + 2] === 0xFE &&
                bufferData[i + 3] === 0xFE
            ) {
                if (i > startPosition) {
                    const packetData = bufferData.slice(startPosition, i);
                    packets.push(new ByteBuffer(packetData));
                }
                
                startPosition = i + 4;
                i += 3;
            }
        }
    
        if (startPosition < bufferSize) {
            const packetData = bufferData.slice(startPosition, bufferSize);
            packets.push(new ByteBuffer(packetData));
        }
    
        return packets;
    }

    public putInt32(value: number): ByteBuffer {
        const buffer = new ArrayBuffer(4);
        new DataView(buffer).setInt32(0, value, true);
        this.ensureCapacity(4);
        this.buffer.set(new Uint8Array(buffer), this.position);
        this.position += 4;
        return this;
    }

    public putUInt32(value: number): ByteBuffer {
        const buffer = new ArrayBuffer(4);
        new DataView(buffer).setUint32(0, value, true);
        this.ensureCapacity(4);
        this.buffer.set(new Uint8Array(buffer), this.position);
        this.position += 4;
        return this;
    }

    public getInt32(): number {
        if (this.position + 4 > this.buffer.length) 
            throw new Error("Buffer underflow");
        
        const dataView = new DataView(this.buffer.buffer.slice(this.position, this.position + 4));
        const value = dataView.getInt32(0, true);
        this.position += 4;

        return value;
    }

    public getUInt32(): number {
        if (this.position + 4 > this.buffer.length) 
            throw new Error("Buffer underflow");
        
        const dataView = new DataView(this.buffer.buffer.slice(this.position, this.position + 4));
        const value = dataView.getUint32(0, true);
        this.position += 4;

        return value;
    }

    public putByte(value: number): ByteBuffer {
        this.ensureCapacity(1);
        this.buffer[this.position++] = value;
        return this;
    }

    public getByte(): number {
        if (this.position + 1 > this.buffer.length) 
            throw new Error("Buffer underflow");
        
        return this.buffer[this.position++];
    }

    public putBool(value: boolean): ByteBuffer {
        return this.putByte(value ? 1 : 0);
    }

    public getBool(): boolean {
        return this.getByte() !== 0;
    }

    public putString(value: string): ByteBuffer {
        const encoder = new TextEncoder(); 
        const utf8Bytes = encoder.encode(value);
    
        this.putInt32(utf8Bytes.length);
        this.ensureCapacity(utf8Bytes.length);
    
        for (let i = 0; i < utf8Bytes.length; i++) 
            this.putByte(utf8Bytes[i]);
            
        return this;
    }

    public getString(): string {
        const length = this.getInt32();
    
        if (this.position + length > this.buffer.length) 
            throw new Error("Buffer underflow");
            
        const utf8Bytes = this.buffer.slice(this.position, this.position + length);
        this.position += length;
    
        const decoder = new TextDecoder();
        return decoder.decode(utf8Bytes);
    }

    public putFloat(value: number): ByteBuffer {
        this.ensureCapacity(4);
        const buffer = new ArrayBuffer(4);
        new DataView(buffer).setFloat32(0, value, true); 
        this.buffer.set(new Uint8Array(buffer), this.position);
        this.position += 4;
        return this;
    }

    public getFloat(): number {
        if (this.position + 4 > this.buffer.length) 
            throw new Error("Buffer underflow");
        
        const value = new DataView(this.buffer.buffer, this.position).getFloat32(0, true); 
        this.position += 4;
        return value;
    }

    public putVector(vector: { x: number; y: number; z: number }): ByteBuffer {
        this.putFloat(vector.x);
        this.putFloat(vector.y);
        this.putFloat(vector.z);
        return this;
    }
    
    public getVector(): { x: number; y: number; z: number } {
        return {
            x: this.getFloat(),
            y: this.getFloat(),
            z: this.getFloat(),
        };
    }

    public putRotator(rotator: { pitch: number; yaw: number; roll: number }): ByteBuffer {
        this.putFloat(rotator.pitch);
        this.putFloat(rotator.yaw);
        this.putFloat(rotator.roll);
        return this;
    }
    
    public getRotator(): { pitch: number; yaw: number; roll: number } {
        return {
            pitch: this.getFloat(),
            yaw: this.getFloat(),
            roll: this.getFloat(),
        };
    }

    public putId(id: string) : ByteBuffer {
        this.putInt32(GUID.ToInt(id));
        return this;
    }

    public getId() : string {
        const idInt = this.getInt32();
        return GUID.IntToId(idInt);
    }

    public writeDataToBuffer(dataSequence: Map<string, string>, values: Map<string, any>): void {
        try{
            dataSequence.forEach((type, key) => {
                const value = values.get(key);

                switch (type) {
                    case 'id': this.putId(value); break;
                    case 'int':
                    case 'int32': this.putInt32(value); break;
                    case 'float': this.putFloat(value); break;
                    case 'string': this.putString(value); break;
                    case 'byte': this.putByte(value); break;
                    case 'boolean':
                    case 'bool': this.putBool(value); break;
                    case 'vector': this.putVector(value); break;
                    case 'rotator': this.putRotator(value); break;
                    default:
                        throw new Error(`Unsupported data type: ${type}`);
                }
            });
        }
        catch{ }
    }

    public readDataFromBuffer(mapObjects: any): any {
        try{
            const dataSequence : Map<string, string> = new Map(Object.entries(mapObjects));
            const outValues: any = {};

            dataSequence.forEach((type, key) => {
                let value: any;

                switch (type) {
                    case "id": value = this.getId(); break;
                    case 'int':
                    case 'int32': value = this.getInt32(); break;
                    case 'float': value = this.getFloat(); break;
                    case 'string': value = this.getString(); break;
                    case 'byte': value = this.getByte(); break;
                    case 'boolean':
                    case 'bool': value = this.getBool(); break;
                    case 'vector': value = this.getVector(); break;
                    case 'rotator': value = this.getRotator(); break;
                    default:
                        throw new Error(`Unsupported data type: ${type}`);
                }

                outValues[key] = value;
            });

            return outValues;
        }
        catch(e){
            console.log(e);
            return {};
        }        
    }

    public getBuffer() {
        return this.buffer;
    }

    public toHex(): string {
        let hexString = '';

        for (let i = 0; i < this.buffer.length; i++) 
            hexString += this.buffer[i].toString(16).padStart(2, '0');
        
        return hexString;
    }
}