import { Box, Button, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import {
  selectStudentFilter,
  selectStudentList,
  selectStudentLoading,
  selectStudentPagination,
  studentActions,
} from '../studentSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { Pagination } from '@material-ui/lab';
import StudentTable from '../components/StudentTable';
import { selectCityMap } from 'features/city/citySlice';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },

  titleContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  loading: {
    position: 'absolute',
    top: theme.spacing(-1),
    width: '100%',
  },
}));

export default function ListPage() {
  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  const loading = useAppSelector(selectStudentLoading);
  const cityMap = useAppSelector(selectCityMap);

  const dispatch = useAppDispatch();
  const classes = useStyle();

  const handlePageChange = (e: any, page: number) => {
    dispatch(
      studentActions.setFilter({
        ...filter,
        _page: page,
      })
    );
  };

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  return (
    <Box className={classes.root}>
      {loading && <LinearProgress className={classes.loading} />}
      <Box className={classes.titleContainer}>
        <Typography variant="h4">Student</Typography>
        <Button variant="contained" color="primary">
          Add new student
        </Button>
      </Box>

      <StudentTable
        cityMap={cityMap}
        studentList={studentList}
        onEdit={() => {}}
        onRemove={() => {}}
      ></StudentTable>
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          color="primary"
          count={Math.ceil(pagination._totalRows / pagination._limit)}
          page={pagination?._page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
