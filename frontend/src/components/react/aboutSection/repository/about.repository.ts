import type { IAboutEntities } from "../interface/interface";

export interface IAboutRepository {
    getAboutData(): Promise<IAboutEntities[]>;
}

export class AboutApiRepository implements IAboutRepository {
    async getAboutData(): Promise<IAboutEntities[]> {
        try {
            const response = await fetch('http://localhost:3000/about')

            if(!response) {
                throw new Error(`La requête a échoué avec le statut ${response}`);
            }
            const data = await response.json();
            return data as IAboutEntities[]
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des données de l'API : ${error}`)
        }
    }
}