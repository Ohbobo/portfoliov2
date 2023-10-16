import React from 'react'
import { Button } from '../ui/Button'
import { API_ROUTES } from '../../data/ApiRoutes'
import { UseDataFetching } from '../../displayAllCards/presentation/viewModel/UseDataFetching'
import type { IProject } from '../../displayAllCards/interface/interface'

export const ProjectSection = () => {
  const { data, loading, error } = UseDataFetching<IProject[]>(API_ROUTES.GET_PROJECTS)

  if (loading) {
    return (
      <section>
      <h2>Mes Projets</h2>
      <p className='text-slate-300 font-semibold'>Chargement en cours...</p>
      </section>
    ) 
  }

  if (error) {
    const errorMessage = error.toString();
    return (
      <section>
        <h2>Mes Projets</h2>
        <p className='text-slate-300 font-semibold'>Une erreur s'est produite : {errorMessage}</p>;
      </section>
    )
  }

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className='font-bold text-2xl text-gray-700'>Mes projets</h2>
        <Button text='Ajouter un projet' />
      </div>

      <div>
        {data?.map(item => (
          <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Modifier
                </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
