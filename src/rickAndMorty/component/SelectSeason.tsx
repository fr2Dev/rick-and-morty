import React, { FC } from 'react';

export interface SelectSeasonProps {
  setFilter: (seasonNumber: number) => void;
}

const seasonNums = [...Array(4)].map((_, i) => i + 1);

const SelectSeason: FC<SelectSeasonProps> = ({ setFilter }) => {
  const filterSeason = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(+e.target.value);
  };

  return (
    <select onChange={filterSeason}>
      <option value={0} key={0}>
        All
      </option>
      {seasonNums.map(number => (
        <option value={number} key={number}>
          Season {number}
        </option>
      ))}
    </select>
  );
};

export default SelectSeason;
