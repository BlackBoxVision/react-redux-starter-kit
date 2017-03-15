import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import Profile from './components/profile/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Layout from './components/common/container/Layout';
import NotFound from './components/notFound/NotFound';
import Register from './components/register/Register';
import ResetPassword from './components/resetPassword/ResetPassword';
import Settings from './components/settings/Settings';


function getRoutes(store) {
    return (
        <Route path='/' component={Layout}>
            <IndexRedirect to='login'/>
            <Route path='login' component={Login}/>
		    {/*<Route path='login' component={Login} onEnter={checkAuth(props.store)}/>*/}
		    {/*<Route path='dashboard' component={Dashboard} onEnter={checkAuth(props.store)}>*/}
            <Route path='dashboard' component={Dashboard}>
                <Route path='profile' component={Profile}/>
                <Route path='settings' component={Settings}/>
            </Route>
            <Route path='register' component={Register}/>
            <Route path='resetPassword' component={ResetPassword}/>
            <Route path='*' component={NotFound}/>
        </Route>
    )
}

export default getRoutes;
