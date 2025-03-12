// import React from 'react';
// import logo from './logo.svg';
import './style/App.css';
import NavBar from './component/navbar.tsx';
import About from './component/about.tsx';
import Work from './component/work.tsx';
// import Contact from './component/contact.tsx'
import Footer from './component/Footer.tsx';
import { Element } from "react-scroll";
function App() {
  return (
    <div className="flex-auto flex-col font-sans">
    <NavBar />
    <Element name="about">
    <About  />
    </Element>
    <Element name="work">
    <Work />
    </Element>
    <Element name="footer">
    <Footer />
    </Element>
    </div>
  );
}

export default App;
