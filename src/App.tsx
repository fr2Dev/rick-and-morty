import React from 'react';
import { Textfield, useTextfield } from './component/Textfield';
import useTodo from './component/useTodo';
import './App.css';

type InputEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;

const getTypeGuardKeyboardEvent = (
  event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
): event is React.KeyboardEvent<HTMLInputElement> => {
  return 'key' in event;
};

const App = () => {
  const { input, handleInput, resetInput } = useTextfield();
  const { todos, add, remove } = useTodo();
  const addTodo = (event: InputEvent): boolean | void | undefined => {
    const isKeyboardEvent = getTypeGuardKeyboardEvent(event);
    if (isKeyboardEvent && (event as React.KeyboardEvent<HTMLInputElement>).key !== 'Enter')
      return false;

    add(input);
    resetInput();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ul>
            {todos.length > 0 &&
              todos.map((task, i) => (
                <li key={i.toString()} onClick={() => remove(i)}>
                  {task.value}
                </li>
              ))}
          </ul>
        </div>
        <Textfield value={input} onChange={handleInput} onKeyDown={addTodo} />
        <button onClick={addTodo}>Add</button>
      </header>
    </div>
  );
};

export default App;
