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
      <div>
        <h1 className="join-header">JOIN SERVER</h1>
        <span className="join-message">Enter an invite below to join an existing server. The invite will look something like these:</span>
        <br />

        <form onSubmit={this.handleSubmit} className="server-join-form">
          <label className="server-name-field">
            SERVER JOIN CODE
            <br />
            <input
              type="text"
              value={this.state.invite_code}
              onChange={this.update("invite_code")}
              className="server-code-box"
            />
          </label>
          <br />
          <input type="submit" value="Join" className="join-button"></input>
        </form>
      </div>
    );
  }
}

export default JoinServerForm;
