import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

export const LoginButton = ({ className }) => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        isAuthenticated ? 
            <Button variant="contained" onClick={() => logout()} className={className}>Log Out</Button>:
            <Button size="small" variant="contained" onClick={() => loginWithRedirect()} className={className}>LOG IN</Button> 
    )
}
