import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import { LoginButton } from './LoginButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="bold" className={classes.title}>
            Cowin Slot Notifier
          </Typography>
            <LoginButton />
        </Toolbar>
      </AppBar>
    )
}
