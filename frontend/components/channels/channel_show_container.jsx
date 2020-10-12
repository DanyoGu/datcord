import { connect } from "react-redux";
import { requestChannel } from "../../actions/channel_actions";
import { requestMessages, receiveMessage } from "../../actions/message_actions";
import ChannelShow from "./channel_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        channel: state.entities.channels[ownProps.match.params.channelId],
        messages: Object.values(state.entities.messages),
        currentServer: state.entities.servers[ownProps.match.params.serverId]
    })

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestChannel: () => dispatch(requestChannel(ownProps.match.params.channelId)),
    requestMessages: () => dispatch(requestMessages(ownProps.match.params.channelId)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow)