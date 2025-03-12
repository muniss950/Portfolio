// import React from 'react';
// import logo from './logo.svg';
import './style/App.css';
import NavBar from './component/navbar.tsx';
import About from './component/about.tsx';
import Work from './component/work.tsx';
// import Contact from './component/contact.tsx'
import Footer from './component/Footer.tsx';

import { motion } from "framer-motion";
import { Element } from "react-scroll";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="flex flex-col h-screen font-sans">
      <NavBar />

      <main className="flex-50 ">

        <Element name="about" >
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeVariants}
            className="w-full"
          >
            <About />
          </motion.div>
        </Element>

        <Element name="work" >
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeVariants}
            className="w-full"
          >
            <Work />
          </motion.div>
        </Element>

        <Element name="footer" >
            <Footer />
        </Element>
      </main>
    </div>
  );
}
