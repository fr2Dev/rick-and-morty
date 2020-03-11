import React, { FC, useReducer } from 'react';

const Counter = () => {
  const initialState = 0;
  const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
      case 'increase': {
        return state + 1;
      }
      case 'decrease': {
        return state - 1;
      }
      case 'reset': {
        return 0;
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'increase' })}>up</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>down</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
};

export default Counter;
