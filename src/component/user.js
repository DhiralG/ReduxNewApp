import React from "react";
import AddUser from "../component/addUser"
import UserList from "../component/userList"
import GetUserList from "../component/getUserList"
export default function User() {
  return (
    <div>
      <h1>User List</h1>
      <GetUserList />
      {/* <AddUser /> */}
      {/* <UserList /> */}
      
    </div>
  );
}
