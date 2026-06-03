import Heading from "./Heading";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A modern e-commerce platform with product filtering, cart functionality, and secure checkout.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",

    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, deadlines, and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    
    github: "#",
    live: "#",
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
        <div className="text-center mb-14">
          <Heading heading="Projects"/>
          <p className="text-gray-400 -mt-4 max-w-2xl mx-auto">
            Some of the projects I've worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#e019bc] rounded-2xl overflow-hidden border border-gray-800
              text-black hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-black text-sm leading-relaxed mb-4">
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