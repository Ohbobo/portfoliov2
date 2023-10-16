import React from 'react'
import { API_ROUTES } from '../../../../data/ApiRoutes';
import { Button } from '../../../../../dashboard/ui/Button';
import { UseDataFetching } from '../../../customHook/UseDataFetching';
import type { IAbout } from '../../../../domain/models/interface';
export const AboutSection = () => {
  const { data, loading, error, refreshData } = UseDataFetching<IAbout[]>(API_ROUTES.GET_ABOUT)
  
  if (loading) {
    return (
      <section>
      <h2 className='font-bold text-2xl text-gray-700'>Mes skills</h2>
      <p className='text-slate-300 font-semibold'>Chargement en cours...</p>
      </section>
    ) 
  }

  if (error) {
    const errorMessage = error.toString();
    return (
      <section>
        <h2 className='font-bold text-2xl text-gray-700'>Mes skills</h2>
        <p className='text-slate-300 font-semibold'>Une erreur s'est produite : {errorMessage}</p>;
      </section>
    )
  }

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className='font-bold text-2xl text-gray-700'>Mes skills</h2>
        <Button text='Ajouter un projet' refreshData={refreshData}/>
      </div>
      <p>Liste des icons: <a href="https://icones.js.org/">Ici</a></p>
      <div>
        {data?.map(item => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </section>
  )
}
