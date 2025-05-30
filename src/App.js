import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Collab from "./components/Collab";
import Player from "./components/Player";


import Footer from "./components/Footer"; // přidáno


function App() {
  return (
    <div className="App scroll-smooth font-myfont">
      {/* Přidání smooth scroll pro celou aplikaci a vlastního fontu */}
      <Navbar />
      <Hero />
      <About />
      <section id="player">
      <Collab /> {/* přidáno */}
      <Player />
      </section>

      <Gallery />
      <Footer />

    </div>
  );
}

export default App;
