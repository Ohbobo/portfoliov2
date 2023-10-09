import React from 'react'
import UseApiData from './customHook/UseDataFetching';
import { API_ROUTES } from '../localData/apiRoutes'
import type { IAbout } from './interface/interface';

export default function About() {
  const { data, loading, error } = UseApiData<IAbout[]>(`${API_ROUTES.GET_ABOUT}`);

  console.log("Data:", data);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Une erreur s'est produite : {error.message}</p>;
  }

  return (
    <section>
      <h2 className="text-slate-300 font-semibold">A propos</h2>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </section>
  )
}
