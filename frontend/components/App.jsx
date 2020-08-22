import React from "react";
import ServerForm from "./server_form/server_form";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import ServerIndexContainer from "./server/servers_index_container";
import CreateServerFormContainer from "./server_form/create_server_form_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
<div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/servers" component={ServerIndexContainer} />
      <Route exact path="/servers/new" component={CreateServerFormContainer} />
    </Switch>
  </div>
);

export default App;
