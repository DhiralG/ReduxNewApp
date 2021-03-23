import * as Actions from "../actionTypes";



const GetAllUsers = (state = {}, action) => {
    switch (action.type) {
      case Actions.GET_DATA_API:
        return {
          loading: true
        };
        break;
  
      case Actions.GET_DATA_API_SUCCESS:
        return {
          loading: false,
          data: action.payload.data,
          state: {
            ...state,
            data: action.payload.data
          }
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default GetAllUsers;
