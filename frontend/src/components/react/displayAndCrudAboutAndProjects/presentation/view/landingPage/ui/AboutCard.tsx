import { Icon } from '@iconify/react';

interface Props  {
    title: string;
    technologies: {
        id: string,
        name: string,
        icon: string,
    }[];
}
const AboutCard = ({ title, technologies }: Props) => {

    return(
        <article className="w-full block p-6 bg-gray-700 rounded-lg hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h3 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-1xl">{title}</h3>
            <ul className='flex flex-col gap-1'>
                {technologies.map((el) => (
                    <li key={el.id} className="flex items-center gap-1 mt-1 font-semibold text-gray-300 dark:text-gray-400">
                        <Icon icon={el.icon} className='text-2xl'/>
                        {el.name}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default AboutCard;
