import { useState, ChangeEvent } from 'react';

const useTextfield = (initialState: string = '') => {
  const [input, setInput] = useState(initialState);
  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setInput(value);
  };
  const resetInput = (): void => {
    setInput('');
  };

  return { input, handleInput, resetInput };
};

export default useTextfield;
