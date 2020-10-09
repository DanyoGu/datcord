import React from "react";
import { Link } from "react-router-dom";

class JoinServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        invite_code: ""
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
    this.props.joinServer(server.invite_code).then(() => this.props.closeModal());
  }
  render() {
    return (
      <div className="whole-server-form">
        <div className="create-server-header">
          <h1 className="join-header">Join a Server</h1>
          <br />
          <span className="join-code-prompt">
            Enter an invite below to join an existing server.
          </span>

          <br />
          <br />

          <span className="join-message"></span>
          <form onSubmit={this.handleSubmit} className="server-form">
            <label className="server-name">
              INVITE LINK
              <br />
              <input
                type="text"
                value={this.state.invite_code}
                onChange={this.update("invite_code")}
                className="server-join-box"
              />
            </label>
            <br />
            <br />

            <span className="server-name">INVITES SHOULD LOOK LIKE:</span>
            <br />
            <br />
            <span className="server-form-filler">
              eDLvrrEQBMvmAA
              <br />
              datcord-eDLvrrEQBMvmAA
            </span>
          </form>
        </div>
        <div className="create-server-submit-bar">
          <span className="back-button" onClick={this.props.closeModal}>
            Back
          </span>
          <input
            type="submit"
            value="Join"
            className="server-join-button"
          ></input>
        </div>
      </div>
    );
  }
}

export default JoinServerForm;
