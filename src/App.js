import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import { AuthProvider } from './Auth';
//import Fab from './components/UI/Fab/Fab';

import Expenses from './containers/Expenses/Expenses';
import SignUp from './containers/SignUp/SignUp';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import PrivateRoute from './PrivateRoute';

const  App = props => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Route exact path='/' component={Home} />
            <PrivateRoute exact path='/expenses' component={Expenses} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path="/logout" component={Logout} />
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
