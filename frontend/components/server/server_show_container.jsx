import { connect } from "react-redux";
import { requestServer } from "../../actions/server_actions";
import { requestChannels } from "../../actions/channel_actions";
import ServerShow from "./server_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        currentUser: state.entities.users[state.session.id]
    })

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestServer: () => dispatch(requestServer(ownProps.match.params.serverId)),
    requestChannels: () => dispatch(requestChannels(ownProps.match.params.serverId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow)