import React from 'react'
import { API_ROUTES } from '../../../../data/ApiRoutes'
import { UseDataFetching } from '../../../customHook/UseDataFetching'
import type { IProject } from '../../../../domain/models/interface'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectCards() {
    const { data, loading, error } = UseDataFetching<IProject[]>(API_ROUTES.GET_PROJECTS)

    if (loading) {
        return <p className='text-slate-300 font-semibold'>Chargement en cours...</p>;
      }
    
      if (error) {
        const errorMessage = error.toString();
        return <p className='text-slate-300 font-semibold'>Une erreur s'est produite : {errorMessage}</p>;
      }

  return (
    <div className='flex gap-4 sm:flex-col sm:items-center'>
        {data?.map(card => (
            <ProjectCard key={card.id} title={card.title} description={card.description} tags={card.tags}/>
        ))}
    </div>
  )
}