import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characteristics from "./components/Characteristics";
import Price from "./components/Price";
import AskedQuestion from "./components/AskedQuestion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div className="cont-img-hero">
        <img
          src="./assets/img/imgHero.jpg"
          alt="Imagen de un escritorio de oficina"
          className="img-hero"
        />
      </div>
      <div className="contSections">
        <Hero />
        <Characteristics />
        <Price />
        <AskedQuestion />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
