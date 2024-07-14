import { ServerPacketType } from "@enums";
import { Maps } from "../maps";
import { ByteBuffer } from "./bytebuffer";

export class QueueBuffer {
    private static queues: Map<string, ByteBuffer[]> = new Map();
    private static sockets: Map<string, any> = new Map();
    private static maxBufferSize = 512 * 1024; 
    private static endOfPacketByte = 0xFE;
    private static endRepeatByte = 4;

    public static addSocket(id: string, socket: any){
        QueueBuffer.sockets.set(id, socket);
    }

    public static removeSocket(id){
        if(QueueBuffer.sockets.has(id))
            QueueBuffer.sockets.delete(id);
    }

    public static getSocket(id){
        return (QueueBuffer.sockets.has(id)) ? QueueBuffer.sockets.get(id) : null;
    }

    public static addBuffer(socketId: string, buffer: ByteBuffer): void {
        if (!QueueBuffer.queues.has(socketId)) 
            QueueBuffer.queues.set(socketId, []);
                
        if(!QueueBuffer.isDuplicatePacket(socketId, buffer)){
            QueueBuffer.queues.get(socketId)!.push(buffer);
            QueueBuffer.checkAndSend(socketId);
        }
    }

    public static checkAndSend(socketId: string): void {
        const buffers = QueueBuffer.queues.get(socketId);
        
        if (buffers) {
            const totalSize = buffers.reduce((sum, buffer) => sum + buffer.getBuffer().length, 0);

            if (totalSize >= QueueBuffer.maxBufferSize) 
                QueueBuffer.sendBuffers(socketId);
        }
    }

    public static sendBuffers(socketId: string): void {
        const buffers = QueueBuffer.queues.get(socketId);

        if (buffers) {
            if(buffers.length > 1){
                const combinedBuffer = QueueBuffer.combineBuffers(buffers);
                const finalBuffer = combinedBuffer.getBuffer();
                QueueBuffer.getSocket(socketId)?.send(finalBuffer);
                QueueBuffer.queues.set(socketId, []);
            }   
            else {
                QueueBuffer.getSocket(socketId)?.send(buffers[0].getBuffer());
                QueueBuffer.queues.set(socketId, []);
            }            
        }
    }

    private static combineBuffers(buffers: ByteBuffer[]): ByteBuffer {
        let totalLength = buffers.reduce((sum, buffer) => sum + buffer.getBuffer().length, 0);
        totalLength += buffers.length * QueueBuffer.endRepeatByte + 1; 

        const combinedArray = new Uint8Array(totalLength);
        let position = 0;

        combinedArray[position++] = ServerPacketType.Queue;

        buffers.forEach(buffer => {
            const buf = buffer.getBuffer();
            combinedArray.set(buf, position);
            position += buf.length;

            for(let i = 0; i < QueueBuffer.endRepeatByte; i++)
                combinedArray[position++] = QueueBuffer.endOfPacketByte;
        });

        return new ByteBuffer(combinedArray);
    }

    public static isDuplicatePacket(socketId: string, buffer: ByteBuffer): boolean {
        const recentPackets = QueueBuffer.queues.get(socketId) || [];
        const indexBuffer = recentPackets.map((buffer) => buffer.toHex());
        const bufferHex = buffer.toHex();
        return indexBuffer.includes(bufferHex);
    }

    public static tick(): void {
        QueueBuffer.queues.forEach((buffers, socketId) => {
            if (buffers.length > 0) 
                QueueBuffer.sendBuffers(socketId);
        });
    }
}

setInterval(() => QueueBuffer.tick(), Maps.deltaTime * 1000);