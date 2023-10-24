import React from 'react'
import './navigation.css'

export const Navigation = () => {

  return (
    <header className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Voir le site
                </a>
              </div>
            </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
