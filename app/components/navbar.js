"use client"
import React, { useState } from 'react'

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const category = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]

  return (
    //navbar USING TAILWIND
    <nav className="flex items-center justify-between flex-wrap bg-black p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">News World</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white transition duration-500 ease-in-out"
          onClick={ () => setIsOpen(!isOpen) }
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path
              d="M0 0h20v20H0V0zm2 2v16h16V2H2zm3 5h10v2H5V7zm0 4h10v2H5v-2zm0 4h10v2H5v-2z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto transition duration-500 ease-in-out"
        hidden={ isOpen }
      >
        <div className="text-sm lg:flex-grow"></div>
        <div>
          {
            category.map((item, index) => {
              return (
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-bold"
                  key={ index }
                  onClick={ () => setIsOpen(!isOpen) }
                >
                  { item }
                </a>
              )
            }
            )
          }


        </div>
      </div>
    </nav>
  )
}

export default navbar