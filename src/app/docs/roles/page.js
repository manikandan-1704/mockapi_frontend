// src/app/docs/roles/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '../components/Sidebar';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.mockapi.dev';

export default function RolesAPIPage() {
  const pathname = usePathname();
  
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar currentPath={pathname} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Roles API</h1>
              <p className="text-gray-600 mb-8">Endpoints for managing role data</p>
              
              <div className="space-y-12">
                {/* Get All Roles */}
                <section id="get-all-roles">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get All Roles</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/roles`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "page": 1,
    "limit": 10,
    "totalResults": 10,
    "results": [
        {
            "id": 1,
            "name": "Admin",
            "description": "Full access to all resources",
            "status": "active",
            "permissions": [
                "read",
                "write",
                "delete"
            ]
        },
        {
            "id": 2,
            "name": "Editor",
            "description": "Can edit and update content",
            "status": "active",
            "permissions": [
                "read",
                "write"
            ]
        },
        {
            "id": 3,
            "name": "Viewer",
            "description": "Can only view content",
            "status": "active",
            "permissions": [
                "read"
            ]
        }
    ]
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

                {/* Get Role by ID */}
                <section id="get-role">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Role by ID</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/roles/{id}`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "id": 1,
    "name": "Admin",
    "description": "Full access to all resources",
    "status": "active",
    "permissions": [
        "read",
        "write",
        "delete"
    ]
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

                {/* Create Role */}
                <section id="create-role">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Role</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">POST</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/roles`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">Request Body:</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{`{
    "id": 1,
    "name": "Admin",
    "description": "Full access to all resources",
    "status": "active",
    "permissions": [
        "read", "write", "delete"
    ]
}
`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "Role Created Successfully",
    "data": {
        "id": 1,
        "status": "active",
        "permissions": [
            "read",
            "write",
            "delete"
        ],
        "name": "Admin",
        "description": "Full access to all resources"
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Update Role */}
                <section id="update-role">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Update Role</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">PUT</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/roles/{id}`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">Request Body:</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{`{
    "id": 1,
    "name": "Admin",
    "description": "Full access to all resources",
    "status": "inactive",
    "permissions": [
        "read", "write", "delete"
    ]
}
`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "Role Updated Successfully",
    "data": {
        "id": 1,
        "name": "Admin",
        "description": "Full access to all resources",
        "status": "inactive",
        "permissions": [
            "read",
            "write",
            "delete"
        ]
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Delete Role */}
                <section id="delete-role">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Delete Role</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">DELETE</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/roles/{id}`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "Role Deleted Successfully",
    "data": {
        "id": 1,
        "name": "Admin",
        "description": "Full access to all resources",
        "status": "active",
        "permissions": [
            "read",
            "write",
            "delete"
        ]
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Search Role */}
                <section id="search-role">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Role</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/roles?name=admin`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "page": 1,
    "limit": 10,
    "totalResults": 1,
    "results": [
        {
            "id": 1,
            "name": "Admin",
            "description": "Full access to all resources",
            "status": "active",
            "permissions": [
                "read",
                "write",
                "delete"
            ]
        }
    ]
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Search & Filter Role */}
                <section id="search-filter-role">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Search & Filter Role</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/roles?status=inactive&page=1&limit=3`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "page": 1,
    "limit": 3,
    "totalResults": 2,
    "results": [
        {
            "id": 6,
            "name": "Support",
            "description": "Handles user support tickets",
            "status": "inactive",
            "permissions": [
                "read",
                "write"
            ]
        },
        {
            "id": 9,
            "name": "Guest",
            "description": "Limited access for guest users",
            "status": "inactive",
            "permissions": [
                "read"
            ]
        }
    ]
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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