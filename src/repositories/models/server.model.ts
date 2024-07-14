import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export interface IServerGame {
    name: string;
    ownerId: string;
    apiUrl: string;
    gameServer: string;
    pingIP: string;
    privateServer: boolean;
    type: string;
    status: string;
    rate: string;
}

@Schema({ timestamps: true, collection: "Servers" })
export class ServerGameDocument extends Document implements IServerGame {
    @Prop({ unique: true, index: true })
    name: string;

    @Prop({ index:true, type: String })
    ownerId: string;

    @Prop({ index:true, type: String })
    apiUrl: string;

    @Prop()
    gameServer: string;

    @Prop()
    pingIP: string;

    @Prop({ default: false })
    privateServer: boolean;

    @Prop()
    type: string;

    @Prop()
    status: string;

    @Prop()
    rate: string;
}

export const ServerGameSchema = SchemaFactory.createForClass(ServerGameDocument);
export default ServerGameSchema;