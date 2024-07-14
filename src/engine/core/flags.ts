export enum EntityStates {
    None = 0,
    Stunned = 1 << 1,
    Dead = 1 << 2,
    Ally = 1 << 3,
    Enemy = 1 << 4,
    NegativeKarma = 1 << 5,
    Burning = 1 << 6,
    Bleeding = 1 << 7,
    Poisoned = 1 << 8,
    Party = 1 << 9,
    Guild = 1 << 10,
    Stealth = 1 << 11,
    Mounted = 1 << 12,
    Feared = 1 << 13,
    Invulnerable = 1 << 14,
    Warmode = 1 << 15,
    Frozen = 1 << 16,
    Untargettable = 1 << 17,
    Frenzy = 1 << 18,
    DuelZone = 1 << 19,
    SafeZone = 1 << 20,
    Admin = 1 << 21
}

export enum BuffDebuffStates {
    None = 0,
    HeavenlyProtection = 1 << 0,
    EchoOfTheDeath = 1 << 1,
    ShatteringImpact = 1 << 2,
    ShatteringImpactEffect = 1 << 3,
    ThunderAura = 1 << 4,
}

export enum ItemStates {
    None = 0,
    Blessed = 1 << 0,
    Insured = 1 << 1,
    Exceptional = 1 << 2,
    SpellChanneling = 1 << 3,
    Broken = 1 << 4
}

export class StateFlags {
    private flags: number;

    constructor(initialFlags: number = 0) {
        this.flags = initialFlags;
    }

    addFlag(flag: number): void {
        this.flags |= flag;
    }

    removeFlag(flag: number): void {
        this.flags &= ~flag;
    }

    hasFlag(flag: number): boolean {
        return (this.flags & flag) === flag;
    }

    dontHasFlag(flag: number): boolean {
        return !((this.flags & flag) === flag);
    }

    getCurrentFlags(): number {
        return this.flags;
    }
}