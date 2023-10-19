import React from 'react'
import { Icon } from '@iconify/react';

interface Props {
  title: string;
  description: string;
  link: string
  tags: {
    id: string;
    name: string;
  }[];
}

export default function ProjectCard({ title, description, tags , link }: Props) {

  return (
    <article className="w-full hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="bg-gray-700 rounded-lg hover:bg-gray-800 p-4 !pt-10 sm:p-6">
        <div className='flex items-center justify-between'>
          <h3 className="mt-0.5 text-2xl font-medium text-gray-300">
              {title}
          </h3>
          <a href={link} className='flex gap-1 text-gray-300 items-center cursor-pointer'>
           Voir le projet
            <Icon icon="mdi:link-variant" className='text-xl text-gray-300' />
          </a>
        </div>
          <h4 className="mt-3 text-lg font-medium text-gray-400">
              {description}
          </h4>
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
