
import './App.css';
import  Header from './components/Header/Header';
import  About  from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
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
