import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
});
export const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const receiveErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

export const requestChannels = (serverId) => dispatch => (
    APIUtil.fetchChannels(serverId)
        .then(channels => (
            dispatch(receiveChannels(channels))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);
export const requestChannel = (serverId, channelId) => dispatch => (
    APIUtil.fetchChannel(serverId, channelId)
        .then(channel => (
            dispatch(receiveChannel(channel))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);
export const createChannel = (serverId, channel) => dispatch => (
    APIUtil.createChannel(serverId, channel)
        .then(channel => (
            dispatch(receiveChannel(channel))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);



