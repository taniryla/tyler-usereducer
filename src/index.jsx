import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Slider({ onChange, min, max }) {
  const [value, setValue] = useState(1);


    return (
      <>
        {value}
        <input 
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const value = Number(e.target.value)
          onChange(value)
          setValue(value)
        }}
        />
      </>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
