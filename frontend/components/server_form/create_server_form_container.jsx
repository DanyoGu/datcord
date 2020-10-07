import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import { createChannel } from '../../actions/channel_actions';
import CreateServerForm from './create_server_form';

const mapStateToProps = (state) => {
    const session = state.session;
    const users = state.entities.users
    return ({
        server: {
            server_name: '',
            owner_id: users[session.id]
        }
    })
}
const mapDispatchToProps = (dispatch) => ({
    processForm: server => dispatch(createServer(server)),
    createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm)