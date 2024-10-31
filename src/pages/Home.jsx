import { useState } from 'react';
import { useUser } from '../lib/context/user';
import { useIdeas } from '../lib/context/ideas';
import { Link } from 'react-router-dom';

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto space-y-8'>
        {/* Show the submit form to logged in users. */}
        {user.current ? (
          <div className='bg-white shadow-md rounded-lg p-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Submit Idea
            </h2>
            <form className='space-y-4'>
              <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <textarea
                placeholder='Description'
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32'
              />
              <button
                type='button'
                onClick={() =>
                  ideas.add({ userId: user.current.$id, title, description })
                }
                className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors'
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <section className='bg-white shadow-md rounded-lg p-6 text-center'>
            <p className='text-gray-600'>Please login to submit an idea.</p>
          </section>
        )}

        <section className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            Latest Ideas
          </h2>
          <ul className='space-y-4'>
            {ideas.current.map((idea) => (
              <li
                key={idea.$id}
                className='border-b pb-4 last:border-b-0 last:pb-0'
              >
                <strong className='text-lg font-semibold text-gray-800'>
                  {idea.title}
                </strong>
                <p className='text-gray-600 mt-2'>{idea.description}</p>
                {/* Show the remove button to idea owner. */}
                {user.current && user.current.$id === idea.userId && (
                  <button
                    type='button'
                    onClick={() => ideas.remove(idea.$id)}
                    className='mt-2 text-red-600 hover:text-red-800 transition-colors'
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>

        {user.current && (
          <div className='text-center'>
            <button
              type='button'
              onClick={user.logout}
              className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors'
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
