import React, { useState, useEffect } from "react";

const EffectMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log(`Mouse event`);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect((e) => {
    console.log(`useEffect() Called`);
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log(`Unmounted Mouse Container`);
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <h1>
      X - {x} & Y - {y}
    </h1>
  );
};

export default EffectMouse;
