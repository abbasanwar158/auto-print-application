import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import Login from "./Login/index";
import Navbar from "./Navbar/index";
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './Dashboard/index';
import Layout from '../Layout'

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Layout>
            <Dashboard />
          </Layout>
        </Route>
        <Redirect from="/" exact to="/login" />
      </Switch>
    </BrowserRouter >
  );
}

export default Routes;
