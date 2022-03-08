import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Slider({ onChange, min, max }) {
  const [value, setValue] = useState(1);

  function reducer(state, action) {
    if (action.type === "increment") {
      return {
        count: state.count + state.step,
        step: state.step
      };
    } else if (action.type === "decrement") {
      return {
        count: state.count - state.step,
        step: state.step
      };
    } else if (action.type === "reset") {
      return {
        count: 0,
        step: state.step
      };
    } else if (action.type === "updateStep) {
      return {
        count: state.count,
        step: action.step
      }
    } else {
      throw new Error();
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

    return (
      <>
        <Slider
          min={1}
          max={10}
          onChange={(value) =>
            dispatch({
              type: "updateStep",
              step: value
            })
          }
        />
        <hr></hr>s{value}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => {
            const value = Number(e.target.value);
            onChange(value);
            setValue(value);
          }}
        />
        <h1>{state.count}</h1>
        <button onClick={() => dispatch("increment")}>+</button>
        <button onClick={() => dispatch("decrement")}>-</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
