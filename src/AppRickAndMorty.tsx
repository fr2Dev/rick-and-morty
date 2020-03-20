import React, { FC, useEffect, Fragment } from 'react';
import useLogic from './rickAndMorty/useLogic';
import { List, Loader, SelectSeason, Search } from './rickAndMorty/component';
import { ContainerCenter, AppContainer } from './rickAndMorty/styled';
import { EpisodesState } from './rickAndMorty/interfaces';
import { Episodes } from './rickAndMorty/types';

export interface AppRickAndMortyProps {}

const initialState: EpisodesState = {
  isLoading: false,
  episodes: [],
  favorites: [],
  error: '',
  seasonFilter: 0,
  search: ''
};

const AppRickAndMorty: FC<AppRickAndMortyProps> = () => {
  const {
    state,
    setLocalFavorites,
    fetchData,
    toggleFavorite,
    setFilter,
    setSearchValue
  } = useLogic(initialState);
  const { episodes, favorites, isLoading, error, seasonFilter, search } = state;

  useEffect(() => {
    fetchData();

    if (localStorage.length > 0 && localStorage.getItem('favoritesEpisode')) {
      // We have items
      const localFavorites: Episodes = JSON.parse(
        localStorage.getItem('favoritesEpisode') as string
      );
      setLocalFavorites(localFavorites);
    }
  }, []);

  return (
    <AppContainer>
      {isLoading ? (
        <ContainerCenter>
          <Loader style={{ width: '100px' }} />
        </ContainerCenter>
      ) : error.length > 0 ? (
        <p>{error}</p>
      ) : (
        <Fragment>
          <div>
            <SelectSeason setFilter={setFilter} />
            <Search setSearchValue={setSearchValue} search={search} />
          </div>
          <List
            episodes={episodes}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            seasonFilter={seasonFilter}
            search={search}
          />
        </Fragment>
      )}
    </AppContainer>
  );
};

export default AppRickAndMorty;
