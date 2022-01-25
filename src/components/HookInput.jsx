import React from "react";
import useInput from "../hooks/useInput";

const HookInput = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello! ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name: </label>
      <input
        type="text"
        value={bindFirstName.value}
        onChange={bindFirstName.onChange} /* Using Traditional Way  */
      />
      <br />
      <label>Last Name: </label>
      <input type="text" {...bindLastName} /* Using Spread Operator  */ />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HookInput;
