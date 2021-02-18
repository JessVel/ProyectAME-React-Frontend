import React from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import SingIn from "./components/auth/SingIn";
import Home from "./components/Home/Home";

import AlertState from "./context/alert/alertState";
import AuthState from "./context/authentication/authState";

function App() {
  let history = useHistory();

  console.log(history);

  return (
    <AlertState>
      <AuthState>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/singin" component={SingIn} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </AuthState>
    </AlertState>
  );
}

export default App;
