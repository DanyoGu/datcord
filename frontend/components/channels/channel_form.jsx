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
          <div className="whole-server-form">
            <div className="create-server-header">
              <h1 className="create-header">Create Your Text Channel</h1>
              <br />
              <span className="join-code-prompt">
                Create a Text Channel to talk about anything and everything.
              </span>

              <br />
              <br />
              <br />
              <form onSubmit={this.handleSubmit} className="server-form">
                <label className="server-name-field">
                  <span className="server-name">CHANNEL NAME </span>

                  <br />
                  <input
                    type="text"
                    value={this.state.channel_name}
                    onChange={this.update("channel_name")}
                    className="server-name-box"
                  />
                </label>
              </form>
            </div>
            <div className="create-server-submit-bar">
              <span className="back-button" onClick={this.props.closeModal}>
                Back
              </span>
              <input
                type="submit"
                value="Create"
                className="server-submit-button"
                onClick={this.handleSubmit}
              ></input>
            </div>
          </div>
        );
    }
}

export default CreateChannelForm