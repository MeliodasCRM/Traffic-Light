import React, { useState } from "react";

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [showPurple, setShowPurple] = useState(false);

  function randomSelect() {
    let colors = ["green", "red", "yellow"];
    if (showPurple) {
      colors.push("purple");
    }
    let randomColor = Math.floor(Math.random() * colors.length);
    setSelectedColor(colors[randomColor]);
  }

  function handleRandomClick() {
    randomSelect();
  }

  return (
    <div className="container">
      {/* Botón color random */}
      <div onClick={handleRandomClick} className="randomButton">
        <button> Click for a random color!</button>
      </div>
      {/* botón luz morada */}
      <div onClick={() => setShowPurple(!showPurple)} className="purpleButton">
        <button>Click for purple</button>
      </div>
      {/* Inicio de luces */}
      <div className="lights">
        <div
          onClick={() => setSelectedColor("red")}
          className={"light red" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={"light green" + (selectedColor === "green" ? " glow" : "")}
        ></div>
        {showPurple && (
          <div
            onClick={() => setSelectedColor("purple")}
            className={"light purple" + (selectedColor === "purple" ? " glow" : "")}
          ></div>
        )}
      </div>
      {/* Fin de luces */}
      <div className="stick"></div>
      <div className="floor"></div>
    </div>
  );
};

export default TrafficLight;
