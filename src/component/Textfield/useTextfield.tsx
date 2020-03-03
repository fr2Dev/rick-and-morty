import { useState, ChangeEvent } from 'react';

const useTextfield = (initialState: string = '') => {
  const [input, setInput] = useState(initialState);
  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  // TODO: on key down event.key === 13

  return { input, handleInput };
};

export default useTextfield;
