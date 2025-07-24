import './style/App.css';
import NavBar from './component/navbar.tsx';
import About from './component/about.tsx';
import Work from './component/work.tsx';
import Footer from './component/Footer.tsx';

import { motion } from "framer-motion";
import { Element } from "react-scroll";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900" style={{ backgroundImage: "url('rocket_launch.png')" }}>
      <NavBar />

      <main className="flex flex-col flex-1 bg-white-200/50 backdrop-blur-sm">
        <Element name="about">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeVariants}
            className="w-full"
          >
            <About />
          </motion.div>
        </Element>

        <Element name="work">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeVariants}
            className="w-full"
          >
            <Work />
          </motion.div>
        </Element>

        <Element name="footer">
          <Footer />
        </Element>
      </main>
    </div>
  );
}
