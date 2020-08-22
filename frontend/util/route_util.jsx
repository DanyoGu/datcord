import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      loggedIn ? <Redirect to="/servers"/> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({ loggedIn: Boolean(state.session.id) });

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
