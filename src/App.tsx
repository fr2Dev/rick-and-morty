import React from 'react';
import { Textfield, useTextfield } from './component/Textfield';
import useTodo from './component/useTodo';
import './App.css';

type FormEvent = React.FormEvent<HTMLFormElement>;

const App = () => {
  const { input, handleInput, resetInput } = useTextfield();
  const { todos, add, remove } = useTodo();

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    add(input);
    resetInput();
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <ul>
            {todos.length > 0 &&
              todos.map((task, i) => (
                <li key={i.toString()} onClick={() => remove(i)}>
                  {task.value}
                </li>
              ))}
          </ul>
          <Textfield value={input} onChange={handleInput} />
          <button type="submit">Add</button>
        </form>
      </header>
    </div>
  );
};

export default App;
