import React, { FC, Fragment } from 'react';
import { Episodes, Episode } from '../../rickAndMorty/types';
import { ListStyled } from '../styled';
import ItemEpisode from './ItemEpisode';

export interface ListProps {
  episodes: Episodes;
  favorites: Episodes;
  toggleFavorite: (episode: Episode) => void;
  seasonFilter: number;
  search: string;
}

const getFilteredEpisodes = (episodes: Episodes, seasonFilter: number) => {
  if (seasonFilter !== 0) {
    return episodes.filter(ep => ep.season === seasonFilter);
  }

  return episodes;
};

const getSearchEpisodes = (episodes: Episodes, searchValue: string) => {
  if (searchValue === '') return episodes;

  const searchedEpisodes = episodes.filter((ep: Episode): boolean => {
    return ep.name.toLowerCase().includes(searchValue);
  });

  return searchedEpisodes;
};

const List: FC<ListProps> = ({ episodes, favorites, toggleFavorite, seasonFilter, search }) => {
  const filteredEpisodes = getFilteredEpisodes(episodes, seasonFilter);
  const searchedEpisodes = getSearchEpisodes(filteredEpisodes, search);
  const noResultFound = searchedEpisodes.length === 0;

  return (
    <Fragment>
      {noResultFound ? (
        <div style={{ color: '#fff' }}>No result found</div>
      ) : (
        <ListStyled>
          {(searchedEpisodes as Array<Episode>).map((episode: Episode) => {
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
      )}
    </Fragment>
  );
};

export default List;
