import GlobalStyle from "./styles/global";
import Header from "./components/layout/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Certifications from "./sections/Certifications/Certifications";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
