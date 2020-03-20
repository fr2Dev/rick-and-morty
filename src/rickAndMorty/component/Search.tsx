import React, { FC } from 'react';

export interface SearchProps {
  search: string;
  setSearchValue: (value: string) => void;
}

const Search: FC<SearchProps> = ({ search, setSearchValue }) => {
  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={search}
      onChange={setValue}
      placeholder="Search"
      style={{ marginLeft: '1rem' }}
    />
  );
};

export default Search;
