import React, { FC, useEffect } from 'react';
import useLogic from './rickAndMorty/useLogic';
import List from './rickAndMorty/component/List';

export interface AppRickAndMortyProps {}

const AppRickAndMorty: FC<AppRickAndMortyProps> = () => {
  const { state, initData } = useLogic();

  useEffect(() => {
    initData();
  }, []);

  return <div>{state.length === 0 ? 'Empty' : <List episodes={state} />}</div>;
};

export default AppRickAndMorty;
