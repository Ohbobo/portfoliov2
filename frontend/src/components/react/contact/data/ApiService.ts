import { API_URL } from "../../displayAndCrudAboutAndProjects/data/ApiRoutes";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export class ContactApiService {
    async sendMail(formData: ContactFormData) {
        try {
            const response = await fetch(`${API_URL}/mail/send?email=${formData.email}`, {
            method: 'POST',
            mode:'no-cors',
            body: JSON.stringify(formData),
            });

            if(!response.ok){
                throw new Error(`La requête a échoué avec le statut ${response.status}`);
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw new Error(`Erreur lors de la récupération des données: ${error}`);
        }
    }
}