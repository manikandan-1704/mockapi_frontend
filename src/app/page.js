import { API_BASE_URL as baseUrl } from '@/config/constants';
import { User, CheckSquare, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
  <span className="text-sm font-medium">Serving 3M+ requests monthly</span>
</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mock
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              API
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Free Fake REST API for Testing & Prototyping
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A lightweight and reliable API service that provides placeholder JSON data 
            for your development and testing needs. Fast, simple, and completely free.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/docs"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
            <a
              href="https://github.com/manikandan-1704/mockdataapi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors border border-gray-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose MockAPI?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Get instant responses with minimal latency. Perfect for rapid prototyping and development.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Free</h3>
              <p className="text-gray-600">
                No credit card required. No hidden fees. Free fake API for testing and development.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RESTful API</h3>
              <p className="text-gray-600">
                Standard REST endpoints with support for GET, POST, PUT, PATCH, and DELETE methods.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Unique Features You Won't Find Elsewhere
    </h2>
    <p className="text-lg text-gray-600 mb-16">
      Advanced API capabilities designed for real-world applications
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

      {/* Feature 1 */}
      <div>
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Roles API</h3>
        <p className="text-gray-600">
          The first and only provider offering a complete Roles API for permission-based testing.
        </p>
      </div>

      {/* Feature 2 */}
      <div>
        <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Users by Role</h3>
        <p className="text-gray-600">
          Fetch users filtered by roles — ideal for RBAC testing and structured dashboards.
        </p>
      </div>

      {/* Feature 3 */}
      <div>
        <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Specific Todos</h3>
        <p className="text-gray-600">
          Todos automatically linked to userID — perfect for relational data scenarios.
        </p>
      </div>

      {/* Feature 4 */}
      <div>
        <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Auth System</h3>
        <p className="text-gray-600">
          Login API with access + refresh tokens for real authentication flows.
        </p>
      </div>

      {/* Feature 5 */}
      <div>
        <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Search, Filter & Pagination</h3>
        <p className="text-gray-600">
          Combine search + filtering + paginated responses across all major endpoints.
        </p>
      </div>

      {/* Feature 6 */}
      <div>
        <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Production Ready</h3>
        <p className="text-gray-600">
          Built to scale — fast, stable, and optimized for real development workflows.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Quick Start Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Get Started in Seconds
          </h2>
          
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

      {/* Users Card */}
      <a
        href={`${baseUrl}/users`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-6 bg-gradient-to-br from-blue-50 to-blue-100
        rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg
        transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center 
          group-hover:bg-blue-600 transition-colors">
            <User className="w-6 h-6 text-white" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">
              All Users
            </h3>
            <p className="text-gray-600 text-sm mt-1 font-mono">{baseUrl}/users</p>
          </div>
        </div>
      </a>

      {/* Todos Card */}
      <a
        href={`${baseUrl}/todos`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-6 bg-gradient-to-br from-green-50 to-green-100
        rounded-xl border border-green-200 hover:border-green-400 hover:shadow-lg 
        transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center 
          group-hover:bg-green-600 transition-colors">
            <CheckSquare className="w-6 h-6 text-white" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-700 transition-colors">
              All Todos
            </h3>
            <p className="text-gray-600 text-sm mt-1 font-mono">{baseUrl}/todos</p>
          </div>
        </div>
      </a>

      {/* Roles Card */}
      <a
        href={`${baseUrl}/roles`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-6 bg-gradient-to-br from-purple-50 to-purple-100
        rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-lg 
        transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center 
          group-hover:bg-purple-600 transition-colors">
            <Shield className="w-6 h-6 text-white" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-lg group-hover:text-purple-700 transition-colors">
              All Roles
            </h3>
            <p className="text-gray-600 text-sm mt-1 font-mono">{baseUrl}/roles</p>
          </div>
        </div>
      </a>
    </div>
          <div className="text-center mt-8">
            <a
              href="/docs"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              View Full Documentation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}

    </main>
  );
}