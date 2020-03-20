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
      type: 'ADD_FAVORITE';
      payload: Episode;
    }
  | {
      type: 'REMOVE_FAVORITE';
      payload: Episodes;
    };
