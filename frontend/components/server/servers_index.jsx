import React from 'react';
import { Link } from 'react-router-dom';
//.charAt(0) <=== MOVE INTO SERVER NAME FOR LETTERS ONLY
class ServerIndex extends React.Component {
    componentDidMount() {
        this.props.requestServers();
    }

    render() {
        const { servers } = this.props

        return (
            <div className="wrapper">
                <div className="sidebar">     
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            {
                                servers.map(server => (
                                    <li key={server.id}>
                                        {server.server_name}
                                        
                                    </li>
                                ))
                            }
                            <li><Link to="/servers/new"> + </Link></li>
                        </ul>
                </div>
            </div>

        )
    }
}
export default ServerIndex;