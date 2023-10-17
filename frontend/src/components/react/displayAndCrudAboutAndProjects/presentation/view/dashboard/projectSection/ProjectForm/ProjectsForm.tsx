import React, { useState } from 'react';
import { ApiService } from '../../../../../data/ApiServices';
import { API_ROUTES } from '../../../../../data/ApiRoutes';
import type { IProject } from '../../../../../domain/models/interface';

interface Tag {
  id: string
  name: string;
}

export const ProjectsForm = ({ refreshData }: {refreshData: () => void}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>(['']);

  const token = sessionStorage.getItem('token');

  const apiService = new ApiService<IProject>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTags: Tag[] = tags.map(tag => ({ name: tag.trim(), id: tag }));

    const newProject: IProject = {
      title: title,
      tags: newTags,
      description: description,
    };

    try {
      if(token){
        await apiService.create(API_ROUTES.GET_PROJECTS, newProject, token);
        refreshData();
      }
      else {
        console.log("Erreur, vous ne pouvez pas faire cela");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTag = () => {
    setTags([...tags, '']);
  };

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 border rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
        className="block w-full px-4 py-2 mb-4 border rounded-md"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="block w-full px-4 py-2 mb-4 border rounded-md"
      ></textarea>
      {tags.map((tag, index) => (
        <div key={index} className='flex gap-2'>
          <input
            type="text"
            value={tag}
            onChange={(e) => handleTagChange(index, e.target.value)}
            placeholder="Tag"
            className="block w-full px-4 py-2 mb-4 border rounded-md"
            required
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-4 mb-4 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            +
          </button>
        </div>
      ))}

      <button
        type="submit"
        className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      >
        Ajouter
      </button>
    </form>
  );
};
