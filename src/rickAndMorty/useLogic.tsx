import { useReducer } from 'react';
import { Data, EpisodesState } from './interfaces';
import { Episode, Episodes, Action } from './types';

const url = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

const reducer = (state: EpisodesState, action: Action) => {
  switch (action.type) {
    case 'SET_FAVORITE_LOCAL': {
      return { ...state, favorites: action.payload };
    }
    case 'FETCHING': {
      return { ...state, isLoading: true, error: '' };
    }
    case 'SUCCESS': {
      return { ...state, isLoading: false, episodes: action.payload };
    }
    case 'ERROR': {
      return { ...state, isLoading: false, error: action.error.message };
    }
    case 'TOGGLE_FAVORITE': {
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

const useLogic = (initialState: EpisodesState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'FETCHING' });
    try {
      const response = await fetch(url);
      const data: Data = await response.json();
      const episodes = data._embedded.episodes;

      dispatch({ type: 'SUCCESS', payload: episodes });
    } catch (error) {
      console.log({ error });
      dispatch({ type: 'ERROR', error });
    }
  };

  const toggleFavorite = (episode: Episode) => {
    const { favorites } = state;
    const isFavorite = (favorites as Array<Episode>).some((ep: Episode) => ep.id === episode.id);

    let newFavorites: Episodes = [...favorites, episode];

    if (isFavorite) {
      const withoutEpisode: Episodes = favorites.filter((el: Episode) => el.id !== episode.id);
      newFavorites = withoutEpisode;
      // dispatchObj = { type: 'REMOVE_FAVORITE', payload: withoutEpisode };
    }

    dispatch({ type: 'TOGGLE_FAVORITE', payload: newFavorites });
    localStorage.setItem('favoritesEpisode', JSON.stringify(newFavorites));
  };

  const setFilter = (seasonNum: number) => {
    dispatch({ type: 'SET_FILTER', payload: seasonNum });
  };

  const setSearchValue = (value: string) => {
    dispatch({ type: 'SEARCH', payload: value });
  };

  const setLocalFavorites = (favorites: Episodes) => {
    dispatch({ type: 'SET_FAVORITE_LOCAL', payload: favorites });
  };

  return { state, setLocalFavorites, fetchData, toggleFavorite, setFilter, setSearchValue };
};

export default useLogic;
