import React from 'react';
import logo from './logo.svg';
import { Textfield, useTextfield } from './component/Textfield';
import './App.css';

const App = () => {
  const { input, handleInput } = useTextfield();

  return (
    <div className="App">
      <header className="App-header">
        <Textfield value={input} onChange={handleInput} />
      </header>
    </div>
  );
};

export default App;
