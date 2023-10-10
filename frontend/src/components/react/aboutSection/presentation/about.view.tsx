import React, { useEffect } from 'react'
import { AboutViewModel } from './about.viewModel'

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
          <p key={card.id}>{card.title}</p>
        ))}
      </div>
    )
}
