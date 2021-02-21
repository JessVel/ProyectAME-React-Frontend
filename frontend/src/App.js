import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import SingIn from "./components/auth/SingIn";
import Home from "./components/Home/Home";

import authContext from "./context/authentication/authContext";

import AlertState from "./context/alert/alertState";
import AuthState from "./context/authentication/authState";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tarea/tareaState";

function App() {
  let history = useHistory();
  return (
    <TareaState>
      <ProyectoState>
        <AlertState>
          <AuthState>
            <Router history={history}>
              <Switch>
                <Route exact path="/" component={LogIn} />
                <Route exact path="/singin" component={SingIn} />

                <Route exact path="/home" component={Home} />
              </Switch>
              <Redirect to="/" />
            </Router>
          </AuthState>
        </AlertState>
      </ProyectoState>
    </TareaState>
  );
}

export default App;
