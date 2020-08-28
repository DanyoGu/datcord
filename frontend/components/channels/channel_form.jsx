import React from "react";

class CreateChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel_name: "",
            server_id: this.props.server.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const channel = Object.assign({}, this.state);
        this.props.processForm(this.props.server.id, channel)
            .then(() => (
                this.props.closeModal()
            ))

    }
    render() {
        return (
            <div className="whole-channel-form">
                <h1 className="create-channel-header">CREATE TEXT CHANNEL</h1>
                <br />

                <br />
                <form onSubmit={this.handleSubmit} className="channel-form">
                    <label className="channel-name-field">
                        <span className="channel-name">CHANNEL NAME </span>

                        <br />
                        <input
                            type="text"
                            value={this.state.channel_name}
                            onChange={this.update("channel_name")}
                            className="channel-name-box"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Create Channel"
                        className="create-channel-button"
                    ></input>
                </form>
            </div>
        );
    }
}

export default CreateChannelForm