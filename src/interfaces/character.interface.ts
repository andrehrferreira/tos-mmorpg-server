export interface ICharacterCreatePayload {
    name: string;
    payload: string;
}

export interface ICharacterPayloadInfo {
    Prelude: number;
    Race: string;
    Body: string;
    Head: string;
    Hair: number;
    HairColorRoot: string;
    HairColorEnd: string;
    HairColorHightlight: string;
    Beard: number;
    BeardRootColor: string;
    BeardEndColor: string;
    Genitalia: number;
    Freckles: number;
    Vitiligo: number;
    SkinColor: string;
    SkinSaturation: number;
    SkinBrightness: number;
    FacialArt: number;
    FacialArtColor: string;
    EyesShadow: number;
    EyesShadowColor: string;
    EyeslinerColor: string;
    Eyesliner: number;
    Lip: number;
    LipBrightness: number;
    LipColor: string;
    Heterochromia: boolean;
    LeftEyeColor: string;
    RightEyeColor: string;
    EyesBallColor: string;
    Stats: ICharacterStatus;
    Skills: Record<string, ICharacterSkill>;
}

export interface ICharacterStatus {
    Str: number,
    Dex: number,
    Int: number,
    Vig: number,
    Agi: number,
    Luc: number,
}

export interface ICharacterSkill {
    Index: number;
    Cap: number;
    Value: number;
    Progress: number;
}

export interface ICharacter {
    account: string;
    name: string;
    hashtag: string;
    visual: string;    
    str: number;
    dex: number;
    int: number;
    vig: number;
    agi: number;
    luc: number;
    skills: Record<string, ICharacterSkill> | string
}

export interface IEquipament {
    ItemName: string;
    ItemRef: string;
}

export interface ICheckHit {
    entityId: string;
    actorId: string;
    x: number;
    y: number;
    z: number;
    action: number
}

export interface ICheckHitAutoAttack {
    entityId: string;
    actorId: string;
    x: number;
    y: number;
    z: number;
}

export interface ISkillValue {
    value: number,
    cap: number,
    experience: number
}

export interface ILevelExperience {
    level: number;
    experience: number;
}