import { Code, Database, Globe, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5 text-blue-500" />,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 text-green-500" />,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Technologies & Frameworks",
      icon: <Globe className="h-5 w-5 text-purple-500" />,
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Bootstrap",
        "Spring Boot",
      ],
    },
    {
      title: "CS Fundamentals",
      icon: <BookOpen className="h-5 w-5 text-orange-500" />,
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
            from frontend to backend
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Coding Profiles</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://leetcode.com/u/Rupali_Ramteke/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              LeetCode Profile
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/rupaliramapuv/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              GeeksforGeeks Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
