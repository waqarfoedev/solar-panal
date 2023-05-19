import Header from "./Layout/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";
import SIRE from "./component/SIRE";
import Features from "./component/Features";

function App() {
  return (
    <>
      <div id="hero">
        <Header />
        <Hero />
      </div>
      <About />
      <SIRE />
      <Features />
    </>
  );
}

export default App;
