import { NotFound, PrivateRoute } from 'components/Common';
import { Route, Switch } from 'react-router-dom';

import { AdminLayout } from 'components/Layouts';
import { LoginPage } from 'features/auth/pages/LoginPage';
import cityApi from 'api/cityApi';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });

  return (
    <div className="App">
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
