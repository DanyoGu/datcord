import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const REMOVE_SERVER = "REMOVE_SERVER"
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';

export const receiveServers = (servers) => ({
    type: RECEIVE_SERVERS,
    servers
});
export const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
});
export const removeServer = (serverId) => ({
    type: REMOVE_SERVER,
    serverId
});
export const receiveErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
});

export const requestServers = () => dispatch => (
    APIUtil.fetchServers()
    .then(servers => (
        dispatch(receiveServers(servers))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
export const requestServer = (serverId) => dispatch => (
    APIUtil.fetchServer(serverId)
    .then(server => (
        dispatch(receiveServer(server))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
export const createServer = (server) => dispatch => (
    APIUtil.createServer(server)
    .then(server => (
        dispatch(receiveServer(server))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
export const updateServer = (server) => dispatch => (
    APIUtil.updateServer(server)
    .then(server => (
        dispatch(receiveServer(server))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
export const deleteServer = (serverId) => dispatch => (
    APIUtil.deleteServer(serverId)
    .then(() => (
        dispatch(removeServer(serverId))
    ))
);
