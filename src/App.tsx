import "./App.css";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Stacks from "./components/sections/Stacks";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />

      <Hero />

      <About />

      <Stacks />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
