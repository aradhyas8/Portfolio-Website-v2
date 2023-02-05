
import './App.css';
import  Header from './components/Header/Header';
import  About  from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Socials from './components/Socials/Socials';
import Cards from './components/Projects/Cards';

function App() {
  return (
    <>
    <Navbar />
    <Socials />
    <Header />
    <About />
    <Experience />
    <Cards />

    <Contact />
    <Footer />
    </>
  );
}

export default App;
