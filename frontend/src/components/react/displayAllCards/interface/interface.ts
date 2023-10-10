export interface IAbout {
    id: string; 
    title: string;
    technologies: [
        {
          name: string,
          icon: string,
        }
      ]
}

export interface IProject {
    id: string; 
    title: string;
}