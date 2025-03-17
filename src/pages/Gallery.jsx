export default function ProjectSection() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Project</h2>
        
        </div>
  
        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="https://placehold.co/900x400"
            alt="Featured Project"
            className="w-full h-auto"
          />
        </div>
  
        {/* Project Card */}
        <div className="mt-6 flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/400x250"
              alt="Project"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right: Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold">Bowery AgroField</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Harvest is spearheading the Sustainable Smart Farming Initiative, a groundbreaking project aimed at revolutionizing agriculture through advanced technologies. This initiative focuses on enhancing crop productivity, improving resource efficiency, and promoting environmental stewardship.
              </p>
            </div>
  
            {/* Read More Button */}
            <div className="mt-4">
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-100 transition">
                Read more
              </button>
            </div>
          </div>
        </div>
  
        {/* Navigation */}
        <div className="mt-6 flex justify-end text-sm text-gray-600">
          <button className="mr-4 hover:underline">Prev</button>
          <button className="flex items-center hover:underline">
            Next <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    );
  }
  