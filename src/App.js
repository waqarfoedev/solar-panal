import Header from "./Layout/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import SIRE from "./component/SIRE";
import Features from "./component/Features";
import Benefit from "./component/Benefit";
import Offers from "./component/Offers";

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
      <Benefit />
      <Offers />
    </>
  );
}

export default App;
