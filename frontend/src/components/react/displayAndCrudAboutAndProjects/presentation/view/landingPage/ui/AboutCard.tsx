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
        <article className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
            <ul>
                {technologies.map((el) => (
                    <li key={el.id} className="flex items-center gap-3 font-normal text-gray-700 dark:text-gray-400">
                        <Icon icon={el.icon} />
                        {el.name}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default AboutCard;
