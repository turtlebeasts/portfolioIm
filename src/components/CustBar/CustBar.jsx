import React, { useState } from "react";
import "./custbar.css";
import Picker from "./picker/Picker";

export default function CustBar() {
    const [hidden, setHidden] = useState(true)
  return (
    <div className="cust-bar">
      <div className="color-drawer">
        <div className="color-pallet" style={{display: hidden?"none":"block"}}>
            <Picker toggle={setHidden}/>
        </div>
        <span onClick={()=>setHidden(!hidden)}>
          <p>Choose accent color</p>
          <i className="fa-solid fa-caret-down"></i>
        </span>
      </div>
    </div>
  );
}
