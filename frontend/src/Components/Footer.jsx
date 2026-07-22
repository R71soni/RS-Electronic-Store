import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-slate-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold text-orange-400">
              RS Electronics
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Discover the latest electronics, premium gadgets,
              accessories, laptops, smartphones and much more with
              trusted quality and fast delivery.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
              <li><Link to="/career" className="hover:text-orange-400">Careers</Link></li>
            </ul>
          </div>

          {/* Shopping */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Shopping
            </h3>

            <ul className="space-y-3">
              <li>Mobiles</li>
              <li>Laptops</li>
              <li>Smart Watches</li>
              <li>Gaming</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Customer Care
            </h3>

            <ul className="space-y-3">
              <li>Help Center</li>
              <li>Track Order</li>
              <li>Return Policy</li>
              <li>Shipping</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-4">
              Subscribe for latest offers and product launches.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 outline-none"
            />

            <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 py-2 rounded-md font-semibold transition">
              Subscribe
            </button>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">

          <div>
            <h4 className="text-lg font-semibold text-white">
              Customer Support
            </h4>

            <p className="text-gray-400 mt-2">
              📍 Gurugram, Haryana
            </p>

            <p className="text-gray-400">
              📞 +91 98765 43210
            </p>

            <p className="text-gray-400">
              📧 support@rselectronics.com
            </p>
          </div>

          <div className="flex gap-6 mt-6 lg:mt-0 text-lg">
            <a href="#" className="hover:text-orange-400">Facebook</a>
            <a href="#" className="hover:text-orange-400">Instagram</a>
            <a href="#" className="hover:text-orange-400">LinkedIn</a>
            <a href="#" className="hover:text-orange-400">GitHub</a>
          </div>

        </div>

        <div className="text-center border-t border-gray-700 mt-8 pt-6 text-gray-500 text-sm">
          © 2026 <span className="text-orange-400 font-semibold">RS Electronics</span>. Designed & Developed by <span className="text-white">Ritesh & Rakesh Singh Bhandari</span>.
        </div>

      </div>
    </footer>
  );
};

export default Footer;