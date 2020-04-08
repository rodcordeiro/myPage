import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from './pages/Main';
import Projetos from './pages/Projetos';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/projetos" component={Projetos} />
            <Route path="/blog" component={Blog} />
            <Route path="/contato" component={Contact} />
        </Switch>
        </BrowserRouter>
    );
}