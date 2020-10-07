import { connect } from "react-redux";
import ServerIndexItem from "./server_index_item";
import { requestServer } from "../../actions/server_actions";
import { requestChannels } from "../../actions/channel_actions";


const mapStateToProps = (state) => ({
  channels: state.entities.channels,
});

const mapDispatchToProps = (dispatch) => ({
  requestServer: (serverId) => dispatch(requestServer(serverId)),
  requestChannels: (serverId) => dispatch(requestChannels(serverId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndexItem);
