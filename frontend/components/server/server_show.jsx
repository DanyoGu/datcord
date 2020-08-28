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


  render() {
    if (!this.props.server) return null;
    const server = this.props.server;
    const channels = this.props.channels;

    return (
      <div className="channel-bar">
        <h1 className="server-title">{server.server_name}</h1>
        <ul className="channel-links-container">
          {channels.map((channel) => (
            <li key={channel.id} className="channel-links-lis">
              <Link
                className="channel-links"
                to={`/servers/${server.id}/${channel.id}`}
              >
                # {channel.channel_name}
              </Link>
            </li>
          ))}
          <div className="channel-create-box">
            <li className="channel-create-li">
              <span
                className="create-channel-button"
                onClick={this.toggleCreateModal}
              >
                + channel
              </span>
            </li>

            <Modal
              className="create-channel-modal"
              isOpen={this.state.showCreateModal}
              onRequestClose={this.toggleCreateModal}
              ariaHideApp={false}
              style={{
                content: {
                  top: "50%",
                  left: "50%",
                  right: "0",
                  bottom: "0",
                  overflow: "hidden",
                  width: "490px",
                  height: "350px",
                  background: "rgb(255, 255, 255)",
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
              <label
                className="new-channel-close"
                onClick={this.toggleCreateModal}
              >
                BACK
              </label>
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
      </div>
    );
  }
}

export default ServerShow;