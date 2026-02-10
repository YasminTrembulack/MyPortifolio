import { Header } from "./components/Header/Header";
import { Home } from "./sections/Home/Home";
import { About } from "./sections/About/About";
import { GlobalStyle } from "./styles/global";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
