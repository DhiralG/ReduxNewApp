import * as Actions from "../actionTypes";

const initialState = {
  Users: [],
};

const allUsers=(state = initialState, action)=>{
  switch (action.type) {
    case Actions.ADD_USER: {
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

export default allUsers;

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case Actions.ADD_USER: {
//       const { id, name } = action.payload;
//       return {
//         ...state,
//         Users: [...state.Users, {name}],
        
//       };
//     }
//     case Actions.GET_DATA_API: {
//       const {name} = "Dhiral"
//       return {
//         ...state,
//         Users: [...state.Users, {name}],
        
//       };
//     }
//     default:
//       return state;
//   }
// }
