import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bank Management System",
      description:
        "Desktop-based banking application with account creation, deposits, withdrawals, fund transfers, and balance inquiry features. Integrated MySQL for secure storage.",
      tech: ["Java", "Swing", "AWT", "MySQL"],
      github:
        "https://github.com/83kRupali/JavaProject/tree/main/BankManagementSystemProject",
      type: "Desktop Application",
    },
    {
      title: "Tracker – Employee Management System",
      description:
        "Full-stack employee management platform with complete CRUD operations, secure backend APIs, and role-based access control.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github:
        "https://github.com/83kRupali/Prodigy_Info_Tech/tree/main/PRODIGY_FS_2",
      type: "Full-Stack Web App",
    },
    {
      title: "WanderLust – Airbnb Clone",
      description:
        "Complete Airbnb clone with property listings, search filters, JWT authentication, and image hosting. Users can browse, filter, and host can manage listings.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      github: "https://github.com/83kRupali/PROJECT",
      type: "Full-Stack Web App",
    },
    {
      title: "Weather App & Amazon Clone",
      description:
        "Weather application using OpenWeather API for real-time data and Amazon Clone replicating UI and basic e-commerce functionality.",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"],
      github: "https://github.com/83kRupali/HTML-CSS_Project",
      type: "Frontend Applications",
    },
    {
      title: "Sorting Visualizer",
      description:
        "Interactive web application visualizing 5 sorting algorithms in real-time with controls for speed, array size, and algorithm selection.",
      tech: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/83kRupali/JavaProject/tree/main/sort",
      type: "Educational Tool",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack
            development skills, problem-solving abilities, and proficiency in
            modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded hover:bg-gray-100 transition"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full hover:bg-blue-500 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Code Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gray-400 text-gray-700 rounded px-4 py-2 text-sm hover:bg-gray-700 hover:text-white transition"
              >
                <ExternalLink className="h-4 w-4" />
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
