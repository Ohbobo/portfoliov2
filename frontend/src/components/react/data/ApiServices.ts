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

    async create(url: string) {
      
    }
}