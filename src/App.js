import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NearbyShopsList from "./components/NearbyShopsList";
import Navbar from "./components/Navbar";
import PreferredShopsList from "./components/PreferredShopsList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import setToken from "./security-utils/setToken";
import jwt_decode from 'jwt-decode';
import {SET_CURRENT_USER} from "./actions/types";
import store from './store';
import {logout} from "./actions";

// check if the user is already authenticated and the token is not expired

const token = localStorage.getItem('token');

if(token) {
  setToken(token);
  const decode = jwt_decode(token);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decode
  });

  const current_time = Date.now() / 1000;

  if(decode.exp < current_time) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/nearby-shops">
          <NearbyShopsList/>
        </Route>
        <Route path="/preferred-shops">
          <PreferredShopsList/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
