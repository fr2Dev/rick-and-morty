import * as React from 'react';

interface TextfieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textfield: React.FC<TextfieldProps> = ({ value, onChange }) => (
  <input value={value} onChange={onChange} />
);

export default Textfield;
