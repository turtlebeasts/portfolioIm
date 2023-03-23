import React, { useContext } from "react";
import themeContext from "../../context/themecontext"
import "./navbar.css";

export default function Navbar() {
  const {color} = useContext(themeContext)
  return (
    <div className="navbar">
      <i className="fa-solid fa-sun" style={{ paddingTop: "2rem", color: color }}></i>
      <h1 className="navbrand">Turtle<span className="date" style={{color: color}}>beasts</span></h1>
      <span className="date" style={{color: color}}>
        2023
        <br />-<br />
        2025
      </span>
    </div>
  );
}
