import { ADD_USER } from "./actionTypes";

let nextTodoId = 0;

export const addUser = name => ({
  type: ADD_USER,
  payload: {
    id: ++nextTodoId,
    name
  }
});

