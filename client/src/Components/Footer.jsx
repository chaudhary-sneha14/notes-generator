import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/20 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ExamNotes AI
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-sm">
              AI-powered smart notes platform designed to help students
              study faster, stay organized, and learn effectively.
            </p>

            {/* Social Icons */}
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/history"
                  className="hover:text-blue-400 transition duration-200"
                >
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ExamNotes AI. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with ❤️ Sneha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;