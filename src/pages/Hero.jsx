import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white-600 text-[#273e3d] font-bold text-center px-5">

      {/* Container with Responsive Layout */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-5 md:gap-16">

        {/* Content Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left px-4 md:px-0 items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl">Welcome to My Website</h1>
          <p className="text-sm sm:text-lg max-w-lg text-[#273e3d] ">
            This is a stunning hero section with a dark background and a sleek design.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300 w-40">
            Get Started
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-7">
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-pink-400 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

       
        <div className="mb-10 md:mb-0 flex justify-center">
          <img
            src="https://placehold.co/300x300"
            alt="Hero"
            className="rounded-full shadow-lg w-48 sm:w-60 md:w-72"
          />
        </div>

      </div>
    </div>
  );
}
