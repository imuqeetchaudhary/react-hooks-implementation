import React, { useEffect, useRef } from "react";

const FocuInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};

export default FocuInput;
