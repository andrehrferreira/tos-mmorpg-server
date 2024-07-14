export interface IServer {
    _id: string;
    ownerId: string;
    name: string;
    apiUrl: string;
    gameServer: string;
    pingIP: string;
    privateServer: boolean;
    rate: string;
    status: string;
    type: string;
}