// import React from 'react';
import '../style/App.css';
import { Link } from "react-scroll";
import logo from '../logo.svg';

function NavBar() {
  return (
    <header className="flex  flex-auto flex-nowrap flex-row bg-blue-500 rounded-lg justify-between text-white p-4 shadow-lg sticky top-0 z-50 h-18 min-w-0">
      <div className="flex flex-row content-center">
        <img className="size-13 content-center"src={logo} alt="logo" />
        <h1 className="text-2xl font-bold content-center">Munis Shafiq</h1>
      </div>
      <div className="flex-row flex-nowrap justify-between content-center">
        <Link to="about" smooth={true} duration={500}>
          <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200">About</button>
          </Link>
        <Link to="work" smooth={true} duration={500}>
          <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200">Work</button>
          </Link>
        <Link to="contact" smooth={true} duration={500}>
          <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200">Contact</button>
          </Link>

      </div>
    </header>
  );
}


export default NavBar;


