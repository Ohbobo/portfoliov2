export interface IAbout {
    id: string; 
    title: string;
    technologies: [
        {
          id: string,
          name: string,
          icon: string,
        }
      ]
}

export interface IProject {
    id?: string; 
    title: string;
    description: string;
    tags: {
      id: string,
      name: string,
    }[];
}