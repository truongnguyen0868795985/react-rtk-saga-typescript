import React, { ReactElement } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AddEdit from './pages/AddEdit';
import { Box } from '@material-ui/core';
import ListPage from './pages/ListPage';

interface Props {}

export default function StudentFeature({}: Props): ReactElement {
  const match = useRouteMatch();

  return (
    <Box>
      <Switch>
        <Route path={match.path} exact>
          <ListPage />
        </Route>
        <Route path={`${match.path}/add`}>
          <AddEdit />
        </Route>
        <Route path={`${match.path}/:userId`}>
          <AddEdit />
        </Route>
      </Switch>
    </Box>
  );
}
