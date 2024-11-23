import Image from "next/image";
import logo from "../image/logo.png";

export default function Nav() {
  return (
    <header className="flex justify-between items-center p-4 bg-slate-50 shadow-md">
      <div className=" w-full flex items-center space-x-80 md:w-auto">
       
        <Image src={logo} alt="Logo" height={40} width={150} className="mr-4" />

      
        <div className="hidden md:flex items-center space-x-24 bg-white p-4 shadow-md">
          <nav className="flex space-x-24">
            <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Courses</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Achievement</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">About Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Testimonial</a>
          </nav>
        </div>
      </div>

      
      <div className="hidden md:flex px-6 items-center space-x-12 mr-9">
        <button className="ml-10 text-black px-6 py-3 rounded border-2 border-black hover:text-blue-500">
          Login
        </button>
        <button className="ml-[20px] gap-8 bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
          Sign Up
        </button>
      </div>
    </header>
  );
}
