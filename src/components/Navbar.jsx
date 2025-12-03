import React from "react";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 shadow-md z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-900 flex items-center hover:opacity-80 transition-opacity">
      Mock
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        API
      </span>
    </Link>

        <div className="flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="/docs" className="text-gray-700 hover:text-blue-600 font-medium">
            Docs
          </a>
          <a
            href="https://github.com/manikandan-1704/mockdataapi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
