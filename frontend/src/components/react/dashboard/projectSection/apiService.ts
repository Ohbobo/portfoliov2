import type { IProject } from "../../displayAllCards/interface/interface";

export class ApiAdminService<T> {

  async create(url: string, newProject: IProject) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProject),
        });

        if (!response.ok) {
            console.error('Problème lors de la création :', response.status, response.statusText);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Une erreur s\'est produite pendant la requête :', error);
       
    }
  }

    async delete(url: string){}

}