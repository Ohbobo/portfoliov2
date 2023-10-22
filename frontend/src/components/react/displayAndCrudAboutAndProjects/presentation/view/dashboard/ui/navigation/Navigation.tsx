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
    <header className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className='flex gap-5'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href={link.path}>{link.name}</a>
                </li>
              ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Voir le site
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
