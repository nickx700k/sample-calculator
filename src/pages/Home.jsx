import React, { useState } from "react";
import "./Home.scss";

export default function Home() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (
      result.slice(0, result.length).includes(["."]) &&
      e.target.name === "."
    ) {
      setResult(result);
    } else if (
      result.slice(0, result.length).includes(["."]) &&
      e.target.name != "."
    ) {
      setResult(result.concat(e.target.name));
    } else {
      setResult(result.concat(e.target.name));
    }
  };

  const handleClear = () => {
    setResult("");
  };

  const handleC = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="Home">
      <div className="Calculator">
        <input type="text" className="Calculator--input" value={result} />
        <div className="Calculator--keypad">
          <button
            className="Calculator--clear"
            name="clear"
            onClick={handleClear}
          >
            Clear
          </button>
          <button name="C" onClick={handleC}>
            C
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="Calculator--equale" name="=" onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
