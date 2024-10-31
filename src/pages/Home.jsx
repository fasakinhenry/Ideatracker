import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useUser } from '../lib/context/user';
import { useIdeas } from '../lib/context/ideas';

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [activeSection, setActiveSection] = useState('ideas');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sidebarItems = [
    {
      icon: 'mingcute:notes-line',
      name: 'Notes',
      section: 'ideas',
    },
    {
      icon: 'mingcute:reminder-line',
      name: 'Reminders',
      section: 'reminders',
    },
    {
      icon: 'mingcute:label-line',
      name: 'Labels',
      section: 'labels',
    },
    {
      icon: 'mingcute:archive-line',
      name: 'Archive',
      section: 'archive',
    },
    {
      icon: 'mingcute:delete-line',
      name: 'Trash',
      section: 'trash',
    },
  ];

  return (
    <div className='flex h-screen bg-[#f1f3f4]'>
      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg 
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}
      >
        <div className='p-4 border-b flex items-center justify-between'>
          <h1 className='text-xl font-medium text-gray-800 flex items-center'>
            <Icon icon='mingcute:idea-line' className='mr-2 text-2xl' />
            Ideatracker
          </h1>
          <button className='md:hidden' onClick={() => setIsMenuOpen(false)}>
            <Icon icon='mingcute:close-line' className='text-2xl' />
          </button>
        </div>
        <nav className='py-2'>
          {sidebarItems.map((item) => (
            <button
              key={item.section}
              onClick={() => {
                setActiveSection(item.section);
                setIsMenuOpen(false);
              }}
              className={`
                w-full flex items-center px-4 py-2 text-left 
                hover:bg-gray-100 transition-colors
                ${
                  activeSection === item.section
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700'
                }
              `}
            >
              <Icon icon={item.icon} className='mr-3 text-xl' />
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Header */}
        <header className='bg-white shadow-sm px-4 py-2 flex items-center'>
          <button
            className='mr-4 md:hidden'
            onClick={() => setIsMenuOpen(true)}
          >
            <Icon
              icon='mingcute:menu-line'
              className='text-2xl text-gray-600'
            />
          </button>

          <div className='relative flex-1 max-w-xl mr-4'>
            <input
              type='text'
              placeholder='Search'
              className='w-full pl-10 pr-4 py-2 bg-[#f1f3f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <Icon
              icon='mingcute:search-line'
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
            />
          </div>

          <div className='flex items-center'>
            {user.current ? (
              <div className='flex items-center'>
                <div className='bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-2'>
                  <Icon icon='mingcute:user-line' className='w-6 h-6' />
                </div>
                <span className='text-gray-700 font-medium hidden md:inline'>
                  {user.current.name || 'User'}
                </span>
              </div>
            ) : (
              <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>
                Login
              </button>
            )}
          </div>
        </header>

        {/* Content */}
        <main className='flex-1 p-4 overflow-y-auto'>
          {activeSection === 'ideas' && (
            <div className='max-w-6xl mx-auto'>
              {/* Idea Submission */}
              <div className='mb-6'>
                <div className='bg-white rounded-lg shadow-md p-4 max-w-2xl mx-auto'>
                  <form className='space-y-3'>
                    <input
                      type='text'
                      placeholder='Title'
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      className='w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <textarea
                      placeholder='Take a note...'
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      className='w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]'
                    />
                    <div className='flex justify-between items-center'>
                      <div className='flex space-x-2'>
                        <button
                          type='button'
                          className='text-gray-600 hover:bg-gray-100 p-2 rounded-full'
                        >
                          <Icon icon='mingcute:add-line' className='text-xl' />
                        </button>
                        <button
                          type='button'
                          className='text-gray-600 hover:bg-gray-100 p-2 rounded-full'
                        >
                          <Icon
                            icon='mingcute:palette-line'
                            className='text-xl'
                          />
                        </button>
                      </div>
                      <button
                        type='button'
                        onClick={() =>
                          ideas.add({
                            userId: user.current.$id,
                            title,
                            description,
                          })
                        }
                        className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Ideas Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {ideas.current.map((idea) => (
                  <div
                    key={idea.$id}
                    className='bg-white rounded-lg shadow-md p-4 border border-gray-200'
                  >
                    <h3 className='font-semibold text-gray-800 mb-2'>
                      {idea.title}
                    </h3>
                    <p className='text-gray-600 mb-4'>{idea.description}</p>
                    <div className='flex justify-between items-center'>
                      <div className='flex space-x-2'>
                        <button className='text-gray-600 hover:bg-gray-100 p-2 rounded-full'>
                          <Icon icon='mingcute:pin-line' className='text-lg' />
                        </button>
                        <button className='text-gray-600 hover:bg-gray-100 p-2 rounded-full'>
                          <Icon
                            icon='mingcute:label-line'
                            className='text-lg'
                          />
                        </button>
                      </div>
                      {user.current && user.current.$id === idea.userId && (
                        <button
                          type='button'
                          onClick={() => ideas.remove(idea.$id)}
                          className='text-red-600 hover:bg-red-50 p-2 rounded-full'
                        >
                          <Icon
                            icon='mingcute:delete-line'
                            className='text-lg'
                          />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for other sections */}
          {activeSection !== 'ideas' && (
            <div className='bg-white rounded-lg shadow-md p-6 text-center max-w-md mx-auto'>
              <Icon
                icon={
                  sidebarItems.find((item) => item.section === activeSection)
                    ?.icon || 'mingcute:info-line'
                }
                className='mx-auto mb-4 text-4xl text-gray-400'
              />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                {
                  sidebarItems.find((item) => item.section === activeSection)
                    ?.name
                }
              </h2>
              <p className='text-gray-600'>
                {activeSection} section coming soon!
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}
