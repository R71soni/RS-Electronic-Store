import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
          riteshg
           Electronic
            </h2>

            <p className="mt-4 text-gray-400">
              Learn the latest technologies with free and premium courses.
              Start your programming journey today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/course" className="hover:text-blue-400">
                  Courses
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-blue-400">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/bonus" className="hover:text-blue-400">
                  Bonus
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Categories
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>React JS</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Node JS</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📍 Gurugram, Haryana
            </p>

            <p className="text-gray-400 mt-2">
              📧 ritesh@google.com
            </p>

            <p className="text-gray-400 mt-2">
              📞 +91 9818162941
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © 2026 RS Learning. All Rights Reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">
              Facebook
            </a>

            <a href="#" className="hover:text-blue-400">
              Instagram
            </a>

            <a href="#" className="hover:text-blue-400">
              LinkedIn
            </a>

            <a href="#" className="hover:text-blue-400">
              GitHub
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;