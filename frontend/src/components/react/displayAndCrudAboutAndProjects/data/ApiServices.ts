import type { IProject } from "../domain/models/interface";

export class ApiService<T> {
  async fetchData(url: string): Promise<T> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`La requête a échoué avec le statut ${response.status}`);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des données: ${error}`);
    }
  }

  async fetchById(url: string, id: string): Promise<T> {
    try {
      const response = await fetch(`${url}/${id}`);
      if(!response){
        throw new Error(`La requête a échoué avec le statut ${response}`);
      }
      const data = response.json();
      return data as T;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des données: ${error}`)
    }
  }

  async create(url: string, data: T, token: string) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            console.error('Problème lors de la création :', response.status, response.statusText);
        } else {
            const responseData = await response.json();
            return responseData;
        }
    } catch (error) {
        console.error('Une erreur s\'est produite pendant la requête :', error);
    }
  }

  async update(url: string, token: string, data: T) {
    try {
      console.log('Making PUT request to:', url);
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('La requête de mise à jour a échoué.');
      }
  
      const result = await response.json()
      return result
    } catch (error) {
      console.error("Une erreur s'est produite pendant la requête :", error);
      throw error;
    }
  }

  async delete(url: string, token: string): Promise<void> {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('La requête de suppression a échoué.');
      }

      return;
    } catch (error) {
      console.error("Une erreur s'est produite pendant la requête :", error);
      throw error;
    }
  }
  
}
