import { NotFound, PrivateRoute } from 'components/Common';
import { Route, Switch } from 'react-router-dom';

import { AdminLayout } from 'components/Layouts';
import { Button } from '@material-ui/core';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { authActions } from 'features/auth/authSlice';
import cityApi from 'api/cityApi';
import { useAppDispatch } from 'app/hooks';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={() => dispatch(authActions.logout())}>
        Logout
      </Button>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
