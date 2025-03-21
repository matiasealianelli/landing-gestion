import React from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characteristics from "./components/Characteristics";
import Price from "./components/Price";
import AskedQuestion from "./components/AskedQuestion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Characteristics />
      <Price />
      <AskedQuestion />
      <Contact />
      <Footer />
    </>
  )
}

export default App
