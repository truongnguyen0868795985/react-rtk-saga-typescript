import React, { ReactElement, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AddEdit from './pages/AddEdit';
import { Box } from '@material-ui/core';
import ListPage from './pages/ListPage';
import { cityActions } from 'features/city/citySlice';
import { useAppDispatch } from 'app/hooks';

interface Props {}

export default function StudentFeature({}: Props): ReactElement {
  const match = useRouteMatch();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(cityActions.fetchCityList());
  }, []);

  return (
    <Box>
      <Switch>
        <Route path={match.path} exact>
          <ListPage />
        </Route>
        <Route path={`${match.path}/add`}>
          <AddEdit />
        </Route>
        <Route path={`${match.path}/:studentId`}>
          <AddEdit />
        </Route>
      </Switch>
    </Box>
  );
}
