import { Building, Calendar, Award, ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600">
            Building real-world applications and gaining hands-on development experience
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6">
          <div className="flex items-start justify-between">
            {/* Left side */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                <Building className="h-5 w-5 text-purple-600" />
                Prodigy InfoTech
              </h3>
              <p className="text-base font-medium text-gray-700">
                Full-Stack Development Intern
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>July 2025 (1 month)</span>
              </div>
            </div>

            {/* Badge */}
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              Remote
            </span>
          </div>

          {/* Card Content */}
          <div className="mt-6 space-y-6">
            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
              <ul className="space-y-3">
                {[
                  "Built a comprehensive authentication system with login, signup, and role-based access control",
                  "Developed a complete employee management system with full CRUD operations",
                  "Created a functional e-commerce website with product listing and shopping cart features",
                  "Gained expertise in modern full-stack technologies and best practices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JavaScript",
                  "REST APIs",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full border text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Certificates
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "Full-Stack Development Certificate", file: "src/assets/resume.pdf" },
                ].map((cert, index) => (
                  <li key={index}>
                    <a
                      href={https://drive.google.com/file/d/15X2l2zBhLOVpUJz32KP9ynHIqqL6q8Tb/view?usp=drive_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;







