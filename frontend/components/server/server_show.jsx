import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import ChannelFormContainer from "../channels/channel_form_container"
import ChannelShowContainer from "../channels/channel_show_container"
import { ProtectedRoute } from "../../util/route_util";


class ServerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateModal: false,
    };
    this.toggleCreateModal = this.toggleCreateModal.bind(this);
    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);
  }

  componentDidMount() {
    this.props.requestServer();
    this.props.requestChannels();
  }
  componentDidUpdate(newProps) {
    if (this.props.match.params.serverId !== newProps.match.params.serverId) {
      this.props.requestServer();
      this.props.requestChannels();
    }
  }
  toggleCreateModal() {
    this.setState({
      showCreateModal: !this.state.showCreateModal,
    });
  }
  logoutCurrentUser() {
    this.props.logoutUser().then(() => this.props.history.push("/login"));
  }

  render() {
    if (!this.props.server) return null;
    const server = this.props.server;
    const channels = this.props.channels;
    const username = this.props.currentUser.username;
    const id = this.props.currentUser.id;

    return (
      <div className="channel-bar">
        <h1 className="server-title">{server.server_name}</h1>
        <ul className="channel-links-container">
          {channels.map((channel) => (
            <li
              key={channel.id}
              className="channel-links-lis"
              onClick={() =>
                this.props.history.push(`/servers/${server.id}/${channel.id}`)
              }
            >
              # {channel.channel_name}
              {/* <Link
                  className="channel-links"
                  to={`/servers/${server.id}/${channel.id}`}
                >
                  # {channel.channel_name}
                </Link> */}
            </li>
          ))}
          <div className="channel-create-box">
            <li className="channel-create-li" onClick={this.toggleCreateModal}>
              <span className="create-channel-button">+ channel</span>
            </li>

            <Modal
              className="create-channel-modal"
              isOpen={this.state.showCreateModal}
              onRequestClose={this.toggleCreateModal}
              ariaHideApp={false}
              style={{
                content: {
                  position: "absolute",
                  top: "32%",
                  left: "36%",
                  right: "0",
                  bottom: "0",
                  overflow: "hidden",
                  width: "490px",
                  height: "295px",
                  background: "rgb(255, 255, 255)",
                  padding: "0px",
                  outline: "none",
                },
                overlay: {
                  position: "fixed",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  zIndex: "50",
                },
              }}
            >
              <ChannelFormContainer
                closeModal={this.toggleCreateModal}
                server={server}
              />
            </Modal>
          </div>
        </ul>
        <div className="">
          <ProtectedRoute
            path="/servers/:serverId/:channelId"
            component={ChannelShowContainer}
          />
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(server.invite_code);
          }}
          className="invite-code"
        >
          ✉ Invite Code
        </div>
        <footer className="user-toolbar">
          <img src="discord-logo-online.jpg" alt="" />
          <span>
            <span>{username}</span>
            <br />#{id}
          </span>
          <div className="user-toolbar-buttons">
            <div
              className="logout-button-container"
              onClick={this.logoutCurrentUser}
            >
              <i class="fas fa-sign-out-alt"></i>
              <span className="toolbar-text">Logout</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default ServerShow;