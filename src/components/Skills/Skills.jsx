import React, { useContext } from "react";
import "./skills.css";
import themeContext from "../../context/themecontext";

export default function Skills(props) {
  const { color } = useContext(themeContext);
  return (
    <div className="skills">
      <h3 style={{minWidth: '6rem'}}>{props.title}</h3>
      <div className="skill-bar"> 
        <div
          className="bar"
          style={{ width: `${props.prof}%`, backgroundColor: color }}
        ></div>
      </div>
      <span>{props.prof}%</span>
    </div>
  );
}
