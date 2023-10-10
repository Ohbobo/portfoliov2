import type { IAboutEntities } from "../interface/interface";
import { AboutApiRepository } from "../repository/about.repository";
import { useState } from "react";

export function AboutViewModel() {
    const [data, setData] = useState<IAboutEntities[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const apiService = new AboutApiRepository();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await apiService.getAboutData();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(`Erreur lors de la récupération des données de l'API : ${error}`);
            setLoading(false);
        }
    }

    return { data, loading, error, fetchData };
}