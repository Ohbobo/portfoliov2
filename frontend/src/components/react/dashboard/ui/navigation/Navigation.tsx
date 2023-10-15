import React from 'react'
import './navigation.css'

export const Navigation = () => {

  const navLinks = [
    {
      name: "About",
      path: "#about-admin"
    },
    {
      name: "Projets",
      path: "#projects-admin"
    },
    {
      name: "Messagerie",
      path: "#messagerie-admin"
    },
  ]

  return (
    <header className='header-container'>
        <nav className='navbar-container'>
            <div className='navbar-left'>
              <h1 className='navbar-left__title'>Admin</h1>
            </div>
            <div className='navbar-right'>
              {navLinks.map((link, index) => (
                <a key={index} className='navbar-right__links' href={link.path}>{link.name}</a>
              ))}
            </div>
        </nav>
    </header>
  )
}
