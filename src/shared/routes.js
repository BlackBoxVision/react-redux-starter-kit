import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import Main from './components/ecosystems/Main.js';
import Website from './components/pages/Website.js';

const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Website}/>
    </Route>
);

export default routes;
