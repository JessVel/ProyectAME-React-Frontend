import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

const RutaPrivada = ({ component: Component, ...props }) => {
  const { authentication, authenticUser, cargando } = useContext(AuthContext);

  useEffect(() => {
    authenticUser();
    // eslint-disable-next-line
  }, []);

  return <Route {...props} render={props => (!authentication && !cargando ? <Redirect to="/" /> : <Component {...props} />)} />;
};

export default RutaPrivada;
