import { connect } from "react-redux";
import { requestChannels } from "../../actions/channel_actions";
import ChannelIndex from "./channels_index";

const mapStateToProps = (state) => ({
    channels: Object.values(state.entities.channels)
})

const mapDispatchToProps = (dispatch) => ({
    requestChannels: (serverId) => dispatch(requestChannels(serverId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)