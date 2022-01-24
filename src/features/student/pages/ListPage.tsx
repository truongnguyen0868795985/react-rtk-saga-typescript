import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { selectStudentList, studentActions } from '../studentSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import StudentTable from '../components/StudentTable';

const useStyle = makeStyles((theme) => ({
  root: {},

  titleContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
}));

export default function ListPage() {
  const dispatch = useAppDispatch();

  const classes = useStyle();

  const studentList = useAppSelector(selectStudentList);

  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 15,
      })
    );
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      <Box className={classes.titleContainer}>
        <Typography variant="h4">Student</Typography>
        <Button variant="contained" color="primary">
          Add new student
        </Button>
      </Box>

      <StudentTable studentList={studentList} onEdit={() => {}} onRemove={() => {}}></StudentTable>
    </Box>
  );
}
