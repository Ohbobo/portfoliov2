export interface IProjectCard {
    id: string;
    title: string;
    description: string;
    tags: ITags[];
}

export interface ITags {
    name: string
}