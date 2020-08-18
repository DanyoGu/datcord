import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./actions/session_actions";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  //TESTING

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Datcord</h1>, root);
});
