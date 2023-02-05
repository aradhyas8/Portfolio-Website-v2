import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import NavMobile from "./components/Navbar/NavMobile";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Tabs from "./components/Experience/Tabs";

function App() {
  return (
    <>
      <Navbar />
      <NavMobile />
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
