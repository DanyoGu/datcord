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
        .then(() => (
            this.props.closeModal()
        ))
        
    }
    render () {
        return (
          <div className="whole-server-form">
            <h1 className="create-header">CREATE YOUR DISCORD SERVER</h1>
            <br />
            <span className="create-message">
              Make a place for you to hang out with your communities and
              friends.
            </span>

            <br />
            <br />
            <br />
            <form onSubmit={this.handleSubmit} className="server-form">
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
              <br />
              <input
                type="submit"
                value="Create"
                className="submit-button"
              ></input>
            </form>
          </div>
        );
    }
}

export default CreateServerForm