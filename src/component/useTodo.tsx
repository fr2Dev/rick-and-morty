import { useState } from 'react';

interface Todo {
  value: string;
  isDone: boolean;
}

interface UseTodo {
  add: Add;
  todos: Todos;
}

type Todos = Todo[];

type Add = (todo: string) => void;

const useTodo = (): UseTodo => {
  const [todos, setTodos] = useState<Todos>([]);

  const add = (todo: string): void => {
    setTodos([...todos, { value: todo, isDone: false }]);
  };
  return { todos, add };
};

export default useTodo;
