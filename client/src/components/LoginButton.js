import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

export const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        isAuthenticated ? 
            <Button variant="contained" onClick={() => logout()}>Log Out</Button>:
            <Button size="small" variant="contained" onClick={() => loginWithRedirect()}>Log In</Button> 
    )
}
