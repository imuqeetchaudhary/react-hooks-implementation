import React, { useState, useEffect } from "react";

const EffectCounter1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>CLicked {count} times</button>
  );
};

export default EffectCounter1;
