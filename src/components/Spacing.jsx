export default function Spacing() {
    return (
      <div className="h-[200px] w-full flex justify-center items-center bg-[#ebeee8] text-white px-5">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6">
          
          {/* Text Section */}
          <div className="mb-4 md:mb-0">
            <p className="text-2xl text-[#273e3d] sm:text-3xl md:text-4xl font-semibold leading-tight">
              Discover the full scale of <br />
              <span className="relative">
                Clause capabilities
                <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-400"></span>
              </span>
            </p>
          </div>
  
          {/* Button Section */}
          <div className="flex space-x-4">
            <button className="px-6 py-4 bg-white text-gray-900 font-medium rounded-full shadow-md hover:bg-gray-200 transition duration-300">
              Get a Demo
            </button>
            <button className="px-6 py-2 bg-lime-400 text-gray-900 font-medium rounded-full shadow-md hover:bg-lime-500 transition duration-300">
              Start for Free
            </button>
          </div>
  
        </div>
      </div>
    );
  }
  