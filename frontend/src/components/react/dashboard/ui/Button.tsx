import React from 'react'
import { useState } from 'react';
import { Modal } from './Modal/Modal';
import { ProjectsForm } from '../projectSection/ProjectForm/ProjectsForm';

type Props = {
    text: string
}
export const Button = ({ text }: Props) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

    return (
        <div className="m-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleShowModal}>{text}</button>
          <Modal show={showModal} handleClose={handleCloseModal}>
            <div className="text-center">
              <p>Formulaire d'ajout</p>
              <ProjectsForm />
            </div>
          </Modal>
        </div>
      );
}
