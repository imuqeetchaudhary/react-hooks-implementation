import React, { useRef } from "react";
import RefChild from "./RefChild";

const RefParent = () => {
  const ChildElement = useRef();

  const handleCLick = () => {
    const name = ChildElement.current.getMyState();
    console.log(name);
    ChildElement.current.setMyState();
  };
  return (
    <div>
      <RefChild ref={ChildElement} />
      <button onClick={handleCLick}>Change Name</button>
    </div>
  );
};

export default RefParent;
