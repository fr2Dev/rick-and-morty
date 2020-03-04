import * as React from 'react';

export type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export type MouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

// export type AddTodoEvent = KeyboardEvent | MouseEvent;

export type AddTodoEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;
