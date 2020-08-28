import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from "../actions/message_actions";

const messagesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign({}, oldState, { [action.message.id]: action.message });
        case RECEIVE_MESSAGES:
            return action.messages;
        default:
            return oldState;
    }
};

export default messagesReducer;