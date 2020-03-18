import { useReducer } from 'react';
import { Data, Action } from './interfaces';
import { Episodes } from './types';

const url = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
const initialState: Episodes = [];

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data: Data = await response.json();
    const episodes = data._embedded.episodes;

    return episodes;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

const reducer = (state: Episodes, action: Action) => {
  switch (action.type) {
    case 'FETCH_DATA': {
      if (action.payload) return action.payload;
    }
    default: {
      return state;
    }
  }
};

const useLogic = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initData = async () => {
    const data = await fetchData();
    dispatch({ type: 'FETCH_DATA', payload: data });
  };

  return { state, initData };
};

export default useLogic;
