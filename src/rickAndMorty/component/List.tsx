import React, { FC } from 'react';
import { Episodes, Episode } from '../../rickAndMorty/types';
import { ListStyled } from '../styled';
import ItemEpisode from './ItemEpisode';

export interface ListProps {
  episodes: Episodes;
  favorites: Episodes;
  toggleFavorite: (episode: Episode) => void;
  seasonFilter: number;
}

const getDisplayedEpisodes = (episodes: Episodes, seasonFilter: number) => {
  if (seasonFilter !== 0) {
    return episodes.filter(ep => ep.season === seasonFilter);
  }

  return episodes;
};

const List: FC<ListProps> = ({ episodes, favorites, toggleFavorite, seasonFilter }) => {
  const displayedEpisodes = getDisplayedEpisodes(episodes, seasonFilter);

  return (
    <ListStyled>
      {(displayedEpisodes as Array<Episode>).map((episode: Episode) => {
        const isFavorite = favorites.some(ep => ep.id === episode.id);
        return (
          <ItemEpisode
            episode={episode}
            key={episode.id}
            isFavorite={isFavorite}
            toggleFavorite={() => toggleFavorite(episode)}
          />
        );
      })}
    </ListStyled>
  );
};

export default List;
