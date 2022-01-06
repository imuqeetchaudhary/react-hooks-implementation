import React, { useState } from "react";

const Counter2 = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      Click: {count}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementBy5}>Increment By 5</button>
    </>
  );
};

export default Counter2;
