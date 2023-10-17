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
}
