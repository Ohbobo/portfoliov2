import React from 'react'
import { useState } from 'react';
import { Modal } from './Modal/Modal';
import { ProjectsForm } from '../projectSection/ProjectForm/ProjectsForm';
import { AboutForm } from '../aboutSection/AboutForm/AboutForm';

type Props = {
    text: string
    refreshData: () => void
}
export const Button = ({ text, refreshData }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [isProjectForm, setIsProjectForm] = useState(false);

    const handleShowModal = (isProject: boolean) => {
        setShowModal(true);
        setIsProjectForm(isProject);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
        setIsProjectForm(false);
      };

    return (
        <div className="m-4">
          <button 
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded" 
          onClick={() => handleShowModal(text ==='Ajouter un projet' ? true : false)}>
            {text}
          </button>
          <Modal show={showModal} handleClose={handleCloseModal}>
            <div className="text-center">
              <p>Formulaire d'ajout</p>
              {isProjectForm ? (
                <ProjectsForm refreshData={refreshData} />
                ): (
                  <AboutForm refreshData={refreshData} />
                )
              }
            </div>
          </Modal>
        </div>
      );
}
