import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-gray-600 mt-4">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Go Home</Link>
    </div>

    </div>
  )
}

export default Error
