import React from 'react'
import { Icon } from '@iconify/react';

interface Props {
  title: string;
  description: string;
  link: string;
  issue: string;
  resolution: string;
  tags: {
    id: string;
    name: string;
  }[];
}

export default function ProjectCard({ title, description, tags , link, issue, resolution }: Props) {

  return (
    <article className="w-full hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="bg-gray-700 flex flex-col justify-between h-96 rounded-lg hover:bg-gray-800 p-4 !pt-10 sm:p-6">
        <div className='flex items-center justify-between'>
          <h3 className="mt-0.5 text-xl sm:text-2xl font-medium text-gray-300">
              {title}
          </h3>
          <a href={link} className='flex gap-1 text-sm sm:text-base text-gray-300 items-center cursor-pointer hover:underline'>
           Voir le projet
            <Icon icon="mdi:link-variant" className='text-xl text-gray-300' />
          </a>
        </div>
          <h4 className="mt-3 text-base font-base text-gray-300">
              {description}
          </h4>
          <div className='flex gap-1 flex-wrap mt-2 flex-col'>
            <p className='text-gray-300 underline'>Problématiques:</p>
            <p className='text-gray-300'>{issue}</p>
          </div>
          <div className='flex gap-1 flex-wrap mt-2'>
            <p className='text-gray-300 underline'>Résolution:</p>
            <p className='text-gray-300'>{resolution}</p>
          </div>
        <div className="mt-4 flex flex-wrap gap-1">
            {tags.map(tag => (
              <span key={tag.id} className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                {tag.name}
              </span>
            ))}
        </div>
      </div>
    </article>
  )
}
