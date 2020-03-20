import React, { FC } from 'react';
import { Episode } from '../types';
import { ItemStyled } from '../styled';
import { Star, StarEmpty } from '../component';

export interface ItemEpisodeProps {
  episode: Episode;
  isFavorite: boolean;
  toggleFavorite: (episode: Episode) => void;
}

const ItemEpisode: FC<ItemEpisodeProps> = ({ episode, isFavorite, toggleFavorite }) => {
  const { name, image, season, number } = episode;
  const epNumber = number < 10 ? `0${number}` : number;

  return (
    <ItemStyled imgSrc={image.medium} season={season}>
      <div onClick={() => toggleFavorite(episode)}>{isFavorite ? <Star /> : <StarEmpty />}</div>
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
