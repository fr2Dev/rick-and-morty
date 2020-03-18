import { Episodes } from './types';

export interface Data {
  _embedded: {
    episodes: Episodes;
  };
}

export interface Action {
  type: string;
  payload?: Episodes;
}
