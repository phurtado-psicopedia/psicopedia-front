import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME_PATH, SIGNUP_PATH, POKEDEX_PATH } from "../Config/constants/ROUTER_URLs";

import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Pokedex from "./Pages/Pokedex";
import PokemonDetail from "./Pages/PokemonDetail";
import NotFound from "./Pages/NotFound";

import PrivateRoute from "../Config/PrivateRoute";
// import AuthGate from "./Components/public/AuthGate";

const Routes = () => {

  return (
    <Router>
      {/* <AuthGate> */}
        <Switch>          
          {/* Modules routes */}                 
          <PrivateRoute exact path={POKEDEX_PATH} component={Pokedex} />
          <PrivateRoute path={POKEDEX_PATH+"/:id?"} component={PokemonDetail} />
          

          {/* Common routes */}
          <Route exact path={SIGNUP_PATH} component={SignUp} />
          <Route exact path={HOME_PATH} component={Home} />

          <Route component={NotFound} />
        </Switch>
      {/* </AuthGate> */}
    </Router>
  );
};

export default Routes;
