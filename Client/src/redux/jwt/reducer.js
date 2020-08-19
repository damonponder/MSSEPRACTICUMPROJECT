import * as types from "./constants";
const initialState = {
  token: null,
  isAuthenticated: false,
  
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD:
      if (!action.token)
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          
        };
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        
      };
    case types.REMOVE:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        
      };
    case types.VERIFY:
    default:
      return { ...state };
  }
}
