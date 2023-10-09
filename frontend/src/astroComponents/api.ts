class ApiService {
    async fetchData<T>(url: string): Promise<T[]> {
        try {
            const response = await fetch(url)
            if(!response){
                throw new Error(`La requête a échoué : ${url}`)
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(`Erreur lors de la récuperation des données: ${error}`)
        }
    }
}

export default ApiService;