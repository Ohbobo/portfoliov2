import React from 'react'
import { useState } from 'react';
import { Button } from '../ui/Button'
import { API_ROUTES } from '../../../../data/ApiRoutes'
import { UseDataFetching } from '../../../customHook/UseDataFetching'
import type { IProject } from '../../../../domain/models/interface'
import { Tag } from '../ui/Tag'
import { ProjectsUpdateForm } from './ProjectForm/ProjectsUpdateForm';
import { ApiService } from '../../../../data/ApiServices';

export const ProjectSection = () => {
  const { data, loading, error, refreshData } = UseDataFetching<IProject[]>(API_ROUTES.GET_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const [showModal, setShowModal] = useState(false);

  const apiService = new ApiService<IProject>();
  

  const handleEditClick = async (id: string | undefined) => {
    if(id) {
      try {
        const response = await fetch(`${API_ROUTES.GET_PROJECTS}/${id}`);
        const projectData = await response.json();
        console.log(projectData);
        setSelectedProject(projectData)
        setShowModal(true);
        refreshData();
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
      }
    } else {
      console.error("L'ID du projet est indéfini");
    }
  };

  const handleDelete = async (id: string | undefined) => {
    const token = sessionStorage.getItem('token');
    
    if (id && token) {
      try {
        await apiService.delete(`${API_ROUTES.GET_PROJECTS}/${id}`, token);
        refreshData();
      } catch (error) {
        console.error("Une erreur s'est produite lors de la suppression :", error);
      }
    } else {
      console.error("L'ID du projet est indéfini ou le jeton d'authentification est manquant.");
    }
  };
  

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
        <Button text='Ajouter un projet' refreshData={refreshData} />
      </div>

      <div className='flex justify-between items-center gap-4'>
        {data?.map(item => (
          <div key={item.id} className="w-2/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h3>
                <p className='my-2'>{item.description}</p>
                <div className='flex gap-2'>
                  {item.tags.map(tag => (
                    <Tag key={tag.id} tag={tag.name} />
                  ))}
                </div>
                <span className="inline-flex mt-2 overflow-hidden rounded-md border bg-white shadow-sm">
                  <button
                    className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Edit Product"
                    onClick={() => handleEditClick(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>

                  <button
                    className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Delete Product"
                    onClick={() => handleDelete(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </span>
            </div>
          </div>
        ))}
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Modification</h3>
            <ProjectsUpdateForm refreshData={refreshData} projectData={selectedProject} />
            <button onClick={() => setShowModal(false)}>Fermer</button>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
