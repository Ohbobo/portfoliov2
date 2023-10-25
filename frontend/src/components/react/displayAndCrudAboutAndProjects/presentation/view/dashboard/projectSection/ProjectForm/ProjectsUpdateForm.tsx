import React, { useState } from 'react';
import { ApiService } from '../../../../../data/ApiServices';
import { API_ROUTES } from '../../../../../data/ApiRoutes';
import type { IProject } from '../../../../../domain/models/interface';

interface Tag {
    id: string
    name: string;
  }

  export const ProjectsUpdateForm = ({ refreshData, projectData }: {
    refreshData: () => void;
    projectData: IProject | null;
}) => {
    const [title, setTitle] = useState(projectData?.title || '');
    const [description, setDescription] = useState(projectData?.description || '');
    const [link, setLink] = useState(projectData?.link || '');
    const [issue, setIssue] = useState(projectData?.issue || '');
    const [resolution, setResolution] = useState(projectData?.resolution || '');
    const [tags, setTags] = useState<string[]>(
        projectData?.tags.map((tag) => tag.name) || ['']
    );

    const token = sessionStorage.getItem('token');
    const [data, setData] = useState<any>(null);

    const apiService = new ApiService<IProject>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newTags: Tag[] = tags.map((tag) => ({ name: tag.trim(), id: tag }));

        const updatedProject: IProject = {
            title: title,
            tags: newTags,
            description: description,
            issue: issue,
            resolution: resolution,
            link: link,
        };

        try {
            if (token && projectData) {
                const updatedData = await apiService.update(
                    `${API_ROUTES.GET_PROJECTS}/${projectData._id}`,
                    token,
                    updatedProject
                );
                setData(updatedData);
                refreshData();
            } else {
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

    if (!projectData) {
        return <div>Loading...</div>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-6 border rounded-lg bg-white"
        >
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre"
                className="block w-full px-4 py-2 mb-4 border rounded-md"
            />
            <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Lien"
                className="block w-full px-4 py-2 mb-4 border rounded-md"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="block w-full px-4 py-2 mb-4 border rounded-md"
            ></textarea>
            <input
                type="text"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="Problématiques"
                className="block w-full px-4 py-2 mb-4 border rounded-md"
            />
            <input
                type="text"
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                placeholder="Résolution"
                className="block w-full px-4 py-2 mb-4 border rounded-md"
            />
            {tags.map((tag, index) => (
                <div key={index} className="flex gap-2">
                    <input
                        type="text"
                        value={tag}
                        onChange={(e) => handleTagChange(index, e.target.value)}
                        placeholder="Tag"
                        className="block w-full px-4 py-2 mb-4 border rounded-md"
                    />
                    <button
                        type="button"
                        onClick={handleAddTag}
                        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-4 mb-4 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                        +
                    </button>
                </div>
            ))}

            <button
                type="submit"
                className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            >
                Modifier
            </button>
        </form>
    );
};
