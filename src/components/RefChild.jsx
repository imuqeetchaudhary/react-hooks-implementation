import React, { useState, useImperativeHandle, forwardRef } from "react";

const RefChild = forwardRef((props, ref) => {
  const [name, setName] = useState("Abdul");

  useImperativeHandle(
    ref,
    () => ({
      getMyState: () => {
        return name;
      },
      setMyState: () => {
        setName("Name Updated");
      },
    }),
    [name]
  );
  return <h1>{name}</h1>;
});

export default RefChild;
