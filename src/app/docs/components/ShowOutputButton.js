// src/app/docs/components/ShowOutputButton.js
'use client';
import { useState } from 'react';

export default function ShowOutputButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
      >
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {isOpen ? 'Hide Output' : 'Show Output'}
      </button>
      
      {isOpen && (
        <div className="mt-3 bg-gray-800 rounded-lg p-4 border border-gray-700">
          <h4 className="text-md font-semibold text-gray-200 mb-2">Response:</h4>
          {children}
        </div>
      )}
    </div>
  );
}