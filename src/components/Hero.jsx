

import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        {/* Card wrapper */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              {/* Name + Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Rupali Ramteke
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-purple-600">
                  Full-Stack Developer
                </h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Pune, India</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate full-stack developer with expertise in modern web
                technologies. Currently pursuing BTech in Computer Engineering
                with a strong foundation in data structures, algorithms, and
                software engineering principles.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:rupali.22310690@viit.ac.in"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
                <a
                  href="tel:+919373080596"
                  className="flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-xl font-medium text-gray-800 hover:bg-gray-100 transition"
                >
                  <Phone className="h-4 w-4" />
                  +91-9373080596
                </a>
                {/* Resume Download Button */}
                
                <a
                  href="/src/assets/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-purple-600 text-purple-600 px-5 py-3 rounded-xl font-medium hover:bg-purple-50 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/83kRupali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/83krupali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://leetcode.com/u/Rupali_Ramteke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg border-4 border-purple-200">
                  <img
                    src="https://res.cloudinary.com/dknz9umvs/image/upload/v1757839585/profile_tr1fn9.jpg"
                    alt="Rupali Ramteke - Full-Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">BTech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
