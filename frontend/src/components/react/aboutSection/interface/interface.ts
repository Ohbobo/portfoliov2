export interface IAboutEntities {
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