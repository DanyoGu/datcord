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
      <ul className="login-errors">
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
        <h3>We're so excited to see you again!</h3>

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
          <div className="login-registration-prompt">
              <span>

              Need an Account?
              </span>
              <Link to="/signup" className="signup-link"> Register</Link>
          </div>
      )
  } 
  login_link() {
      return (
        <div className="login-registration-prompt">
          <Link to="/login" className="login-link">
            Already have an account?
          </Link>
        </div>
      );
  } 
  demo(e) {
    e.preventDefault();
    const demo_user = {username: "Kobe Bryant", password: "lakersin4"}
    this.props.processForm(demo_user);
  }
  render() {
      const { formType } = this.props
    return (
      <div className="login-form-container">
        <header>
          <img src="/Discord-Logo-White.png" className="login-logo" alt="" />

          <img
            src="https://fontmeme.com/permalink/201002/4f619e04f5e14ccb788aff40850b9b48.png"
            alt="discord-logo-font"
            border="0"
            className="login-logo-text"
          ></img>
        </header>

        <div className="login-box">
          <form onSubmit={this.handleSubmit} className="session-form">
            {formType === "Login" ? this.login_header() : this.signup_header()}
            <br />
            <label className="username-field">
              <span className="username-label">USERNAME</span>
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="username-box"
              />
            </label>
            <label className="password-field">
              <br />
              <span className="password-label">PASSWORD</span>
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="password-box"
              />
            </label>
            <br />
            <input
              type="submit"
              value={this.props.formType}
              className="submit-button"
            />
            {formType == "Login" ? (
              <button onClick={this.demo} className="demo-button">
                Demo
              </button>
            ) : null}
            <br />
            {formType === "Login" ? this.signup_link() : this.login_link()}
            {this.renderErrors()}
          </form>
        </div>
        <footer>
          <div class="personal-div">
            <a href="https://www.linkedin.com/in/danielxgu/" target="_blank">
              <img src="./linkedin.png"></img>
            </a>

            <a href="http://www.estherbaek.com/" target="_blank">
              <img src="./personalsite.png"></img>
            </a>

            <a href="https://github.com/DanyoGu/datcord" target="_blank">
              <img src="./github.svg"></img>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default SessionForm;
