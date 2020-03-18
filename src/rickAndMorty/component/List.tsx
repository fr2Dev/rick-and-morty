import React, { FC } from 'react';
import { Episodes, Episode } from '../../rickAndMorty/types';
import { ListStyled } from '../styled';
import ItemEpisode from './ItemEpisode';

export interface ListProps {
  episodes: Episodes;
}

const List: FC<ListProps> = ({ episodes }) => (
  <ListStyled>
    {(episodes as Array<Episode>).map((episode: Episode) => {
      const { url, airdate, airtime, airstamp, runtime, _links, ...rest } = episode;
      return <ItemEpisode episode={rest} key={episode.id} />;
    })}
  </ListStyled>
);

export default List;
