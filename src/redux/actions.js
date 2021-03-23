import * as ActionType from "./actionTypes";

let nextUserId = 0;

export const addUser = name => ({
  type: ActionType.ADD_USER,
  payload: {
    id: ++nextUserId,
    name
  }
});

export const getDataAPI =()=>({
  type:ActionType.GET_DATA_API,
  payload:{
    request:{
      url:'users'
    }
  }

})

// export function getDataAPI() {
//   return {
//     type: "GET_DATA_API",
//     payload: {
//       request: {
//         // url:'https://jsonplaceholder.typicode.com/asdasd',
//         onComplete: () => {
//           console.log("complete");
//         },
//         onSuccess: () => {
//           console.log("success");
//         },
//         onError: () => {
//           console.log("error");
//         }
//       }
//     }
//   };
// }


// export const getUser = url => ({
//   type
// })

// export const getAllUser = () => {
//   return (dispatch) => {
//     // 1. Calling showLoader() method to display loader...
//     dispatch(loaderActions.showLoader());
//     return apiService.getAllUser()
//       .then(result => {
//         dispatch(loaderActions.hideLoader());
//         if (result.data) {
//             dispatch(toastComponentAction.showSuccessMessage(true, DEFAULT_SUCCESS_MESSAGE_ON_GET));
//             dispatch(setAllUser(result.data.allUser));
//         } else {
          
//           dispatch(toastComponentAction.showErrorMessage(true, DEFAULT_ERROR_MESSAGE));
//         }
//       }, error => {
//         dispatch(loaderActions.hideLoader());
      
//         dispatch(toastComponentAction.showErrorMessage(true, DEFAULT_FAILURE_MESSAGE));

//       });
//   }
// };
