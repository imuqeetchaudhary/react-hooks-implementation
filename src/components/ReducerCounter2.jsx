import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerCounter2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h3>First Counter - {count.firstCounter}</h3>
        <h3>Second Counter - {count.secondCounter}</h3>
      </div>

      {/* Counter 1 */}
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment Counter 1 by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement Counter 1 by 1
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment Counter 1 by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement Counter 1 by 5
        </button>
      </div>

      {/* Counter 2 */}
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Counter 2 by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Counter 2 by 1
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          Increment Counter 2 by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
          Decrement Counter 2 by 5
        </button>
      </div>

      {/* Reset Both Counters */}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default ReducerCounter2;
