import { useState } from 'react';

export interface Todo {
  value: string;
  isDone: boolean;
}

interface UseTodo {
  add: Add;
  todos: Todos;
  remove: (index: number) => void;
  toggleDone: (index: number) => void;
}

export type Todos = Todo[];

type Add = (todo: string) => void;

const useTodo = (): UseTodo => {
  const [todos, setTodos] = useState<Todos>([]);

  const add = (todo: string): void => {
    if (todo.length > 0) setTodos([...todos, { value: todo, isDone: false }]);
  };

  const remove = (index: number): void => {
    const newTodos: Todos = [...todos];
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  };

  const toggleDone = (index: number): void => {
    const newTodos: Todos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos([...newTodos]);
  };

  return { todos, add, remove, toggleDone };
};

export default useTodo;
