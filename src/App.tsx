// import React from 'react';
// import logo from './logo.svg';
import './style/App.css';
import NavBar from './component/navbar.tsx';
import About from './component/about.tsx';
import Work from './component/work.tsx';
// import Contact from './component/contact.tsx'
import Footer from './component/Footer.tsx';

function App() {
  return (
    <div className="flex-auto flex-col font-sans">
    <NavBar />
    <About id="about" />
    <Work id="work"/>
    <Footer id="footer"/>
    </div>
  );
}

export default App;
