import { useState } from 'react';
import { useUser } from '../lib/context/user';
import { Icon } from '@iconify/react';

export function Login() {
  const user = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='min-h-screen flex'>
      {/* Left Column - Login Form */}
      <div className='flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-md w-full space-y-8'>
          {/* Logo for mobile */}
          <div className='text-center md:hidden'>
            <Icon
              icon='mingcute:idea-fill'
              className='mx-auto h-12 w-12 text-blue-600'
            />
            <h2 className='mt-2 text-2xl font-bold text-gray-900'>
              Ideatracker
            </h2>
          </div>

          <div>
            <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
              Welcome back
            </h2>
            <p className='mt-2 text-sm text-gray-600'>
              Please sign in to your account or create a new one
            </p>
          </div>

          <form className='mt-8 space-y-6'>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email address
                </label>
                <div className='mt-1 relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Icon
                      icon='mingcute:mail-line'
                      className='h-5 w-5 text-gray-400'
                    />
                  </div>
                  <input
                    id='email'
                    type='email'
                    placeholder='you@example.com'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className='pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 rounded-md border border-gray-300 px-3 py-2'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1 relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Icon
                      icon='mingcute:lock-line'
                      className='h-5 w-5 text-gray-400'
                    />
                  </div>
                  <input
                    id='password'
                    type='password'
                    placeholder='••••••••'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className='pl-10 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 rounded-md border border-gray-300 px-3 py-2'
                  />
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <button
                type='button'
                onClick={() => user.login(email, password)}
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Sign in
              </button>

              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>
                    Or create an account
                  </span>
                </div>
              </div>

              <button
                type='button'
                onClick={() => user.register(email, password)}
                className='w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column - Brand */}
      <div className='hidden md:flex md:flex-1 bg-blue-600'>
        <div className='flex-1 flex flex-col justify-center items-center text-white px-8'>
          <Icon
            icon='mingcute:idea-fill'
            className='h-20 w-20 text-white mb-8'
          />
          <h1 className='text-4xl font-bold mb-4'>Ideatracker</h1>
          <p className='text-xl text-blue-100 text-center max-w-md'>
            Capture, organize, and share your ideas with the world. Start your
            journey today.
          </p>
        </div>
      </div>
    </div>
  );
}
