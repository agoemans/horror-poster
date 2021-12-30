export interface iPoster {
    title: string;
    description: string;
    directorCredit: string;
    actors: string[];
}

export interface iAttribute {
    author: string;
    authorUrl: string;
    siteName: string;
    siteUrl: string;
    imageName: string;
}

export interface iActor {
    actors: string[];
}

export interface iDescription {
    description: string;
    descriptionFont: string;
}

export interface iTitle {
    title: string;
    directorCredit: string;
    titleFont: string;
    directorCreditFont: string;
}

export interface iDirectorCredit {
    directorCredit: string;
    directorCreditFont: string;
}

export interface iFontStyle {
    titleFont: string;
    descriptionFont: string;
    directorCreditFont: string;
    actorsFont: string;
}

export interface iFontStyles {
    title: string[];
    description: string[];
    directorCredit: string[];
    actors: string[];
}