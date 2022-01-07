import React, { useState } from "react";
import EffectMouse from "./EffectMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {display && <EffectMouse />}
    </>
  );
};

export default MouseContainer;
