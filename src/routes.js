import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import EditUser from './pages/EditUser';
import Pagina404 from './pages/Pagina404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path='/login' component={Login} />
        <Route path='/users' component={Main} />
        <Route path='/user/:id' component={EditUser} />
        <Route path='*' component={Pagina404} />
      </Switch>
    </BrowserRouter>
  )
}
