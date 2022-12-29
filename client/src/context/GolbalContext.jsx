import { createContext, useReducer } from 'react';
import { MdTouchApp } from 'react-icons/md';
import appReducer from './AppReducer';

// Initial state
const initialState = {
  title: 'Marca',
  iconTitle: MdTouchApp,
};

export const GlobalContext = createContext(initialState);
// The default value is only used when a component does not have a
// matching Provider above it in the tree. This default value can be
// helpful when you're first adding React to a large codebase and want
// to make sure the refactoring is working as expected.
// See: https://reactjs.org/docs/context.html#reactcreatecontext
//
// The value argument is the value that will be passed to
// consuming components that are descendants of this Provider.
// One Provider can be connected to many consumers. Providers can be
// nested to override values deeper within the tree.
// See: https://reactjs.org/docs/context.html#contextprovider

// export const GlobalProvider = GlobalContext.Provider;
export const ContextProvider = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  const editTitle = (newTitle) => {
    dispatch({
      type: 'EDIT_TITLE',
      payload: newTitle,
    });
  };

  return (
    <GlobalContext.Provider value={{ ...state, editTitle }}>
      {children}
    </GlobalContext.Provider>
  );
};
