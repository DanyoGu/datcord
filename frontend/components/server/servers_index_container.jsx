import { connect } from "react-redux";
import { requestServers } from "../../actions/server_actions";
import { logout } from "../../actions/session_actions";
import ServerIndex from "./servers_index";

const mapStateToProps = (state) => {

    return({
        servers: Object.values(state.entities.servers),
        channels: Object.values(state.entities.channels)

    })
    
}

const mapDispatchToProps = (dispatch) => ({
    requestServers: () => dispatch(requestServers()),
    logoutUser: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)