import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./sections/Home/Home";

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
