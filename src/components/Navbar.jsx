import React from "react";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 shadow-md z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-900 flex items-center hover:opacity-80 transition-opacity"
        >
          Mock
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            API
          </span>
        </Link>

        {/* Right Menu */}
        <div className="ml-auto flex items-center space-x-6">
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
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            GitHub
          </a>

          <a
            href="https://buymeacoffee.com/manikandan_1704"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md shadow hover:bg-yellow-300 transition text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 3H6a1 1 0 00-1 1v2a4 4 0 004 4h6a4 4 0 004-4V4a1 1 0 00-1-1zm-1 3a2 2 0 01-2 2H9a2 2 0 01-2-2V5h10v1zM5 13h14l-1.5 8.5A2 2 0 0115.52 23H8.48a2 2 0 01-1.98-1.5L5 13z" />
            </svg>
            Buy Me a Coffee
          </a>
        </div>

      </div>
    </nav>
  );
}
