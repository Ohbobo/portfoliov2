import type { IAbout } from '../../interface/interface';
import { API_ROUTES } from '../../../data/ApiRoutes';
import { UseDataFetching } from '../viewModel/UseDataFetching';
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
    <div>
      {data?.map(card => (
        <AboutCard key={card.id} title={card.title} technologies={card.technologies}/>
      ))}
    </div>
  )
}
