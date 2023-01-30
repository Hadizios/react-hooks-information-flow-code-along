import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF");

  function HandleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
    setChildColor(newRandomColor); // update childColor state to a new value
  }

  console.log(color, "color");

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child
        onChangeColor={HandleChangeColor}
        style={{ backgroundColor: childColor }}
      />
      <Child
        onChangeColor={HandleChangeColor}
        color={{ backgroundColor: childColor }}
      />
    </div>
  );
}

export default Parent;
