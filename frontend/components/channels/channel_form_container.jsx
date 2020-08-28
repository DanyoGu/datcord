import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import CreateChannelForm from './channel_form';

const mapStateToProps = (state) => {

    return ({
        channel: {
            channel_name: '',
            server_id: '',
        }
    })
}
const mapDispatchToProps = (dispatch) => ({
    processForm: (serverId, channel) => dispatch(createChannel(serverId, channel))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelForm)