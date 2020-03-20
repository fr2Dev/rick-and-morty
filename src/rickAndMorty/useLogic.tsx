import { useReducer } from 'react';
import { Data, EpisodesState } from './interfaces';
import { Episode, Episodes, Action } from './types';

const url = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
const initialState: EpisodesState = {
  isLoading: false,
  episodes: [],
  favorites: [],
  error: '',
  seasonFilter: 0,
  search: ''
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
    case 'ADD_FAVORITE': {
      return { ...state, favorites: [...state.favorites, action.payload] };
    }
    case 'REMOVE_FAVORITE': {
      return { ...state, favorites: action.payload };
    }
    case 'SET_FILTER': {
      return { ...state, seasonFilter: action.payload };
    }
    case 'SEARCH': {
      return { ...state, search: action.payload };
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

  const toggleFavorite = (episode: Episode) => {
    const { favorites } = state;
    const isFavorite = (favorites as Array<Episode>).includes(episode);
    let dispatchObj: Action = { type: 'ADD_FAVORITE', payload: episode };

    if (isFavorite) {
      const withoutEpisode: Episodes = favorites.filter((el: Episode) => el.id !== episode.id);
      dispatchObj = { type: 'REMOVE_FAVORITE', payload: withoutEpisode };
    }

    dispatch(dispatchObj);
  };

  const setFilter = (seasonNum: number) => {
    dispatch({ type: 'SET_FILTER', payload: seasonNum });
  };

  const setSearchValue = (value: string) => {
    dispatch({ type: 'SEARCH', payload: value });
  };

  return { state, fetchData, toggleFavorite, setFilter, setSearchValue };
};

export default useLogic;
