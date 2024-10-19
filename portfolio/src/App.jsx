import {useRef} from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Programming from "./Components/Programming";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer"; 
import ConfettiEffect from "./Components/ConfettiEffect";
function App() {
  const footref = useRef(null);
  const projectsref = useRef(null);
  const onCertificates = useRef(null);

  const contactClick = () => {
    if (footref.current) {
      footref.current.scrollIntoView({ behaviour: "smooth" });
    }
  };

  const projectsClick = () => {
    if (projectsref.current) {
      projectsref.current.scrollIntoView({ behaviour: "smooth" });
    }
  };
  const certificatesClick = () => {
    if (onCertificates.current) {
      onCertificates.current.scrollIntoView({ behaviour: "smooth" });
    }
  };

  return (
    <>
      <ConfettiEffect />
      <Navbar
        onContactClick={contactClick}
        onProjectsClick={projectsClick}
        onCertificates={certificatesClick}
      />
      <Hero />
      <Programming />
      <Projects ref={projectsref} />
      <Certificates ref={onCertificates} />
      <Footer ref={footref} />
    </>
  );
}

export default App;