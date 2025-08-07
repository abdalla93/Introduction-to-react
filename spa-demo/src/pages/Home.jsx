import React, { useState } from 'react';

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
      <div className='min-h-screen bg-gray-100 font-sans'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Welcome to Home
        </h1>
        <p className='text-gray-600 leading-relaxed'>
          This is the home page content. You can add your main content here.
        </p>
      </div>
    </>
  );
}
