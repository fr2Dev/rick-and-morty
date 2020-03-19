import React, { FC } from 'react';
import { InfosEpisode } from '../types';
import { ItemStyled } from '../styled';

export interface ItemEpisodeProps {
  episode: InfosEpisode;
}

const ItemEpisode: FC<ItemEpisodeProps> = ({ episode }) => {
  const { name, image, season, number } = episode;
  const epNumber = number < 10 ? `0${number}` : number;

  return (
    <ItemStyled imgSrc={image.medium} season={season}>
      <div>
        <p>{name}</p>
        <div>
          <div>{`S${season}`}</div>
          <div>{epNumber}</div>
        </div>
      </div>
    </ItemStyled>
  );
};

export default ItemEpisode;
