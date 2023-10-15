import React, { useState } from 'react';
import { API_ROUTES } from '../../../../../localData/apiRoutes';
import { ApiAdminService } from '../apiService';
import type { IProject } from '../../../displayAllCards/interface/interface';

interface Tag {
  id: string
  name: string;
}

export const ProjectsForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>(['']);

  const apiService = new ApiAdminService<IProject>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTags: Tag[] = tags.map(tag => ({ name: tag.trim(), id: tag }));

    const newProject: IProject = {
      title: title,
      tags: newTags,
      description: description,
    };

    try {
      await apiService.create(API_ROUTES.GET_PROJECTS, newProject);
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
        placeholder="Title"
        className="block w-full px-4 py-2 mb-4 border rounded-md"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="block w-full px-4 py-2 mb-4 border rounded-md"
      ></textarea>
      {tags.map((tag, index) => (
        <div key={index}>
          <input
            type="text"
            value={tag}
            onChange={(e) => handleTagChange(index, e.target.value)}
            placeholder="Tag"
            className="block w-full px-4 py-2 mb-4 border rounded-md"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddTag}
        className="block w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md"
      >
        +
      </button>
      <button
        type="submit"
        className="block w-full px-4 py-2 text-white bg-green-500 rounded-md"
      >
        Create Project
      </button>
    </form>
  );
};
