import React, { useReducer } from "react";

function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;

      const hasError = newCount > 10;
      if (hasError)
        return { ...state, error: "Count cannot be greater than 10" };

      return { ...state, count: state.count + 1, error: null };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 1;
      if (hasError) return { ...state, error: "Count cannot be less than 1" };

      return { ...state, count: state.count - 1, error: null };
    }

    default:
      return state;
  }
}

function UseReducer() {
  // initial state of the useReducer hook
  const initialState = {
    count: 1,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col justify-center items-center mt-15">
      <div>Count: {state.count}</div>
      {state.error && <p className="text-red-500 text-xl">{state.error}</p>}
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="text-white rounded-xl cursor-pointer mb-2 mt-2 p-4 bg-blue-500"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="text-white rounded-xl cursor-pointer mb-2 mt-2 p-4 bg-orange-500"
      >
        Decrement
      </button>
    </div>
  );
}

export default UseReducer;
