export interface ICreateItemPayload {
    AccountId: string;
    CharacterId: string;
    ContainerId: string;
    ItemName: string;
    SlotId: number;
    Amount: number;
}

export interface IMoveItemPayload {
    ItemName: string;
    ItemRef: string;
    Amount: number;
}

export interface IEquipPayload {
    ItemName: string;
    ItemRef: string;
}