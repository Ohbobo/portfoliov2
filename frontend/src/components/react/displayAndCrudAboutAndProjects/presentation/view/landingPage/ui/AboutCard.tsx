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
        <article className="w-1/4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h3 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-1xl">{title}</h3>
            <ul>
                {technologies.map((el) => (
                    <li key={el.id} className="flex items-center gap-1 mt-1 font-normal text-gray-700 dark:text-gray-400">
                        <Icon icon={el.icon} />
                        {el.name}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default AboutCard;
