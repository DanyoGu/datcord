import React from "react";
import { Link } from "react-router-dom";

class CreateServerForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            server_name: "",
            owner_id: this.props.owner_id
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
        const server = Object.assign({}, this.state);
        this.props.processForm(server)
          .then((payload) => {
              let channel = {
                channel_name: "general"
              };
              this.props.createChannel(payload.server.id, channel)
              this.props.closeModal()
          })
    }
    render () {
        return (
          <div className="whole-server-form">
            <div className="create-server-header">
              <h1 className="create-header">Create Your Datcord Server</h1>
              <br />
              <span className="join-code-prompt">
                Make a place for you to hang out with your communities and
                friends.
              </span>

              <br />
              <br />
              <br />
              <form onSubmit={this.handleSubmit} className="server-form">
                <div>
                <label className="server-name-field">
                  <span className="server-name">SERVER NAME </span>

                  <br />
                  <input
                    type="text"
                    value={this.state.server_name}
                    onChange={this.update("server_name")}
                    className="server-name-box"
                  />
                </label>
                </div>
              </form>
            </div>
              <div className="create-server-submit-bar">
                  <span className="back-button" onClick={this.props.closeModal}>Back</span>
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

export default CreateServerForm