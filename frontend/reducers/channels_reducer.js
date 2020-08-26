import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, oldState, { [action.channel.id]: action.channel });
        case RECEIVE_CHANNELS:
            return action.channels;
        default:
            return oldState;
    }
};

export default channelsReducer;