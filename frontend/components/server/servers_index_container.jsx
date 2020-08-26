import { connect } from "react-redux";
import { requestServers, createServer } from "../../actions/server_actions";
import ServerIndex from "./servers_index";

const mapStateToProps = (state) => {
    const session = state.session;
    const users = state.entities.users
    return({
        servers: Object.values(state.entities.servers)
    })
    
}

const mapDispatchToProps = (dispatch) => ({
    requestServers: () => dispatch(requestServers()),

})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)