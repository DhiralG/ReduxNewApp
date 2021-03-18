import { ADD_USER } from "../actionTypes";

const initialState = {
  Users: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const { id, name } = action.payload;
      return {
        ...state,
        Users: [...state.Users, {name}],
        
      };
    }
    
    default:
      return state;
  }
}
