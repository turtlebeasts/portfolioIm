import React, { useContext } from "react";
import "./navigation.css";
import themeContext from "../../context/themecontext";

export default function Navigation({Switch}=prop) {
  const {color} = useContext(themeContext)
  return (
    <div className="navigation">
      <div className="wrapper" style={{borderBlockColor: color}}>
        <ul className="icons">
          <li>
            <a onClick={()=>Switch(0)}>
              <i className="fa-solid fa-house"></i>
            </a>
          </li>
          <li>
            <a onClick={()=>Switch(1)}>
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
          <li>
            <a onClick={()=>Switch(2)}>
              <i className="fa-solid fa-diagram-project"></i>
            </a>
          </li>
          <li>
            <a onClick={()=>Switch(3)}>
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
        <ul className="names">
          <li>
            <a href="#" onClick={()=>Switch(0)}>HOME</a>
          </li>
          <li>
            <a href="#" onClick={()=>Switch(1)}>ABOUT</a>
          </li>
          <li>
            <a href="#" onClick={()=>Switch(2)}>RESUME</a>
          </li>
          <li>
            <a href="#" onClick={()=>Switch(3)}>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
