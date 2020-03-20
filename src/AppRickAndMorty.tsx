import React, { FC, useEffect, Fragment } from 'react';
import useLogic from './rickAndMorty/useLogic';
import { List, Loader, SelectSeason } from './rickAndMorty/component';
import { ContainerCenter, AppContainer } from './rickAndMorty/styled';

export interface AppRickAndMortyProps {}

const AppRickAndMorty: FC<AppRickAndMortyProps> = () => {
  const { state, fetchData, toggleFavorite, setFilter } = useLogic();
  const { episodes, favorites, isLoading, error, seasonFilter } = state;

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
          <SelectSeason setFilter={setFilter} />
          <List
            episodes={episodes}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            seasonFilter={seasonFilter}
          />
        </Fragment>
      )}
    </AppContainer>
  );
};

export default AppRickAndMorty;
