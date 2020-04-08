import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from './pages/Main';
import Projetos from './pages/Projetos';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/projetos" component={Projetos} />
        </Switch>
        </BrowserRouter>
    );
}