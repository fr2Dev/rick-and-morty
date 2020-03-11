import React from 'react';
import { Textfield, useTextfield } from './component/Textfield';
import useTodo from './component/useTodo';
import { Todos, Todo } from './component/useTodo';
import Counter from './component/Counter';
import Characters from './component/Characters';
import Dogs from './component/Dogs';
import './App.css';

type FormEvent = React.FormEvent<HTMLFormElement>;

const App = () => {
  const { input, handleInput, resetInput } = useTextfield();
  const { todos, add, remove, toggleDone } = useTodo();

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    add(input);
    resetInput();
  };

  const getList = (todos: Todos): JSX.Element | void => {
    if (todos.length > 0) {
      return (
        <ul>
          {todos.map((todo: Todo, i: number) => {
            const { value, isDone } = todo;
            const textDecoration: string = isDone ? 'line-through' : '';

            return (
              <li key={i}>
                <span onClick={() => remove(i)} style={{ textDecoration }}>
                  {value}
                </span>
                <input type="checkbox" checked={isDone} onChange={() => toggleDone(i)} />
              </li>
            );
          })}
        </ul>
      );
    }
  };

  const List = getList(todos);

  return (
    <div className="App">
      <Dogs />
      <Counter />
      <Characters />
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          {List}
          <Textfield value={input} onChange={handleInput} />
          <button type="submit">Add</button>
        </form>
      </header>
    </div>
  );
};

export default App;
