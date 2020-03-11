import React, { FC, useReducer } from 'react';

interface Character {
  name: string;
  alive: boolean;
}
interface Action {
  type: string;
  payload?: number;
}

type Characters = Character[];

const Characterz = () => {
  const initialState: Characters = [
    { name: 'James', alive: true },
    { name: 'John', alive: true },
    { name: 'Pilip', alive: true },
    { name: 'Marta', alive: true },
    { name: 'Elise', alive: true }
  ];
  const reducer = (state: Characters, action: Action): Characters => {
    const setAlive = (bool: boolean): Characters => {
      return state.map((member, i) => {
        const newState = i === action.payload ? { ...member, alive: bool } : member;
        return newState;
      });
    };

    const setAliveAll = (bool: boolean): Characters => {
      return state.map(member => {
        const newMember = { ...member, alive: bool };
        return newMember;
      });
    };
    switch (action.type) {
      case 'kill': {
        return setAlive(false);
      }
      case 'revive': {
        return setAlive(true);
      }
      case 'killAll': {
        return setAliveAll(false);
      }
      case 'reviveAll': {
        return setAliveAll(true);
      }
      case 'reset': {
        return initialState;
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const allDead = state.every(member => !member.alive);
  const allAlive = state.every(member => member.alive);
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {state.map((char: Character, i: number) => {
          const { name, alive } = char;

          return (
            <li key={i}>
              {name} <span>{alive ? '✨' : '💀'}</span>
              <button onClick={() => dispatch({ type: 'kill', payload: i })} disabled={!alive}>
                kill
              </button>
              <button onClick={() => dispatch({ type: 'revive', payload: i })} disabled={alive}>
                revive
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'killAll' })} disabled={allDead}>
        Kill all
      </button>
      <button onClick={() => dispatch({ type: 'reviveAll' })} disabled={allAlive}>
        Revive all
      </button>
    </div>
  );
};

export default Characterz;
