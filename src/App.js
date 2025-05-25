import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";

function App() {
  return (
    <div className="App scroll-smooth">
      {" "}
      {/* Přidání smooth scroll pro celou aplikaci */}
      <Navbar />
      <Hero />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
