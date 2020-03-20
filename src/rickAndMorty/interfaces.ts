import { Episodes } from './types';

export interface Data {
  _embedded: {
    episodes: Episodes;
  };
}

export interface EpisodesState {
  isLoading: boolean;
  episodes: Episodes;
  favorites: Episodes;
  error: string;
}
