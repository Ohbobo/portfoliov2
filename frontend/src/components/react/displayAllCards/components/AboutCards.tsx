import type { IAbout } from '../interface/interface';
import { API_ROUTES } from '../../../../localData/apiRoutes';
import { useDataFetching } from '../customHook/UseDataFetching';

export default function getAboutCards() {
  const { data, loading, error } = useDataFetching<IAbout[]>(API_ROUTES.GET_ABOUT)

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
        <p key={card.id}>{card.title}</p>
      ))}
    </div>
  )
}
