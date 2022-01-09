import { Box, Button, CircularProgress, Paper, Typography, makeStyles } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import React from 'react';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
}));

export const LoginPage = () => {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.isLogging);

  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color="secondary" />} &nbsp; FAKE LOGIN
          </Button>
        </Box>
      </Paper>
    </div>
  );
};
