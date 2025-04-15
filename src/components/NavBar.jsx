import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <div>

      <nav className="fixed top-0 left-0 w-full z-50 border-b py-4 px-6 flex items-center justify-between bg-white shadow-md">
      <h1 className="text-2xl font-bold font-[poppins] ml-16 text-indigo-600">PlanWise</h1>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <p className="text-gray-700 hover:text-indigo-600 font-[poppins] hover:cursor-pointer">Features</p>
        <p className="text-gray-700 hover:text-indigo-600 font-[poppins] hover:cursor-pointer">Community</p>
        <Link to="/login"><Button variant="outline" className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-[poppins]">New meeting</Button></Link>
        <Link to="/login"><Button className="hover:bg-indigo-600 text-white font-[poppins]">Login</Button></Link>
      </div>
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu />
          </Button>
          </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-[poppins] hover:cursor-pointer">Features</p>
                <p className="text-lg font-[poppins] hover:cursor-pointer">Community</p>
                <Link to="/login"><Button variant="outline" className="font-[poppins] border border-indigo-600 text-indigo-600">New meeting</Button></Link>
                <Link to="/login"><Button className="font-[poppins]">Login</Button></Link>
              </div>
            </SheetContent>
        </Sheet>
    </nav>

    </div>
  )
}

export default NavBar
