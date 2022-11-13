import React, {createContext, useReducer} from 'react';

import MainContextReducer from './MainContextReducer';


export const mainContext = createContext();
import { hideMessage } from './MainContextActions';


const INITIAL_STATE = {
    isFetching: true,
    products: [],
    message: '',
    isShown: false,
    productInCard: [],
    error: '',
}

function MainContextProvider({ children }) {
  const [ state, dispatch ] = useReducer(MainContextReducer, INITIAL_STATE);

  function hideMessageBox() {
    setTimeout(() => {
      dispatch(hideMessage());
    }, 1000);
  }



  return (
    <mainContext.Provider value={
        {state, dispatch, hideMessageBox}
    }>
      {children}
    </mainContext.Provider>
  )
}

export default MainContextProvider;
