import React from "react";
import AddUser from "../component/addUser"
import UserList from "../component/userList"

export default function User() {
  return (
    <div>
      <h1>User List</h1>
      <AddUser />
      <UserList />
      
    </div>
  );
}
