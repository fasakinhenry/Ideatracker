import React, { useState } from 'react';

export function Landing() {
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
      <header className='w-full py-4 bg-blue-500 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-3xl font-bold'>Idea Tracker</h1>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <a href='#' className='hover:underline'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={`ml-4 px-4 py-2 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>
      <main className='flex-grow flex flex-col items-center justify-center'>
        <h2 className='text-5xl font-bold mb-4'>Welcome to Idea Tracker</h2>
        <p className='text-xl mb-8 text-center'>
          Track your ideas and collaborate with your team to bring them to life.
        </p>
        <a
          href='/get-started'
          className={`px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-300 ${
            isDarkMode
              ? 'bg-blue-600 hover:bg-blue-500 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Get Started
        </a>
      </main>
    </div>
  );
}
