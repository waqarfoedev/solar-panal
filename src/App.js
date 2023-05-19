import Header from "./Layout/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={[<Header />, <Hero />, <About />]}></Route>
    </Routes>
  );
}

export default App;
