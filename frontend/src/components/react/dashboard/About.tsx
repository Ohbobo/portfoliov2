import React from 'react'
import { API_ROUTES } from '../../../localData/apiRoutes';
import { UseDataFetching } from '../displayAllCards/presentation/viewModel/UseDataFetching';
import type { IAbout } from '../displayAllCards/interface/interface';
export const About = () => {
  const { data, loading, error } = UseDataFetching<IAbout[]>(API_ROUTES.GET_ABOUT)
  
  if (loading) {
    return (
      <section>
      <h2>Mes skills</h2>
      <p className='text-slate-300 font-semibold'>Chargement en cours...</p>
      </section>
    ) 
  }

  if (error) {
    const errorMessage = error.toString();
    return (
      <section>
        <h2>Mes skills</h2>
        <p className='text-slate-300 font-semibold'>Une erreur s'est produite : {errorMessage}</p>;
      </section>
    )
  }

  return (
    <section>
      <div>
        <h2>Mes skills</h2>
        <button>Ajouter</button>
      </div>
      <div>
        {data?.map(item => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </section>
  )
}
