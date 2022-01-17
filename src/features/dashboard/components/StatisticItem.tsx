import { Box, Paper, Typography, makeStyles } from '@material-ui/core';

import React from 'react';

interface Props {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  },
}));

const StatisticItem = ({ icon, label, value }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box>{icon}</Box>
      <Box>
        <Typography variant="h5" align="right">
          {value}
        </Typography>
        <Typography variant="body1">{label}</Typography>
      </Box>
    </Paper>
  );
};

export default StatisticItem;
