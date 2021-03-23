import React from "react";
import { connect } from "react-redux";
import Users from "./users";

import { getUserState } from "../redux/selectors"


const TodoList = ({ AllUser }) => (
  <ul>
      {AllUser.Users?console.log(AllUser.Users):console.log(AllUser.User)}
    {AllUser && AllUser["allUsers"].Users.length
      ? AllUser["allUsers"].Users.map((u, index) => {
          return <Users u={u} />;
        })
      : "No User"}
  </ul>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = state => {
  // setUserState();
  const AllUser = getUserState(state);
  console.log(AllUser);
  return { AllUser};
  
};

export default connect(mapStateToProps)(TodoList);
