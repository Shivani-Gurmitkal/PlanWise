import { Button } from "@/components/ui/button";
import "@fontsource/poppins";
import NavBar from "@/components/NavBar";
import FeatureSection from "@/components/FeatureSection";
import UserReview from "@/components/UserReview";

function LandingPage () {
  return (
    <>

    {/* NavBar Section */}
    <NavBar />
    
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
    <FeatureSection/>

    {/* User Review Section */}
    <UserReview/>

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
