import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import Layout from './components/common/container/Layout';
import Login from './components/login/LoginContainer';
import Register from './components/register/RegisterContainer';
import ResetPassword from './components/resetPassword/ResetPasswordContainer';
import Dashboard from './components/dashboard/DashboardContainer';

import Profile from './components/profile/Profile';
import NotFound from './components/notFound/NotFound';
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
