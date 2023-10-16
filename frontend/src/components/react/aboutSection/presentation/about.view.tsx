import React, { useEffect } from 'react'
import { AboutViewModel } from './about.viewModel'
import Card from '../../displayAndCrudAboutAndProjects/presentation/view/landingPage/ui/AboutCard';

export default function AboutView() {
    const { data, loading, error, fetchData } = AboutViewModel();

    useEffect(() => {
        fetchData();
    }, []);


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
          <Card key={card.id} title={card.title} technologies={card.technologies}/>
        ))}
      </div>
    )
}
