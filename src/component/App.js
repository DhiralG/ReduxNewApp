import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import MainPage from'./mainPage';
import Home from './home';
import AboutUs from './aboutus';
import Career from './career';
import User from './user';
import UserDetail from './userDetail';
import ContactUs from './contactus';


const App=()=> (
  
    <div>
        
          
      {/* <Provider store={store()}>   */}
          <Switch>
            <MainPage exact path="/" component={Home} />
            <MainPage exact path="/Home" component={Home} />
            <MainPage exact path="/AboutUs" component={AboutUs} />
            <MainPage exact path="/Career" component={Career} />
            <MainPage exact path="/ContactUs" component={ContactUs} />
            <MainPage exact path="/User" component={User}/>
            <MainPage exact path={`/User/:UserId`} component={UserDetail}/>
          </Switch>
          {/* </Provider>       */}
    </div>
  );
export default App;
