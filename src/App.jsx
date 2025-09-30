import { Routes, Route } from "react-router-dom";

import Navbar from "./navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
     <Home/>
     <About/>
     <Contact/>
    </>
  );
}

export default App;
