import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.demo = this.demo.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  login_header() {
    return (
      <div className="login-header">
        <h2>Welcome Back!</h2>
        We're so excited to see you again!
      </div>
    );
  }
  signup_header() {
    return (
      <div className="signup-header">
        <h2>Create an Account</h2>
      </div>
    );
  }
  signup_link() {
      return(
          <div>
              Need an Account?
              <Link to="/signup"> Register</Link>
          </div>
      )
  } 
  login_link() {
      return(
          <div>
              <Link to="/login">Already have an account?</Link>
          </div>
      )
  } 
  demo(e) {
    e.preventDefault();
    const demo_user = {username: "KobeBryant", password: "lakersin4"}
    this.props.processForm(demo_user);
  }
  render() {
      const { formType } = this.props
    return (
        <div className="login-form-container">
          <header>
            <h1 className="logo">Datcord</h1>
          </header>

            <div className="login-box">

                <form onSubmit={this.handleSubmit} className="session-form">
                    {formType === "login" ? this.login_header() : this.signup_header()}
                    <br />
                    <label className = "username-field">
                        Username
                        <br />
                        <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        className = "username-box"
                        />
                    </label>
                    <label>
                        <br />
                        Password
                        <br />
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className = "password-box"
                        />
                    </label>
                    <br />
                    <input type="submit" value={this.props.formType} className = "submit-button" />
                    {formType == "login" ? <button onClick={this.demo} className="demo-button">Demo</button> : null}
                    <br />
                    {formType === "login" ? this.signup_link() : this.login_link()}
                    {this.renderErrors()}
                </form>
            </div>
      </div>
    );
  }
}

export default SessionForm;
