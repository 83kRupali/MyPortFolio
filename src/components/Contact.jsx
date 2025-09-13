import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-purple-50">
      <div className="container max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, and
            collaborations. Feel free to reach out!
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
            <p className="text-gray-600">
              Ready to work together or have any questions? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-gray-600 break-all">
                rupali.22310690@viit.ac.in
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-gray-600">+91-9373080596</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-gray-600">Pune, India</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:rupali.22310690@viit.ac.in"
              className="flex items-center justify-center px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </a>

            <a
              href="tel:+919373080596"
              className="flex items-center justify-center px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold shadow-sm hover:bg-gray-100 transition"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t pt-8">
            <h3 className="text-center font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/83kRupali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Github className="h-5 w-5 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/83krupali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
              <a
                href="https://leetcode.com/u/Rupali_Ramteke/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <ExternalLink className="h-5 w-5 text-gray-700" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/rupaliramapuv/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <ExternalLink className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
