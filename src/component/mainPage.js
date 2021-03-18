import React from 'react';
import { Route } from 'react-router-dom';

import MainLayout from './CommonPage/index.js';

const MainPage = ({ component: Component, ...rest }) => {
    return ((
        <Route {...rest} render={props => {
            return (
                <MainLayout>

                        <Component {...props} />
                    </MainLayout>
                   
            );
        }} />
    ));
};



export default MainPage;

