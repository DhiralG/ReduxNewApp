import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";



const Users = ({ u }) => (
  <li>
    <Link to={`User/${u.name}`}>
            
     <span>
      {u.name}
    </span> 
            </Link>
    
  </li>
);

// export default Todo;
export default Users;
