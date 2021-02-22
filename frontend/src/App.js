import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import SingIn from "./components/auth/SingIn";
import Home from "./components/Home/Home";
import RutaPrivada from "./components/rutas/RutaPrivada";
import AlertState from "./context/alert/alertState";
import AuthState from "./context/authentication/authState";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tarea/tareaState";

import tokenAuth from "./config/tokenAuth";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <TareaState>
      <ProyectoState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={LogIn} />
                <Route exact path="/singin" component={SingIn} />
                <RutaPrivada exact path="/home" component={Home} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </ProyectoState>
    </TareaState>
  );
}

export default App;
