import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import SingIn from "./components/auth/SingIn";
import Home from "./components/Home/Home";

import AlertState from './context/alert/alertState';

function App() {
  return (
    <AlertState>
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/singin" component={SingIn} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
    </AlertState>
  );
}

export default App;
