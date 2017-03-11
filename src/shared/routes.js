import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';
import Account from './components/account/Account.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Login from './components/login/Login.js';
import Layout from './components/common/Layout.js';
import NotFound from './components/notFound/NotFound.js';
import Register from './components/register/Register.js';
import ResetPassword from './components/resetPassword/ResetPassword.js';

function getRoutes(store) {
    return (
        <Route path='/' component={Layout}>
            <IndexRedirect to='login'/>
            <Route path='login' component={Login}/>
		    {/*<Route path='login' component={Login} onEnter={checkAuth(props.store)}/>*/}
		    {/*<Route path='dashboard' component={Dashboard} onEnter={checkAuth(props.store)}>*/}
            <Route path='dashboard' component={Dashboard}>
                <Route path='account' component={Account}/>
            </Route>
            <Route path='register' component={Register}/>
            <Route path='resetPassword' component={ResetPassword}/>
            <Route path='*' component={NotFound}/>
        </Route>
    )
}

export default getRoutes;
