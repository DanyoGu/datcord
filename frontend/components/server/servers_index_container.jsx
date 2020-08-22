import { connect } from "react-redux";
import { requestServers } from "../../actions/server_actions";
import ServerIndex from "./servers_index";

const mapStateToProps = (state) => ({
    servers: Object.values(state.entities.servers)
})

const mapDispatchToProps = (dispatch) => ({
    requestServers: () => dispatch(requestServers())
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)