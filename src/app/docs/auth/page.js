// src/app/docs/roles/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '../components/Sidebar';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.mockapi.dev';

export default function AuthAPIPage() {
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Authentication API</h1>
              <p className="text-gray-600 mb-8">Endpoints for managing auth data</p>
              
              <div className="space-y-12">
                {/* Login */}
                <section id="login">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">POST</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/auth/login`}</code>
                    </pre>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "Login successful",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJLYXJsZXlfRGFjaEBqYXNwZXIuaW5mbyIsInJvbGVJZCI6MSwiaWF0IjoxNzY0Njg5OTU5LCJleHAiOjE3NjQ2OTA4NTl9.1wR5cn_5ziwe0MnuOwQsTYhDN1f4KPYc5RcR6z3DxE4",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJLYXJsZXlfRGFjaEBqYXNwZXIuaW5mbyIsImlhdCI6MTc2NDY4OTk1OSwiZXhwIjoxNzY1Mjk0NzU5fQ.ZBHlU0mZpJvzUit8lkBunKWRNUs1Bb-xFOR0CGRtv34",
    "user": {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "email": "Karley_Dach@jasper.info",
        "roleId": 1,
        "status": "active",
        "image": "undefinedprofile.jpg"
    }
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

                {/* Refresh Token */}
                <section id="refresh-token">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Refresh Token</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">GET</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/auth/refresh`}</code>
                    </pre>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">Request Body:</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJLYXJsZXlfRGFjaEBqYXNwZXIuaW5mbyIsImlhdCI6MTc2NDY4OTk1OSwiZXhwIjoxNzY1Mjk0NzU5fQ.ZBHlU0mZpJvzUit8lkBunKWRNUs1Bb-xFOR0CGRtv34"
}

`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJLYXJsZXlfRGFjaEBqYXNwZXIuaW5mbyIsImlhdCI6MTc2NDY5MDA0MywiZXhwIjoxNzY0NjkwOTQzfQ.anheP8g2dDoDBEj6U8lLsCYVLxZePE8uYd2NKF40yBU"
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>

                {/* Logout */}
                <section id="logout">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Logout</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">POST</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`${baseUrl}/auth/logout`}</code>
                    </pre>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-2">Request Body:</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJLYXJsZXlfRGFjaEBqYXNwZXIuaW5mbyIsImlhdCI6MTc1ODE4ODM0MiwiZXhwIjoxNzU4NzkzMTQyfQ.W6VSob5VafTrUExecK2IgdUUOTFG-ToMGlzRRmF82uI"
}

`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <ShowOutputButton>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      <code>{`{
    "message": "Logged out successfully"
}`}</code>
                    </pre>
                  </ShowOutputButton>
                </section>
{/* Logged in user */}
<section id="get-user">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Logged In User</h2>
  <div className="bg-gray-900 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      <span className="text-gray-400 text-sm">GET</span>
    </div>
    <pre className="text-green-400 text-sm overflow-x-auto">
      <code>{`${baseUrl}/auth/me`}</code>
    </pre>
  </div>
  
  <div className="mt-4">
    <h4 className="text-md font-semibold text-gray-900 mb-2">Headers:</h4>
    <div className="bg-gray-800 rounded-lg p-4">
      <pre className="text-yellow-400 text-sm overflow-x-auto">
        <code>{`Authorization: Bearer {your_access_token}`}</code>
      </pre>
    </div>
  </div>

  <div className="mt-4">
    <h4 className="text-md font-semibold text-gray-900 mb-2">Example with fetch:</h4>
    <div className="bg-gray-800 rounded-lg p-4">
      <pre className="text-green-400 text-sm overflow-x-auto">
        <code>{`fetch('${baseUrl}/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer [access_token]',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
      </pre>
    </div>
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