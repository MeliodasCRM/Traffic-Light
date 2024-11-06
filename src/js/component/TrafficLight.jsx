import React, { useState } from "react";

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [showPurple, setShowPurple] = useState(false);

  function randomSelect() {
    let colors = ["green", "red", "yellow", "purple"];
    let randomColor = Math.floor(Math.random() * colors.length);
    setSelectedColor(colors[randomColor]);
  }

  // function allPurple() {
  //   setSelectedColor("purple");
  // }

  return (
    <div className="container">
      <div onClick={randomSelect} className="randomButton">
        <button> Click for a random color!</button>
      </div>
      {/* bOTON para mostrar y ocultar el morado */}
      <div onClick={() => setShowPurple(!showPurple)}>
        <button>Click for purple</button>
      </div>
      {/* <div onClick={allPurple} className="purpleButton">
        <button> Set all purple!</button>
      </div> */}
      <div className="lights">
        <div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "") //+ (selectedColor === "purple" ? " purple glow" : "")
        } ></div>
        <div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "") //+ (selectedColor === "purple" ? " purple glow" : "")
        } ></div>
        <div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "") //+ (selectedColor === "purple" ? " purple glow" : "")
        } ></div>
        {/* Condicional para la luz morada */}
        {showPurple && (
          <div onClick={() => setSelectedColor("purple")} className={"light purple" + (selectedColor === "purple" ? " glow" : "")}
          ></div>
        )}
      </div>
      <div className="stick"></div>
      <div className="floor"></div>
    </div>
  );
};

export default TrafficLight;