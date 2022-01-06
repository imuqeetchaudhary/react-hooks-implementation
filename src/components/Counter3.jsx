import React, { useState } from "react";

const Counter3 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your firstName is - {name.firstName}</h2>
      <h2>Your firstName is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default Counter3;
