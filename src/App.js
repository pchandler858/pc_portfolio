import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import Portfolio from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
