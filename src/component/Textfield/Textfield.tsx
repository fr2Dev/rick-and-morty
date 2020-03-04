import * as React from 'react';

// type InputEvent = UserKeyDownEvent | UserMouseEvent;

type InputEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface TextfieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: InputEvent) => boolean | void;
}

const Textfield: React.FC<TextfieldProps> = ({ value, onChange, onKeyDown }) => (
  <input value={value} onChange={onChange} onKeyDown={onKeyDown} />
);

export default Textfield;
