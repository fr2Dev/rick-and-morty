import * as React from 'react';

const useTextfield = (initialState: string = '') => {
  const [input, setInput] = React.useState(initialState);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  return { input, handleInput };
};

export default useTextfield;
