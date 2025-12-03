// src/app/docs/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.mockapi.dev';

export default function DocsPage() {
  const pathname = usePathname();
  
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to using MockAPI endpoints for testing and development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Sidebar currentPath={pathname} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Only show sample API on main docs page */}
            <section id="sampleapi" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample API for testing</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Test Endpoint</h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
  "status": true,
  "message": "Hello, welcome to Mock API"
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </div>
              </div>
            </section>

            {/* Quick Links to other pages */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/docs/users" className="block">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Users API</h3>
                  <p className="text-gray-600">Manage user data with CRUD operations</p>
                </div>
              </Link>
              
              <Link href="/docs/todos" className="block">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Todos API</h3>
                  <p className="text-gray-600">Task management endpoints</p>
                </div>
              </Link>
              
              <Link href="/docs/roles" className="block">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Roles API</h3>
                  <p className="text-gray-600">Role-based access control</p>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

// Sidebar Component with dropdowns
// In src/app/docs/page.js, update the Sidebar component
function Sidebar({ currentPath }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const apiEndpoints = [
    {
      category: 'Users API',
      mainPath: '/docs/users',
      endpoints: [
        { name: 'Get All Users', path: '/docs/users#get-all-users' },
        { name: 'Get User by ID', path: '/docs/users#get-user' },
        { name: 'Create User', path: '/docs/users#create-user' },
        { name: 'Update User', path: '/docs/users#update-user' },
        { name: 'Delete User', path: '/docs/users#delete-user' },
        { name: 'Search User', path: '/docs/users#search-user' },
        { name: 'Search & Filter User', path: '/docs/users#search-filter-user' },
      ]
    },
        {
      category: 'Roles API',
      mainPath: '/docs/roles',
      endpoints: [
        { name: 'Get All Roles', path: '/docs/roles#get-all-roles' },
        { name: 'Get Role by ID', path: '/docs/roles#get-role' },
        { name: 'Create Role', path: '/docs/roles#create-role' },
        { name: 'Update Role', path: '/docs/roles#update-role' },
        { name: 'Delete Role', path: '/docs/roles#delete-role' },
        { name: 'Search Role', path: '/docs/roles#delete-role' },
        { name: 'Search & Filter Role', path: '/docs/roles#delete-role' }

      ]
    },
    {
      category: 'Todos API',
      mainPath: '/docs/todos',
      endpoints: [
        { name: 'Get All Todos', path: '/docs/todos#get-all-roles' },
        { name: 'Get Todo by ID', path: '/docs/todos#get-role' },
        { name: 'Create Todo', path: '/docs/todos#create-role' },
        { name: 'Update Todo', path: '/docs/todos#update-role' },
        { name: 'Delete Todo', path: '/docs/todos#delete-role' },
        { name: 'Search Todo', path: '/docs/todos#delete-role' },
        { name: 'Search & Filter Todo', path: '/docs/todos#delete-role' }

      ]
    },
        {
      category: 'Authentication API',
      mainPath: '/docs/auth',
      endpoints: [
        { name: 'Login', path: '/docs/auth#login' },
        { name: 'Refresh Token', path: '/auth/auth#refresh-token' },
        { name: 'Logout', path: '/docs/auth#logout' },
        { name: 'Loggedin user details', path: '/docs/auth#get-user' },
      ]
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
      <h3 className="font-semibold text-gray-900 mb-4">API Documentation</h3>
      
      <nav className="space-y-1">
        <Link 
          href="/docs" 
          className={`block text-gray-600 hover:text-blue-600 py-2 px-3 rounded ${
            currentPath === '/docs' ? 'bg-blue-50 text-blue-600' : ''
          }`}
        >
          Overview
        </Link>

        {apiEndpoints.map((api) => (
          <div key={api.category} className="border-t border-gray-100 pt-2">
            <div className="flex items-center">
              <Link
                href={api.mainPath}
                className={`flex-1 text-gray-600 hover:text-blue-600 py-2 px-3 rounded ${
                  currentPath === api.mainPath ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <span className="font-medium">{api.category}</span>
              </Link>
              
              <button
                onClick={() => setOpenDropdown(openDropdown === api.category ? null : api.category)}
                className="p-1 text-gray-400 hover:text-blue-600 rounded hover:bg-gray-100"
                aria-label="Toggle dropdown"
              >
                <svg 
                  className={`w-5 h-5 transition-transform ${
                    openDropdown === api.category ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {openDropdown === api.category && (
              <div className="ml-4 mt-1 space-y-1">
                {api.endpoints.map((endpoint) => (
                  <Link
                    key={endpoint.name}
                    href={endpoint.path}
                    className={`block text-sm text-gray-500 hover:text-blue-600 py-1.5 px-3 rounded ${
                      currentPath.startsWith(endpoint.path.split('#')[0]) ? 'bg-blue-50 text-blue-600' : ''
                    }`}
                  >
                    {endpoint.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

// Reusable ShowOutputButton component
function ShowOutputButton({ children }) {
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