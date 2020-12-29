import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import MainDashPage from './pages/Dashboard/Main'
import ErrorPage from './pages/404'



export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login"  component={LoginPage}/>
            <Route path="/dashboard"  component={MainDashPage}/>
            <Route component={ErrorPage}/>
        </Switch>
        </BrowserRouter>
    );
}