import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


  function UserDetail() {
    let { UserId } = useParams();
    return <h3>User is: {UserId}</h3>;

   

  }




export default UserDetail;
