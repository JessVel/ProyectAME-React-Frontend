import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

const RutaPrivada = ({ component: Component, ...props }) => {
  const { authentication, authenticUser } = useContext(AuthContext);

  useEffect(() => {
    authenticUser();
  }, []);

  return <Route {...props} render={(props) => (!authentication ? <Redirect to="/" /> : <Component {...props} />)} />;
};

export default RutaPrivada;
