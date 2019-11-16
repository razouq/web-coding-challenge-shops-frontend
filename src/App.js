import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NearbyShopsList from "./components/NearbyShopsList";
import Navbar from "./components/Navbar";
import PreferredShopsList from "./components/PreferredShopsList";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "./components/Register";

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
      </Switch>
    </Router>
  );
}

export default App;
