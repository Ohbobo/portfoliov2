import { useState, useEffect } from 'react';
import { ApiService } from '../../../data/ApiServices';

export function UseDataFetching<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const apiService = new ApiService<T>();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiService.fetchData(url);
        setData(result);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
