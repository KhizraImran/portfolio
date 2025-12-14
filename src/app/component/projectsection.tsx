export default function ProjectsSection() {
    return (
      <section className="max-w-4xl mx-auto py-8 px-6 text-center bg-gray-200 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">My Latest Works</h3>
  
        <div className="space-y-4">
          {/* Project 1 */}

          <a href="https://tailwind-css-earrings-website.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300 w-full">
              e-commerce website
            </button>
          </a>


          <a href="https://milestone-5-seven-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300 w-full">
              Resume Builder
            </button>
          </a>
  
          {/* Project 2 */}
          <a href="https://simple-foam-khizra.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300 w-full">
              Access Foam
            </button>
          </a>

             {/* Project 3*/}
          <a href="https://hakathon-figma-design-khizra-khan.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300 w-full">
              Figma to Web UI (Hackathon Project)
            </button>
          </a>
            
          {/* Project Showcase */}
          <a href="https://github.com/KhizraImran?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300 w-full">
              See All My Projects
            </button>
          </a>
        </div>
  

  
        {/* LinkedIn Contact */}
        <div className="mt-6">
          <a href="https://www.linkedin.com/in/khizra-imran-7466082b6/" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-gray-700 transition duration-300">
              Contact Me on LinkedIn
            </button>
          </a>
        </div>
      </section>
    );
  }
  
