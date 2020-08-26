
import React from 'react';


class Logout extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <button onClick={() => this.props.logout()} className="logout-button">Logout</button>
        )
    }
}

export default Logout;