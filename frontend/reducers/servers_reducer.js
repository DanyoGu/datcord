import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";

const serversReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SERVER:
            // nextState[action.server.id] = action.server;
            // return nextState;
            return Object.assign({}, oldState, { [action.server.id]: action.server });
        case RECEIVE_SERVERS:
            return action.servers;
        case REMOVE_SERVER:
            delete nextState[action.serverId];
            return nextState;
        default:
            return oldState;
    }
};

export default serversReducer;