import { Header } from "./components/Header/Header";
import { Home } from "./sections/Home/Home";
import { About } from "./sections/About/About";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer/Footer";
import { Projects } from "./sections/Projects/Projects";
import { Experience } from "./sections/Experience/Experience";
import { TechStack } from "./sections/TechStack/TechStack";
import { Certifications } from "./sections/Certifications/Certifications";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}

export default App;
