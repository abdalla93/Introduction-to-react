import React from 'react';
import { useHistory } from 'react-router-dom'; // Change to useHistory for v5
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const classNames = (...classes) => classes.filter(Boolean).join(' ');
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const AboutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
export default function Navbar() {
  const history = useHistory(); 
  const location = useLocation();
  const navItems = [
    { id: 'home', label: 'Home', icon: <HomeIcon />, path: '/' },
    { id: 'about', label: 'About', icon: <AboutIcon />, path: '/about' },
    { id: 'contact', label: 'Contact', icon: <ContactIcon />, path: '/contact' },
  ];

   return (
    <div className='bg-gray-800 text-white shadow-md'>
      <nav className='container mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>SPA Demo</h1>
          <div className='flex space-x-2'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => history.push(item.path)}
                className={classNames(
                  'flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out',
                  location.pathname === item.path
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                )}
              >
                {item.icon}
                <span className='hidden sm:inline'>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}