import React from 'react'
import { Icon } from '@iconify/react';

interface Props {
  title: string;
  description: string;
  tags: {
    id: string;
    name: string;
  }[];
}

export default function ProjectCard({ title, description, tags }: Props) {

  return (
    <article className="w-1/3 sm:w-11/12 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="rounded-[10px] bg-white p-4 !pt-10 sm:p-6">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {title}
          </h3>
          <h4 className="mt-3 text-lg font-medium text-gray-600">
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
