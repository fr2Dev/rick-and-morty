import React, { FC, useReducer, useState, useEffect } from 'react';

interface State {
  fileSizeBytes: number;
  url: string;
}

interface Action {
  type: string;
  payload?: State;
}

const Dogs = () => {
  const query = 'https://random.dog/woof.json';
  const initialState: State = {
    fileSizeBytes: 3529317,
    url: 'https://random.dog/0508da24-5cbb-487c-815d-9c555e244c21.jpg'
  };

  const getUserAsync = async (query: string) => {
    try {
      let response = await fetch(query);
      const data = await response.json();
      console.log(
        '%c☘ %cdata%c:',
        'font-weight:bold;color: #0F9D58;font-size:1.2em;',
        'font-weight:bold;border-bottom:2px solid #0F9D58;',
        'font-weight:bold;',
        data
      );
    } catch (err) {
      console.error(err);
      // Handle errors here
    }
  };

  useEffect(() => {
    // getUserAsync(query);
    fetchData();
  }, []);

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'setData': {
        if (action.payload) return action.payload;
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    // dispatch({ type: 'fetching' });
    try {
      const response = await fetch(query);
      const data = await response.json();
      console.log(
        '%c☘ %cdata%c:',
        'font-weight:bold;color: #0F9D58;font-size:1.2em;',
        'font-weight:bold;border-bottom:2px solid #0F9D58;',
        'font-weight:bold;',
        data
      );
      dispatch({ type: 'setData', payload: data });
      return data;
    } catch (error) {}
  };

  return (
    <div>
      <img src={state.url} width={250} />
      <button onClick={fetchData}>getNew Dog</button>
    </div>
  );
};

export default Dogs;
// fetch(API + DEFAULT_QUERY)
//       .then(response => response.json())
//       .then(data => this.setState({ hits: data.hits }));
