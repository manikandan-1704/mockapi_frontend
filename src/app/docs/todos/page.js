// src/app/docs/todos/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '../components/Sidebar';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.mockapi.dev';

export default function TodosAPIPage() {
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Todos API</h1>
              <p className="text-gray-600 mb-8">Endpoints for managing todo data</p>
              
              <div className="space-y-12">
                {/* Get All todos */}
                <section id="get-all-todos">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get All Todos</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/todos`}</code>
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
            "userId": 1,
            "title": "Finish project report",
            "description": "Complete the quarterly report and submit to manager",
            "status": "in-progress",
            "priority": "high",
            "dueDate": "2025-09-25T17:00:00.000Z",
            "createdAt": "2025-09-18T10:00:00.000Z",
            "updatedAt": "2025-09-18T12:30:00.000Z"
        },
        {
            "id": 2,
            "userId": 2,
            "title": "Team meeting",
            "description": "Attend the weekly team sync-up",
            "status": "pending",
            "priority": "medium",
            "dueDate": "2025-09-19T09:00:00.000Z",
            "createdAt": "2025-09-18T08:00:00.000Z",
            "updatedAt": "2025-09-18T08:00:00.000Z"
        },
        {
            "id": 3,
            "userId": 3,
            "title": "Code review",
            "description": "Review pull requests for frontend module",
            "status": "completed",
            "priority": "high",
            "dueDate": "2025-09-18T15:00:00.000Z",
            "createdAt": "2025-09-17T14:00:00.000Z",
            "updatedAt": "2025-09-18T14:45:00.000Z"
        },
    ]
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

                {/* Get Todo by ID */}
                <section id="get-todo">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Todo by ID</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/todos/{id}`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "id": 1,
    "userId": 1,
    "title": "Finish project report",
    "description": "Complete the quarterly report and submit to manager",
    "status": "in-progress",
    "priority": "high",
    "dueDate": "2025-09-25T17:00:00.000Z",
    "createdAt": "2025-09-18T10:00:00.000Z",
    "updatedAt": "2025-09-18T12:30:00.000Z"
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

                {/* Create Todo */}
                <section id="create-todo">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Todo</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">POST</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/todos`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">Request Body:</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{`{
    "id": 1,
    "userId": 10,
    "title": "Finish project reports",
    "description": "Complete the quarterly report and submit to manager",
    "status": "in-progress",
    "priority": "high",
    "dueDate": "2025-09-25T17:00:00.000Z",
    "createdAt": "2025-09-18T10:00:00.000Z",
    "updatedAt": "2025-09-18T12:30:00.000Z"
}
`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "Todo Created Successfully",
    "data": {
        "id": 1,
        "status": "in-progress",
        "priority": "high",
        "createdAt": "2025-09-18T10:00:00.000Z",
        "updatedAt": "2025-09-18T12:30:00.000Z",
        "userId": 10,
        "title": "Finish project reports",
        "description": "Complete the quarterly report and submit to manager",
        "dueDate": "2025-09-25T17:00:00.000Z"
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Update Todo */}
                <section id="update-todo">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Update Todo</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">PUT</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/todos/{id}`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">Request Body:</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{`{
    "id": 1,
    "userId": 10,
    "title": "Finish project reportsss",
    "description": "Complete the quarterly report and submit to manager",
    "status": "in-progress",
    "priority": "high",
    "dueDate": "2025-09-25T17:00:00.000Z",
    "createdAt": "2025-09-18T10:00:00.000Z",
    "updatedAt": "2025-09-18T12:30:00.000Z"
}
`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "Todo Updated Successfully",
    "data": {
        "id": 1,
        "userId": 10,
        "title": "Finish project reportsss",
        "description": "Complete the quarterly report and submit to manager",
        "status": "in-progress",
        "priority": "high",
        "dueDate": "2025-09-25T17:00:00.000Z",
        "createdAt": "2025-09-18T10:00:00.000Z",
        "updatedAt": "2025-12-02T15:29:15.814Z"
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Delete Todo */}
                <section id="delete-todo">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Delete Todo</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">DELETE</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/todos/{id}`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "Todo Deleted Successfully",
    "data": {
        "id": 1,
        "userId": 1,
        "title": "Finish project report",
        "description": "Complete the quarterly report and submit to manager",
        "status": "in-progress",
        "priority": "high",
        "dueDate": "2025-09-25T17:00:00.000Z",
        "createdAt": "2025-09-18T10:00:00.000Z",
        "updatedAt": "2025-09-18T12:30:00.000Z"
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Search Todo */}
                <section id="search-todo">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Todo</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/todos?userId=1`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "page": 1,
    "limit": 10,
    "totalResults": 3,
    "results": [
        {
            "id": 1,
            "userId": 1,
            "title": "Finish project report",
            "description": "Complete the quarterly report and submit to manager",
            "status": "in-progress",
            "priority": "high",
            "dueDate": "2025-09-25T17:00:00.000Z",
            "createdAt": "2025-09-18T10:00:00.000Z",
            "updatedAt": "2025-09-18T12:30:00.000Z"
        },
        {
            "id": 4,
            "userId": 1,
            "title": "Update documentation",
            "description": "Add new API endpoints to project docs",
            "status": "pending",
            "priority": "low",
            "dueDate": "2025-09-22T12:00:00.000Z",
            "createdAt": "2025-09-18T09:30:00.000Z",
            "updatedAt": "2025-09-18T09:30:00.000Z"
        },
        {
            "id": 8,
            "userId": 1,
            "title": "Design mockups",
            "description": "Create UI mockups for new feature",
            "status": "in-progress",
            "priority": "medium",
            "dueDate": "2025-09-21T14:00:00.000Z",
            "createdAt": "2025-09-18T10:15:00.000Z",
            "updatedAt": "2025-09-18T11:30:00.000Z"
        }
    ]
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Search & Filter Todo */}
                <section id="search-filter-todo">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Search & Filter Todo</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/todos?status=in-progress&page=1&limit=3`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "page": 1,
    "limit": 3,
    "totalResults": 4,
    "results": [
        {
            "id": 1,
            "userId": 1,
            "title": "Finish project report",
            "description": "Complete the quarterly report and submit to manager",
            "status": "in-progress",
            "priority": "high",
            "dueDate": "2025-09-25T17:00:00.000Z",
            "createdAt": "2025-09-18T10:00:00.000Z",
            "updatedAt": "2025-09-18T12:30:00.000Z"
        },
        {
            "id": 5,
            "userId": 2,
            "title": "Fix login bug",
            "description": "Investigate and fix login issue for mobile users",
            "status": "in-progress",
            "priority": "high",
            "dueDate": "2025-09-20T18:00:00.000Z",
            "createdAt": "2025-09-18T11:00:00.000Z",
            "updatedAt": "2025-09-18T12:15:00.000Z"
        },
        {
            "id": 8,
            "userId": 1,
            "title": "Design mockups",
            "description": "Create UI mockups for new feature",
            "status": "in-progress",
            "priority": "medium",
            "dueDate": "2025-09-21T14:00:00.000Z",
            "createdAt": "2025-09-18T10:15:00.000Z",
            "updatedAt": "2025-09-18T11:30:00.000Z"
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