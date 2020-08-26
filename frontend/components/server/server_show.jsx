import React from 'react';
import Modal from 'react-modal';


class ServerShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.requestServer()
    }

    render() {
        if (!this.props.server) return null;
        console.log(this.props.dummy);
        console.log(this.props.server);

        return (
            <div className="">
                <h1>hello</h1>
                <h2>{this.props.server.server_name}</h2>
            </div>
        )
    }
}

export default ServerShow;