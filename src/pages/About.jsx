export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#273e3d] text-white font-bold py-16 px-6">

    
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold m-5 text-white">About Me</h1>
        <p className="italic text-gray-300">A brief insight into my journey and passion.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-12 md:gap-20 px-6 md:px-16 border-4 border-gray-400/50 rounded-xl shadow-2xl p-8 bg-[#]">
        
      
        <div className="mb-10 md:mb-0 flex justify-center">
          <img
            src="https://placehold.co/300x300"
            alt="Hero"
            className="rounded-lg  shadow-xl w-48 sm:w-60 md:w-72 hover:scale-105 transition-transform duration-300"
          />
        </div>


        <div className="text-center md:text-left max-w-lg px-5">
          <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
            Hello! I'm <span className="text-blue-400 font-semibold">person</span>,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, minus. Alias aliquid non adipisci nostrum maiores iure saepe quaerat, amet ab ratione assumenda maxime distinctio ea deserunt praesentium corrupti debitis?lems with creative and efficient coding.
          </p>

  
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300">
              Learn More
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
}
