import React, { useContext } from "react";
import "./picker.css";
import themeContext from "../../../context/themecontext"; "../../../context/themecontext"

const colors = ["blueviolet", "purple", "orange", "grey", "red"];

export default function Picker({toggle}) {
  const {setColor} = useContext(themeContext)
  return (
    <div className="picker">
      {colors.map((color) => {
        return (
          <button className="color-button" key={color} style={{backgroundColor: color}} onClick={()=>setColor(color)}>
            <i className="fa-regular fa-star"></i>
          </button>
        );
      })}
    </div>
  );
}
