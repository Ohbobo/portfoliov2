import React from 'react'

export const CardContactAbout = () => {
  return (
    <div className="flex items-center p-3 bg-white rounded-md shadow-lg relative">
        <section className="block border-gray-300 m-3">
            <div className="pl-3">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">Enthousiaste développeur web full stack,</h3>
            <div className='flex flex-col gap-2'>
                <p className='text-gray-600 font-semibold text-sm'>passionné par l'innovation technologique et la création d'expériences numériques captivantes.</p>
                <p className='text-gray-600 font-semibold text-sm'>Ayant suivi une formation approfondie de développeur web dans le domaine chez Openclassroom, je mets maintenant à votre disposition mes compétences dans le developpement web.</p>
                <p className='text-gray-600 font-semibold text-sm'>N'hésitez pas à me contacter via le formulaire pour discuter de votre prochain projet, partager une idée créative ou collaborer sur des initiatives passionnantes.</p>
            </div>
            </div>
        </section>
    </div>
  )
}
