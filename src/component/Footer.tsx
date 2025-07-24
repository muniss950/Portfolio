
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-800/70 background-blur-md text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6 px-4">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center">Follow Me</h1>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/in/munis-shafiq"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <Linkedin size={30} />
          </a>
          <a
            href="https://leetcode.com/munish42"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="w-7 h-7"
            />
          </a>
          <a
            href="https://github.com/muniss950"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <Github size={30} />
          </a>
          <a
            href="mailto:munish3971@gmail.com"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <Mail size={30} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Munis Shafiq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
