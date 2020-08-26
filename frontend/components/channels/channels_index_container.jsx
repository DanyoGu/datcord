import { connect } from "react-redux";
import { requestChannels, createChannel } from "../../actions/channel_actions";
import ChannelIndex from "./channels_index_form";

const mapStateToProps = (state) => {
    const session = state.session;
    const users = state.entities.users
    return ({
        channels: Object.values(state.entities.channels)
    })

}

const mapDispatchToProps = (dispatch) => ({
    requestChannels: () => dispatch(requestChannels()),

})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)