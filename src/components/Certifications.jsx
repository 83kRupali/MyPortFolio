import { Award, Calendar, Building2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Structures and Algorithms",
      issuer: "Infosys Springboard",
      year: "2024",
      type: "Course Completion"
    },
    {
      title: "Java Programming",
      issuer: "Unstop",
      year: "2024",
      type: "Programming"
    },
    {
      title: "Node.js & MongoDB: Developing Back-end Database Applications",
      issuer: "IBM via Coursera",
      year: "2025",
      type: "Backend Development"
    },
    {
      title: "Introduction to Software Engineering",
      issuer: "IBM via Coursera",
      year: "2025",
      type: "Software Engineering"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-purple-50">
      <div className="container max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development through
            industry-recognized certifications
          </p>
        </div>

        {/* Certificate Images Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">
            Recent Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/software.jpg"
                  alt="Introduction to Software Engineering Certificate"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-purple-600">
                  Introduction to Software Engineering
                </h4>
                <p className="text-sm text-gray-500">IBM via Coursera • 2025</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/backend.jpg"
                  alt="Node.js & MongoDB Certificate"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-purple-600">
                  Node.js & MongoDB Development
                </h4>
                <p className="text-sm text-gray-500">IBM via Coursera • 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* All Certifications List */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition hover:shadow-lg p-6"
            >
              <div className="flex items-start justify-between">
                {/* Left section */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                    <Award className="h-4 w-4 text-purple-600" />
                    {cert.title}
                  </h4>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <Building2 className="h-3 w-3" />
                    {cert.issuer}
                  </p>
                </div>

                {/* Right section */}
                <div className="text-right space-y-2">
                  <span className="inline-block border border-purple-600 text-purple-600 text-xs font-medium px-2 py-1 rounded-full">
                    {cert.type}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500 justify-end">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
