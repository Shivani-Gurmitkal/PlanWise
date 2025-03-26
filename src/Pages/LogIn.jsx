import { SignIn, useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function LogIn() {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/home"); 
    }
  }, [isSignedIn, isLoaded, navigate]);

  return (
    <div>
      
      <nav className="border-b py-4 px-6 flex items-center justify-between bg-white shadow-sm">
      <Link to="/" className="text-2xl font-bold font-[poppins] ml-16 text-indigo-600">PlanWise</Link>
      </nav>

      <div className="flex justify-center items-center flex-grow">
        <div className="max-w-md w-full py-16">
          <SignIn redirectUrl="/home"/>
        </div>
      </div>

    </div>
  )
}

export default LogIn
