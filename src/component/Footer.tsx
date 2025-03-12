
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-600 text-white py-6 ">
    <h1 className="text-6xl text-center">Follow me</h1>
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 py-1">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/in/munis-shafiq"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={35} />
          </a>
          <a
            href="https://leetcode.com/munish42"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://github.com/muniss950"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <Github size={35} />
          </a>
          <a
            href="mailto:munish3971@gmail.com"
            className="hover:text-red-400 transition"
          >
            <Mail size={35} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Munis Shafiq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
