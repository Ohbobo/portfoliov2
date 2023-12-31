import type { IAbout } from '../../../../domain/models/interface';
import { API_ROUTES } from '../../../../data/ApiRoutes';
import { UseDataFetching } from '../../../customHook/UseDataFetching';
import AboutCard from '../ui/AboutCard';

export default function AboutCards() {
  const { data, loading, error } = UseDataFetching<IAbout[]>(API_ROUTES.GET_ABOUT)

  if (loading) {
    return <p className='text-slate-300 font-semibold'>Chargement en cours...</p>;
  }

  if (error) {
    const errorMessage = error.toString();
    return <p className='text-slate-300 font-semibold'>Une erreur s'est produite : {errorMessage}</p>;
  }

  return (
    <div className="flex flex-col p-5 md:flex-row gap-2">
      {data?.map((card) => (
        <AboutCard key={card._id} title={card.title} technologies={card.technologies} />
      ))}
    </div>
  );
  
}