import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { 
  HOME_PATH, 
  CONTACT_PATH, 
  SERVICES_PATH, 
  ABOUT_PATH,
  MYV_PATH
} from "../Config/constants/ROUTER_URLs";

import Home from "./Pages/Home";
import About from "./Pages/About";
import MyV from "./Pages/MyV";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

import PrivateRoute from "../Config/PrivateRoute";
import ScrollToTop from "../Config/ScrollToTop";
// import AuthGate from "./Components/public/AuthGate";

const Routes = () => {

  return (
    <Router>
      <ScrollToTop />
      {/* <AuthGate> */}
        <Switch>          
          {/* Modules routes */}                 
          <PrivateRoute exact path={"private-path"} component={NotFound} />
          <PrivateRoute path={"private-path/:id?"} component={NotFound} />
    
          {/* Common routes */}
          <Route exact path={CONTACT_PATH} component={Contact} />
          <Route exact path={SERVICES_PATH} component={Services} />
          <Route exact path={MYV_PATH} component={MyV} />
          <Route exact path={ABOUT_PATH} component={About} />      
          <Route exact path={HOME_PATH} component={Home} />

          <Route component={NotFound} />
        </Switch>
      {/* </AuthGate> */}
    </Router>
  );
};

export default Routes;
