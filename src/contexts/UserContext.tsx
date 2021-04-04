import React, { createContext, useReducer, ReactNode } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';

interface ContextProps {
  children: ReactNode;
}

export const UserContext = createContext({});

export default ({ children } : ContextProps) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}
