import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from './pages/Main';
import LoginPage from './pages/Login';


export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login"  component={LoginPage}/>
        </Switch>
        </BrowserRouter>
    );
}