
import './App.css';
import  Header from './components/Header/Header';
import  About  from './components/About/About';
import Experience from './components/Experience/Experience';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Socials from './components/Socials/Socials';
import Projects from './components/Projects/Projects'
import Tabs from './components/Experience/Tabs';

function App() {
  return (
    <>
    <Navbar />
    <Socials />
    <Header />
    <About />

    <Experience />
    <Projects />

    <Contact />
    <Footer />
    </>
  );
}

export default App;
