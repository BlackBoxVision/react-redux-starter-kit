import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';
import Account from './components/pages/Account.js';
import Dashboard from './components/pages/Dashboard.js';
import Login from './components/pages/Login.js';
import Layout from './components/ecosystems/Layout.js';
import NotFound from './components/pages/NotFound.js';
import Register from './components/pages/Register.js';
import ResetPassword from './components/pages/ResetPassword.js';

//TODO JS handle dashboard and account as authenticated routes
const routes = (
    <Route path='/' component={Layout}>
        <IndexRedirect to='login'/>
        <Route path='login' component={Login}/>
        <Route path='dashboard' component={Dashboard}>
            <Route path='account' component={Account}/>
        </Route>
        <Route path='register' component={Register}/>
        <Route path='resetPassword' component={ResetPassword}/>
        <Route path='*' component={NotFound}/>
    </Route>
);

export default routes;
