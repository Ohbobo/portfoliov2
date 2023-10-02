export interface IAboutCard {
    id: string;
    title: string;
    technologies: Technology[];
}

export interface Technology {
    id: string;
    name: string;
    icon: string;
}