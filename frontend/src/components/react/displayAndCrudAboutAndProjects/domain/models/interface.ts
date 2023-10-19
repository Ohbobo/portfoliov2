export interface IAbout {
    _id?: string; 
    title: string;
    technologies: 
        {
          id: string,
          name: string,
          icon: string,
        }[]
      
}

export interface IProject {
    _id?: string; 
    title: string;
    description: string;
    link: string;
    tags: {
      id: string,
      name: string,
    }[];
}