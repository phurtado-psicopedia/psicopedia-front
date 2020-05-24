import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../Redux/D_reducers";
import { getIsLogged } from "../Redux/E_selectors/user";

import { HOME_PATH } from "../Config/constants/ROUTER_URLs";

interface IPrivateRoute {
  path: string;
  exact?: boolean;
  component: any;
}

const PrivateRoute = ({ component: Component, exact, ...rest }: IPrivateRoute) => {
  
  const isLogged : boolean = useSelector((state: AppState) => getIsLogged(state));

  return (
    <Route {...rest}
      exact={exact}
      render={
        props => (isLogged) ? (
          <Component {...props} />
        ) : (
          <Redirect to={HOME_PATH} />
        )
      }
    />
  );
};

export default PrivateRoute;