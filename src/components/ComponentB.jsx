import React, { useContext } from "react";
import { UserContext, GuestContext } from "./Context";

const ComponentB = () => {
  const userContextValue = useContext(UserContext);
  const guestContextValue = useContext(GuestContext);

  return (
    <>
      <h1>{userContextValue}</h1>
      <h1>{guestContextValue}</h1>
    </>
  );
};

export default ComponentB;
