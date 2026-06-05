import Heading from "./Heading";
import vrWeb from '../assets/VRweb.png'
import travel from '../assets/travel.png'
const projects = [
  {
    id: 1,
    title: "Jadoo-Travel & Tourism",
    description:
      "A beautifully designed, modern travel landing page that helps users explore destinations, book flights, and discover hotels with a seamless UI.",
    image:
      travel,

    github: " https://github.com/Ibad03/Travel-web",
    live: "https://travel-web-tmcv.vercel.app/",
  },
  {   
    id: 2,
    title: "VR Development Platform",
    description:
      "A sleek and immersive landing page for Virtual Reality development tools, featuring modern dark-themed components, pricing plans, and documentation layout.",
    image:
      vrWeb,
    
    github: "https://github.com/Ibad03/VirtualR-",
    live: "https://virtual-r-two-ashy.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and professional experience.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className=" px-5 md:px-10  text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 ">
          <Heading heading="Projects"/>
          <p className="text-white -mt-4 max-w-2xl mx-auto">
            Some of the projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black rounded-2xl text-white overflow-hidden border border-gray-800
              text-black hover:border-white transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden ">
                <img
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56  bg-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className=" text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded-lg border border-gray-700
                     hover:bg-[#7b2cbf] hover:text-white transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-[#7b2cbf] text-black font-semibold hover:bg-none transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;