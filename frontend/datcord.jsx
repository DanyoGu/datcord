import React from "react";
import ReactDOM from "react-dom";
import { signup } from "./actions/session_actions";
import { login } from "./actions/session_actions";
import { logout } from "./actions/session_actions";
import { requestServers, requestServer, createServer, updateServer, deleteServer, joinServer, leaveServer } from "./actions/server_actions";
import { requestChannels, requestChannel, createChannel } from "./actions/channel_actions";
import configureStore from './store/store';
// import App from './components/App';
import Root from './components/root';

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  
  window.requestServers = requestServers;
  window.requestServer = requestServer;
  window.createServer = createServer;
  window.updateServer = updateServer;
  window.deleteServer = deleteServer;
  window.joinServer = joinServer;
  window.leaveServer = leaveServer;

  window.requestChannels = requestChannels;
  window.requestChannel = requestChannel;
  window.createChannel = createChannel;

  
  document.addEventListener("DOMContentLoaded", () => {
    
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  //TESTING

  
  ReactDOM.render(<Root store={store} />, root);
});
