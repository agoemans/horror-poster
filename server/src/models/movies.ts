export interface MovieModel {
    title: string;
    description: string;
    directorCredit: string;
    extraDescription: string[];
    actors: string[];
    directedBy?: string;
    producedBy?: string;
}