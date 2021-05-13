import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import axios from 'axios'

import Dashboard from './pages/Dashboard';

export const ProtectedRoutes = () => {
    const { isAuthenticated, user, error,isLoading, getAccessTokenSilently } = useAuth0();
    console.log({isAuthenticated, user, error, isLoading})
     
    if(isLoading) {
        return <div>Loading...</div>
    }

    if(!isLoading && !isAuthenticated) {
        return <Redirect
            to={{
            pathname: "/login",
            state: { from: '' }
            }}
        />
    } 


    axios.interceptors.request.use(async function (config) {
        if(!user) return config
        config.headers['X-Identifier'] = btoa(user.email)
        console.log(config)
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
        </Switch>
    )
}
