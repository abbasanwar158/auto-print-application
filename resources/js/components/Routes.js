import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect from="/" exact to="/login" />
      </Switch>
    </BrowserRouter >
  );
}

export default Routes;
