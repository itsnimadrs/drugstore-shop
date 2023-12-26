import { createContext, useReducer } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { 
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }
    case 'LOGOUT': 
      return {
        user: null,
        accessToken: null,
        refreshToken: null
      }  
    case 'REFRESH_TOKEN':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken  
      }
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    accessToken: null,
    refreshToken: null
  });

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children} 
    </AuthContext.Provider>
  )
} 

export { AuthContext, AuthProvider };