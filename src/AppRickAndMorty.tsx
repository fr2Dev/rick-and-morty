import React, { FC, useEffect } from 'react';
import useLogic from './rickAndMorty/useLogic';
import { Episode } from './rickAndMorty/interfaces';
import { Episodes } from './rickAndMorty/types';

export interface AppRickAndMortyProps {}

const AppRickAndMorty: FC<AppRickAndMortyProps> = () => {
  const { state, setData } = useLogic();

  useEffect(() => {
    setData();
  }, []);

  return (
    <div>
      {state.length === 0 ? (
        'Empty'
      ) : (
        <ul>
          {(state as Array<Episode>).map((episode: Episode) => {
            const { name, id, image } = episode;

            return (
              <li key={id}>
                <div>
                  <img src={image.medium} alt={name} />
                  <p>{name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AppRickAndMorty;
