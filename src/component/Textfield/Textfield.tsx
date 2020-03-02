import * as React from 'react';

export interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textfield: React.FC<Props> = ({ value, onChange }) => (
  <input value={value} onChange={onChange} />
);

export default Textfield;
