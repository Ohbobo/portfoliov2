import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation } from './ui/navigation/Navigation';
import { ProjectSection } from './projectSection/Projects';

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
        <ProjectSection />
        <button onClick={handleLogout}>Deconnexion</button>
    </div>
    
  )
}


