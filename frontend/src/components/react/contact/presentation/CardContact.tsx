import React from 'react'

export const CardContact = () => {
  return (
    
    <div className="flex items-center p-3 bg-white rounded-md shadow-lg relative">
      <div className="flex p-2 gap-1 absolute top-0 left-1">
        <div className="">
          <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
  <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
    <img src="/photo_de_profil.JPG" alt="photo de profil" className='object-cover flex justify-center items-center w-14 h-14 rounded-full shadow-md' />
  </section>

  <section className="block border-l border-gray-300 m-3">
    <div className="pl-3">
      <h3 className="text-gray-600 font-semibold text-sm">Théo Agen</h3>
      <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">Developpeur web</h3>
      <div className='flex flex-col gap-1'>
        <p className='text-gray-600 font-semibold text-sm'>Formation Developpeur web chez openclassroom</p>
        <p className='text-gray-600 font-semibold text-sm'>agentheo0@gmail.com</p>
        <p className='text-gray-600 text-sm'>0632393340</p>
      </div>
    </div>
    <div className="flex gap-3 pt-2 pl-3">
        <a href="https://github.com/Ohbobo">
        <svg stroke="currentColor" viewBox="0 0 24 24" className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
            </svg>
        </a>
    </div>
  </section>
</div>
  )
}
