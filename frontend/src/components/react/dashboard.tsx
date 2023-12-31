import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation } from './displayAndCrudAboutAndProjects/presentation/view/dashboard/ui/navigation/Navigation';
import { AboutSection } from './displayAndCrudAboutAndProjects/presentation/view/dashboard/aboutSection/About';
import { ProjectSection } from './displayAndCrudAboutAndProjects/presentation/view/dashboard/projectSection/Projects';

export const DashboardTest = () => {
    const [login, setLogin] = useState(!!sessionStorage.getItem('token'));

    useEffect(() => {
        const checkToken = () => {
            const token = sessionStorage.getItem('token');
            setLogin(!!token);
        };
        checkToken();
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.href = "/";
    }

    if(!login){
        return (
            <div>
                <p>Veuillez vous connecter pour accéder au tableau de bord.</p>
                <a href="/login">Se connecter</a>
            </div>
        )
    }

  return (
    <div>
        <Navigation />
        <AboutSection />
        <ProjectSection />
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded mt-9 m-3" onClick={handleLogout}>Deconnexion</button>
    </div>
    
  )
}


