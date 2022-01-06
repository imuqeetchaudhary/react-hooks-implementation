import React, { useState, useEffect } from "react";

const EffectCounter1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`useEffect() - Updating the document title`);
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>CLicked {count} times</button>
    </>
  );
};

export default EffectCounter1;
