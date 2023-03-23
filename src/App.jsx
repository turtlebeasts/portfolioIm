import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import CustBar from "./components/CustBar/CustBar";
import themeContext from "./context/themecontext";

function App() {
  const [color, setColor] = useState("red");
  const [index, setIndex] = useState(0);
  const pages = [<Home />, <About />, <Resume />, <Contact />];
  return (
    <themeContext.Provider value={{ color, setColor }}>
      <div className="App">
        <Navbar />
        {pages[index]}
        <Navigation Switch={setIndex} />
        <CustBar />
      </div>
    </themeContext.Provider>
  );
}

export default App;
