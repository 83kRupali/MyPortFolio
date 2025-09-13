import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BTech in Computer Engineering",
      institution: "Vishwakarma Institute of Information Technology",
      location: "Pune, Maharashtra, India",
      duration: "Aug 2023 – Present",
      grade: "8.19 CGPA",
      status: "current",
    },
    {
      degree: "HSC Board",
      institution: "Bhawanjibhai Chauhan College",
      location: "Chandrapur, Maharashtra, India",
      duration: "Aug 2021 – Mar 2023",
      grade: "82.67%",
      status: "completed",
    },
    {
      degree: "SSC Board",
      institution: "Priyadarshani Kanya Vidyalaya School",
      location: "Chandrapur, Maharashtra, India",
      duration: "2021",
      grade: "95.80%",
      status: "completed",
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600">
            Academic journey and achievements in computer engineering
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
            >
              <div className="flex items-start justify-between">
                {/* Left Side */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900">
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                    {edu.degree}
                  </h3>
                  <p className="text-base font-medium text-gray-700">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="text-right space-y-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === "current"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {edu.status === "current" ? "In Progress" : "Completed"}
                  </span>
                  <div className="text-lg font-bold text-purple-600">
                    {edu.grade}
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

export default Education;
