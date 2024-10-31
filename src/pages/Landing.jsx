// LandingPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className='w-full max-w-3xl px-6 md:px-0'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-4xl font-bold'>drawer.</h1>
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div className='bg-gray-100 dark:bg-gray-700 rounded-md p-8 shadow-md'>
          <h2 className='text-2xl font-bold mb-4'>
            requested by the community, built for the community.
          </h2>
          <Link
            to='/ideas'
            className={`block text-center px-4 py-2 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            slide open
          </Link>
        </div>
      </div>
      <div className='absolute inset-0 pointer-events-none'>
        <svg
          className={`w-full h-full transition-colors duration-300 ${
            isDarkMode ? 'fill-gray-800' : 'fill-white'
          }`}
          viewBox='0 0 400 400'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <rect x='0' y='0' width='50' height='50' />
            <rect x='50' y='0' width='50' height='50' />
            <rect x='100' y='0' width='50' height='50' />
            <rect x='150' y='0' width='50' height='50' />
            <rect x='200' y='0' width='50' height='50' />
            <rect x='250' y='0' width='50' height='50' />
            <rect x='300' y='0' width='50' height='50' />
            <rect x='350' y='0' width='50' height='50' />
            <rect x='0' y='50' width='50' height='50' />
            <rect x='50' y='50' width='50' height='50' />
            <rect x='100' y='50' width='50' height='50' />
            <rect x='150' y='50' width='50' height='50' />
            <rect x='200' y='50' width='50' height='50' />
            <rect x='250' y='50' width='50' height='50' />
            <rect x='300' y='50' width='50' height='50' />
            <rect x='350' y='50' width='50' height='50' />
            {/* Repeat the pattern for the remaining 48 squares */}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
