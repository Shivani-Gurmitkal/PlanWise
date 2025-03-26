import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import "@fontsource/poppins";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Shield } from "lucide-react"; // Icons

const LandingPage = () => {
  return (
    <>

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

    {/* Main-Content Section */}
    <section className="flex flex-col md:flex-row items-center justify-between px-6 ml-16 py-16 bg-gray-50">
      {/* Left Side */}
      <div className="max-w-lg mt-16">
        <h1 className="text-5xl md:text-6xl leading-tight font-bold font-[poppins] text-gray-900">Help organize your meeting schedule.</h1>
        <p className=" text-gray-600 mt-4">No matter where you are, your meetings stay on track.</p>
        <div className="mt-8 flex flex-col md:flex-row gap-2 justify-center md:justify-start">
          <input type="text" placeholder="Enter your link" className="w-full md:w-1/2 px-4 py-2 border focus:outline-none rounded-lg" />
          <Button size="lg">Start Meeting</Button>
        </div>
      </div>
      {/* Right Side */}
      <div className="relative w-full flex flex-wrap justify-center items-center mt-16 gap-4">
        <div className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden shadow-lg">
          <img src="https://img.freepik.com/free-photo/smiling-man-using-laptop-near-bed_23-2147769465.jpg" alt="User 1" className="w-full h-full object-cover" loading="lazy"/>
          <div className="absolute top-[-10px] left-[-10px] w-10 h-10 bg-blue-200 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden shadow-lg ">
            <img src="https://img.freepik.com/premium-photo/smiling-young-indian-man-using-smartphone-drinking-coffee-home_116547-69084.jpg?ga=GA1.1.774654430.1723126798" alt="User 2" className="w-full h-full object-cover" loading="lazy"/>
            <div className="absolute top-[-10px] right-[-10px] w-10 h-10 bg-purple-200 rounded-full"></div>
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden shadow-lg">
            <img src="https://img.freepik.com/premium-photo/attractive-young-girl-wearing-sweater-standing-isolated-white-wall-pointing-copy-space_171337-99202.jpg?ga=GA1.1.774654430.1723126798&semt=ais_keywords_boost" alt="User 3" className="w-full h-full object-cover" loading="lazy"/>
            <div className="absolute bottom-[-10px] left-[-10px] w-10 h-10 bg-green-200 rounded-full"></div>
          </div>
        </div>

      </div>
    </section> 
    
    {/* Feature Section */}
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold font-[poppins] text-gray-900">Why Choose PlanWise?</h2>
      <p className="text-gray-600 mt-2 mb-8">Simplify your meeting scheduling with powerful features.</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        <Card className="shadow-lg hover:shadow-xl transition">
          <CardHeader className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-indigo-600" />
            <CardTitle className="text-xl font-semibold mt-2">Easy Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Plan meetings effortlessly with an intuitive interface.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition">
          <CardHeader className="flex flex-col items-center">
            <Calendar className="w-12 h-12 text-indigo-600" />
            <CardTitle className="text-xl font-semibold mt-2">Calendar Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Sync meetings with Google Calendar and Outlook.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition">
          <CardHeader className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-indigo-600" />
            <CardTitle className="text-xl font-semibold mt-2">Secure & Reliable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Your data is encrypted and protected with industry standards.</p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* User Review Section */}
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center font-[poppins]">What Our Users Say</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="italic">"PlanWise made scheduling so easy! Love it!"</p>
          <p className="mt-2 font-bold">- Alex Johnson</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="italic">"The best meeting tool I’ve used. Highly recommend!"</p>
          <p className="mt-2 font-bold">- Sarah Lee</p>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; 2025 PlanWise. All Rights Reserved.</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="https://github.com/Shivani-Gurmitkal" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/shivani-gurumitkal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
    </>
  );
};

export default LandingPage;
