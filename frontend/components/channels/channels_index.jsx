import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ChannelShowContainer from "../channels/channel_show_container"
import { ProtectedRoute } from "../../util/route_util";

class ChannelsIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestChannels(this.props.serverId)
    }
    render () {
        const { channels } = this.props
        
        return (
            <div className="channel-wrapper">
                <div className="">
                    <h1>Channel Div</h1>
                    <ProtectedRoute path="/servers/:serverId/:channelId" component={ChannelShowContainer} />
                </div>
                {channels.map(channel =>(
                    <li key={channel.id} className="">
                        <Link to={`/servers/:serverId/${channel.id}`}>{channel.channel_name}</Link>
                    </li>
                        
                    
                ))}
            </div>
        )
    }
}

export default ChannelsIndex;