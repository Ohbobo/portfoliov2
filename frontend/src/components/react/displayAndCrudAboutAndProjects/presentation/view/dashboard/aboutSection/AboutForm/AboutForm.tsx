import React, { useState } from 'react';
import { ApiService } from '../../../../../data/ApiServices';
import type { IAbout } from '../../../../../domain/models/interface';
import { API_ROUTES } from '../../../../../data/ApiRoutes';

export const AboutForm = ({ refreshData }: { refreshData: () => void }) => {
  const [title, setTitle] = useState('');
  const [technologies, setTechnologies] = useState<{ name: string; icon: string }[]>([
    { name: '', icon: '' },
  ]);

  const token = sessionStorage.getItem('token');

  const apiService = new ApiService<IAbout>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newAbout: IAbout = {
      title: title,
      technologies: technologies.map(tech => ({ name: tech.name.trim(), id: tech.name, icon: tech.icon.trim() })),
    };

    try {
      if (token) {
        await apiService.create(API_ROUTES.GET_ABOUT, newAbout, token);
        refreshData();
      } else {
        console.log('Erreur, vous ne pouvez pas faire cela');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTechNameChange = (index: number, value: string) => {
    const newTechnologies = [...technologies];
    newTechnologies[index].name = value;
    setTechnologies(newTechnologies);
  };

  const handleTechIconChange = (index: number, value: string) => {
    const newTechnologies = [...technologies];
    newTechnologies[index].icon = value;
    setTechnologies(newTechnologies);
  };

  const handleAddTechnology = () => {
    setTechnologies([...technologies, { name: '', icon: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      {technologies.map((tech, index) => (
        <div key={index}>
          <label>Nom de la technologie:</label>
          <input
            type="text"
            value={tech.name}
            onChange={e => handleTechNameChange(index, e.target.value)}
            required
          />
          <label>Icône de la technologie:</label>
          <input
            type="text"
            value={tech.icon}
            onChange={e => handleTechIconChange(index, e.target.value)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={handleAddTechnology}>
        Ajouter une technologie
      </button>
      <button type="submit">Ajouter</button>
    </form>
  );
};
