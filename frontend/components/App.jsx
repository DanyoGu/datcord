import React from "react";
import ServerForm from "./server_form/create_server_form";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import ServerIndexContainer from "./server/servers_index_container";
import CreateServerFormContainer from "./server_form/create_server_form_container";
import LogoutContainer from "./logout/logout_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";


const App = () => (
<div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/servers" component={ServerIndexContainer} />
      <ProtectedRoute path="/" component={ServerIndexContainer} />
      <ProtectedRoute exact path="/servers/new" component={CreateServerFormContainer} />
    </Switch>
  </div>
);

export default App;
