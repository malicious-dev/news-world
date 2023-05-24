import React from 'react'

const search = () => {
  return (
    <div className='container mx-auto p-4'>

      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text text-black border border-black rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-black dark:border-black dark:placeholder-white dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Search News..." required />
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Search</button>
        </div>
      </form>

    </div>
  )
}

export default search