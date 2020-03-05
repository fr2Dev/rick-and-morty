import { useState } from 'react';

interface Todo {
  value: string;
  isDone: boolean;
}

interface UseTodo {
  add: Add;
  todos: Todos;
  remove: (index: number) => void;
}

type Todos = Todo[];

type Add = (todo: string) => void;

const useTodo = (): UseTodo => {
  const [todos, setTodos] = useState<Todos>([]);

  const add = (todo: string): void => {
    if (todo.length > 0) setTodos([...todos, { value: todo, isDone: false }]);
  };
  const remove = (index: number): void => {
    todos.splice(index, 1);
    setTodos([...todos]);
    console.log(
      '%c☘ %c[...todos]%c:',
      'font-weight:bold;color: #0F9D58;font-size:1.2em;',
      'font-weight:bold;border-bottom:2px solid #0F9D58;',
      'font-weight:bold;',
      [...todos]
    );
  };
  return { todos, add, remove };
};

export default useTodo;
