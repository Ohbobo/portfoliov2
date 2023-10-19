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
    <form onSubmit={handleSubmit} className='max-w-xl mx-auto p-6 border rounded-lg'>
      <div>
        <input 
        className='block w-full px-4 py-2 mb-4 border rounded-md' 
        type="text" 
        value={title} 
        placeholder="Titre"
        onChange={e => setTitle(e.target.value)} required />
      </div>
      {technologies.map((tech, index) => (
        <div key={index}>
          <input
            className='block w-full px-4 py-2 mb-4 border rounded-md'
            type="text"
            value={tech.name}
            placeholder='Nom de la technologie'
            onChange={e => handleTechNameChange(index, e.target.value)}
            required
          />
          <div className='flex gap-2'>
          <input
            type="text"
            placeholder='icone de la technologie'
            className='block w-full px-4 py-2 mb-4 border rounded-md'
            value={tech.icon}
            onChange={e => handleTechIconChange(index, e.target.value)}
            required
          />
          <button 
          type="button" 
          onClick={handleAddTechnology}
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-4 mb-4 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            +
          </button>
          </div>
        </div>
      ))}
      <button 
      type="submit"
      className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      >
        Ajouter un skill
      </button>
    </form>
  );
};
