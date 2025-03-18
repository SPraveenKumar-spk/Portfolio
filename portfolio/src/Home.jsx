import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import HireMe from "./Components/HireMe";
import Projects from "./Components/Projects";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Experience />
      <HireMe />
      <Footer />
    </>
  );
}

export default Home;
