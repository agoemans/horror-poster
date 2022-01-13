export interface iPoster {
    title: string;
    description: string;
    directorCredit: string;
    secondDescription: string;
    actors: string[];
    directedBy?: string;
    producedBy?: string;
}

export interface iAttribute {
    author: string;
    siteName: string;
    siteUrl: string;
    imageName: string;
    type: string;
}

export interface iActor {
    actors: string[];
}

export interface iTitle {
    title: string;
    directorCredit: string;
    titleFont: string;
    directorCreditFont: string;
}

export interface iFontStyles {
    title: string[];
    description: string[];
    directorCredit: string[];
    actors: string[];
}

export interface iNameInfo {
    firstName: string;
    surName: string;
}