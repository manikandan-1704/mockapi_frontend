// src/app/docs/users/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '../components/Sidebar';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.mockapi.dev';

export default function UsersAPIPage() {
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Users API</h1>
              <p className="text-gray-600 mb-8">Endpoints for managing user data</p>
              
              <div className="space-y-12">
                {/* Get All Users */}
                <section id="get-all-users">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get All Users</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/users`}</code>
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
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "roleId": 1,
            "status": "active",
            "image": "undefinedprofile.jpg",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "roleId": 2,
            "status": "inactive",
            "image": "undefinedprofile.jpg",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "roleId": 3,
            "status": "active",
            "image": "undefinedprofile.jpg",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        }
    ]
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

                {/* Get User by ID */}
                <section id="get-user">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get User by ID</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/users/{id}`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "roleId": 1,
    "status": "active",
    "image": "undefinedprofile.jpg",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

                {/* Create User */}
                <section id="create-user">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Create User</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">POST</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/users`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">Request Body:</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{`{
  "name": "Alice Wonderland",
  "username": "alice123",
  "email": "alice@example.com",
  "roleId": 2,
  "status":"inactive",
  "address": {
    "street": "123 Fantasy Lane",
    "suite": "Suite 100",
    "city": "Wonderland",
    "zipcode": "12345",
    "geo": {
      "lat": "12.3456",
      "lng": "65.4321"
    }
  },
  "phone": "123-456-7890",
  "website": "alicewonderland.com",
  "company": {
    "name": "WonderWorks",
    "catchPhrase": "Creating imaginary solutions",
    "bs": "dream big"
  }
}
`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "User Created Successfully",
    "data": {
        "id": 11,
        "roleId": 2,
        "status": "inactive",
        "name": "Alice Wonderland",
        "username": "alice123",
        "email": "alice@example.com",
        "address": {
            "street": "123 Fantasy Lane",
            "suite": "Suite 100",
            "city": "Wonderland",
            "zipcode": "12345",
            "geo": {
                "lat": "12.3456",
                "lng": "65.4321"
            }
        },
        "phone": "123-456-7890",
        "website": "alicewonderland.com",
        "company": {
            "name": "WonderWorks",
            "catchPhrase": "Creating imaginary solutions",
            "bs": "dream big"
        }
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Update User */}
                <section id="update-user">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Update User</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">POST</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/users/{id}`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">Request Body:</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{`{
  "status": "inactive"
}
`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "User Updated Successfully",
    "data": {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "roleId": 1,
        "status": "inactive",
        "image": "undefinedprofile.jpg",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Delete User */}
                <section id="delete-user">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Delete User</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">DELETE</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/users/{id}`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "User Deleted Successfully",
    "data": {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "roleId": 1,
        "status": "active",
        "image": "undefinedprofile.jpg",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Search User */}
                <section id="search-user">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Search User</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/users?email=shanna&name=ervin`}</code>
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
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "roleId": 2,
            "status": "inactive",
            "image": "undefinedprofile.jpg",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        }
    ]
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
                {/* Search & Filter User */}
                <section id="search-filter-user">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Search & Filter User</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/users?status=inactive&roleId=2&page=1&limit=3`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "page": 1,
    "limit": 3,
    "totalResults": 1,
    "results": [
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "roleId": 2,
            "status": "inactive",
            "image": "undefinedprofile.jpg",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
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