
// import React from 'react';
import '../style/App.css';
import { Link } from "react-scroll";
import logo from '../logo.svg';

function NavBar() {
  return (
    <header className="flex justify-between items-center bg-blue-600/70 rounded-lg p-4 sticky top-0 z-50 h-15 backdrop-blur-md hover:shadow-md">
      {/* Logo + Title */}
      <div className="overflow-hidden flex  items-center ">
        <img className="h-12 w-12" src={logo} alt="logo" />
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="about" smooth={true} duration={500} offset={-32}>
          <button className="px-4 py-2 text-lg font-semibold text-white rounded hover:bg-blue-600 transition duration-200">
            About
          </button>
        </Link>
        <Link to="work" smooth={true} duration={500} offset={-64}>
          <button className="px-4 py-2 text-lg font-semibold text-white rounded hover:bg-blue-600 transition duration-200">
            Work
          </button>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button className="px-4 py-2 text-lg font-semibold text-white rounded hover:bg-blue-600 transition duration-200">
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
