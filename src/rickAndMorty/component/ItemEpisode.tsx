import React, { FC } from 'react';
import { InfosEpisode } from '../types';
import { ItemStyled } from '../styled';

export interface ItemEpisodeProps {
  episode: InfosEpisode;
}

const ItemEpisode: FC<ItemEpisodeProps> = ({ episode }) => {
  const { name, image } = episode;

  return (
    <ItemStyled>
      <img src={image.medium} alt={name} />
      <p>{name}</p>
    </ItemStyled>
  );
};

export default ItemEpisode;
