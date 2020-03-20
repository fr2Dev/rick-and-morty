import React, { FC, useEffect } from 'react';
import useLogic from './rickAndMorty/useLogic';
import { List, Loader } from './rickAndMorty/component';
import { ContainerCenter, AppContainer } from './rickAndMorty/styled';

export interface AppRickAndMortyProps {}

const AppRickAndMorty: FC<AppRickAndMortyProps> = () => {
  const { state, fetchData, toggleFavorite } = useLogic();
  const { episodes, favorites, isLoading, error } = state;

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
        <List episodes={episodes} favorites={favorites} toggleFavorite={toggleFavorite} />
      )}
    </AppContainer>
  );
};

export default AppRickAndMorty;
