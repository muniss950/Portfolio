
// import React from 'react';
import '../style/App.css';
import { Link } from "react-scroll";
import logo from '../logo.svg';

function NavBar() {
  return (
    <header className="flex justify-between items-center bg-[#222831] rounded-lg p-4 shadow-lg sticky top-0 z-50 h-24">
      {/* Logo + Title */}
      <div className="flex items-center space-x-4">
        <img className="h-12 w-12" src={logo} alt="logo" />
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="about" smooth={true} duration={500}>
          <button className="px-4 py-2 text-lg font-semibold text-white rounded hover:bg-[#393E46] transition duration-200">
            About
          </button>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <button className="px-4 py-2 text-lg font-semibold text-white rounded hover:bg-[#393E46] transition duration-200">
            Work
          </button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button className="px-4 py-2 text-lg font-semibold text-white rounded hover:bg-[#393E46] transition duration-200">
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
