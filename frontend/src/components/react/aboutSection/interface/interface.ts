export interface IAboutEntities {
    id: string; 
    title: string;
    technologies: [
        {
          name: string,
          icon: string,
        }
      ]
}