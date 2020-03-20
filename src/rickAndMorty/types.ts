import { EpisodesState } from './interfaces';

export type Episodes = Episode[] | [];

export type Episode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
};

// export type InfosEpisode = Omit<
//   Episode,
//   'url' | 'airdate' | 'airtime' | 'airstamp' | 'runtime' | '_links'
// >;

export type Action =
  | {
      type: 'SET_FAVORITE_LOCAL';
      payload: Episodes;
    }
  | {
      type: 'FETCHING';
    }
  | {
      type: 'SUCCESS';
      payload: Episodes;
    }
  | {
      type: 'ERROR';
      error: Error;
    }
  | {
      type: 'TOGGLE_FAVORITE';
      payload: Episodes;
    }
  | {
      type: 'SET_FILTER';
      payload: number;
    }
  | {
      type: 'SEARCH';
      payload: string;
    };
