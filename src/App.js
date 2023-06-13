import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
