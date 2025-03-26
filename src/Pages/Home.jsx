import React from 'react';
import Details from '@/components/Details';
import { SignedIn, SignedOut, RedirectToSignIn,SignInButton, UserButton, useUser  } from '@clerk/clerk-react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import "@fontsource/poppins";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import NewMeeting from '../components/NewMeeting'


function Home() {
  const { isLoaded, user } = useUser();
  if (!isLoaded) {
    return ( 
    <div className="loader-container">
      <span className="loader"></span>
    </div>
    );
  }
  return (
    <>

    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="border-b py-4 px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-[poppins] ml-16 text-indigo-600">PlanWise</Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <p className="text-gray-700 hover:text-indigo-600 font-[poppins] hover:cursor-pointer">Features</p>
          <p className="text-gray-700 hover:text-indigo-600 font-[poppins] hover:cursor-pointer">Community</p>
          <SignedIn>
            <NewMeeting />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div> 
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <div className="flex flex-col gap-4">
              <p className="text-lg text-gray-700 hover:text-indigo-600 font-[poppins] hover:cursor-pointer">Features</p>
              <p className="text-lg text-gray-700 hover:text-indigo-600 font-[poppins] hover:cursor-pointer">Community</p>
              <SignedIn>
                <NewMeeting />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
      <div className="max-w-5xl mx-auto text-xl font-semibold text-gray-700 px-4 py-4">
        Welcome, {user?.username}! 🎉
      </div>
    </div>

    <SignedIn>
      <section className="max-w-5xl mx-auto mt-6 px-4 pt-[120px]">
        <Details />
      </section>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>

    </> 
  )
}

export default Home;
