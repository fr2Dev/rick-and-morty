import React from 'react';
import { Textfield, useTextfield } from './component/Textfield';
import useTodo from './component/useTodo';
import './App.css';

const App = () => {
  const { input, handleInput } = useTextfield();
  const { todos, add } = useTodo();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul>{todos.length > 0 && todos.map(task => <li>{task.value}</li>)}</ul>
        </div>
        <Textfield value={input} onChange={handleInput} />
        <button onClick={() => add(input)}>Add</button>
      </header>
    </div>
  );
};

export default App;
