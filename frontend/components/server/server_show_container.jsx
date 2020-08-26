import { connect } from "react-redux";
import { requestServer } from "../../actions/server_actions";
import ServerShow from "./server_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        server: state.entities.servers[ownProps.match.params.serverId]
    })

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestServer: () => dispatch(requestServer(ownProps.match.params.serverId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ServerShow)