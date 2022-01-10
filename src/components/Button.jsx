import React, { memo } from "react";

const Button = ({ handleClick, children }) => {
  console.log(`Rendering - ${children}`);
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default memo(Button);
