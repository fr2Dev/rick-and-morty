import React, { FC, useEffect, Fragment } from 'react';
import useLogic from './rickAndMorty/useLogic';
import { List, Loader, SelectSeason, Search } from './rickAndMorty/component';
import { ContainerCenter, AppContainer } from './rickAndMorty/styled';

export interface AppRickAndMortyProps {}

const AppRickAndMorty: FC<AppRickAndMortyProps> = () => {
  const { state, fetchData, toggleFavorite, setFilter, setSearchValue } = useLogic();
  const { episodes, favorites, isLoading, error, seasonFilter, search } = state;

  useEffect(() => {
    fetchData();
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
