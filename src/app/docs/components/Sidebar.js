// src/app/docs/components/Sidebar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
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
        {/* Main Docs Link */}
        <Link 
          href="/docs" 
          className={`block text-gray-600 hover:text-blue-600 py-2 px-3 rounded ${
            pathname === '/docs' ? 'bg-blue-50 text-blue-600' : ''
          }`}
        >
          Overview
        </Link>

        {/* API Endpoints with Clickable Categories */}
        {apiEndpoints.map((api) => (
          <div key={api.category} className="border-t border-gray-100 pt-2">
            <div className="flex items-center">
              {/* Category as Link */}
              <Link
                href={api.mainPath}
                className={`flex-1 text-gray-600 hover:text-blue-600 py-2 px-3 rounded ${
                  pathname === api.mainPath ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <span className="font-medium">{api.category}</span>
              </Link>
              
              {/* Dropdown Toggle Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === api.category ? null : api.category);
                }}
                className="p-2 text-gray-400 hover:text-blue-600"
                aria-label="Toggle dropdown"
              >
                <svg 
                  className={`w-4 h-4 transition-transform ${
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
            
            {/* Dropdown Menu */}
            {openDropdown === api.category && (
              <div className="ml-4 mt-1 space-y-1">
                {api.endpoints.map((endpoint) => (
                  <Link
                    key={endpoint.name}
                    href={endpoint.path}
                    className={`block text-sm text-gray-500 hover:text-blue-600 py-1.5 px-3 rounded ${
                      pathname.startsWith(endpoint.path.split('#')[0]) ? 'bg-blue-50 text-blue-600' : ''
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