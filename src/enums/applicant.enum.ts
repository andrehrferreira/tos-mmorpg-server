export enum Applicant {
    NoScoped,
    Client,
    Patch,
    API
}

export const ApplicantByHeader = (agent: string) : Applicant => {
    switch(agent){
        case "X-Unreal-Engine": return Applicant.Client;
        case "X-API": return Applicant.API;
        case "X-Patch": return Applicant.Patch;
        default: Applicant.NoScoped;
    }
}