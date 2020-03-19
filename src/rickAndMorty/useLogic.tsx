import { useReducer } from 'react';
import { Data, EpisodesState } from './interfaces';
import { Episodes, Action } from './types';

const url = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
const initialState: EpisodesState = {
  isLoading: false,
  episodes: [],
  error: ''
};

const reducer = (state: EpisodesState, action: Action) => {
  switch (action.type) {
    case 'FETCHING': {
      return { ...state, isLoading: true, error: '' };
    }
    case 'SUCCESS': {
      return { ...state, isLoading: false, episodes: action.payload };
    }
    case 'ERROR': {
      return { ...state, isLoading: false, error: action.error.message };
    }
    default: {
      return state;
    }
  }
};

const useLogic = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'FETCHING' });
    try {
      const response = await fetch(url);
      const data: Data = await response.json();
      const episodes = data._embedded.episodes;
      dispatch({ type: 'SUCCESS', payload: episodes });

      // return episodes;
    } catch (error) {
      console.log({ error });
      dispatch({ type: 'ERROR', error });
      // return [];
    }
  };

  return { state, fetchData };
};

export default useLogic;
