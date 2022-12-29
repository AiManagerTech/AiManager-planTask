import React, { createContext, useReducer } from 'react';
import MainVariablesReducer from './MainVariablesReducer';
import MainVariablesContext from './MainVariablesContext';

const mainVariablesState = (props) => {
  // Initial state
  const initialState = {
    title: 'My App',
  };

  // Dispatch to reducer
  const [state, dispatch] = useReducer(MainVariablesReducer, initialState);

  // Actions
  const getTitle = () => {
    return initialState.title;
  };

  const setTitle = (title) => {
    initialState.title = title;
  };

  // Return provider
  return (
    <MainVariablesContext.Provider
      value={{
        title: state.title,
        getTitle,
        setTitle,
      }}
    >
      {props.children}
    </MainVariablesContext.Provider>
  );
};

export default mainVariablesState;
