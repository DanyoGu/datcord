import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ServerFormContainer from '../server_form/create_server_form_container';
import JoinServerFormContainer from '../server_form/join_server_form_container';
import ServerShowContainer from "../server/server_show_container"
import { ProtectedRoute } from "../../util/route_util";



// <=== MOVE INTO SERVER NAME FOR LETTERS ONLY

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCreateModal: false,
            joinServerModal: false
        }

        this.toggleCreateModal = this.toggleCreateModal.bind(this);
        this.toggleJoinModal = this.toggleJoinModal.bind(this);

    }
    componentDidMount() {
        this.props.requestServers();
    }

    toggleCreateModal() {
        this.setState({
            showCreateModal: !this.state.showCreateModal
        })
    }
    toggleJoinModal() {
        this.setState({
            joinServerModal: !this.state.joinServerModal
        })
    }


    render() {
        const { servers } = this.props

        return (
          <div className="wrapper">
            <div className='top-bar'>
              <span className="discord-logo">DATCORD</span>
            </div>
            <div className="sidebar">
              <ul>
                <li className="home-link">
                  <Link to="/" className="homelink">⌂</Link>
                </li>
                {servers.map((server) => (
                  <li key={server.id} className="tooltip">
                    <Link to={`/servers/${server.id}`} className="server-link">{server.server_name.charAt(0)}</Link>
                    <span className="tooltiptext">{server.server_name}</span>
                  </li>
                ))}
                <div className="server-create-box">
                  <li>
                    <div
                      className="create-server-button"
                      onClick={this.toggleCreateModal}
                    >
                      +
                    </div>
                  </li>

                  <Modal
                    className="create-server-modal"
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
                    <ServerFormContainer closeModal={this.toggleCreateModal} />
                    <label
                      className="new-server-close"
                      onClick={this.toggleCreateModal}
                    >
                      BACK
                    </label>
                  </Modal>
                </div>
                <div className="server-join-box">
                  <li>
                    <div
                      className="add-server-button"
                      onClick={this.toggleJoinModal}
                    >
                      +++
                    </div>
                  </li>

                  <Modal
                    className="join-modal"
                    isOpen={this.state.joinServerModal}
                    onRequestClose={this.toggleJoinModal}
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
                    <JoinServerFormContainer
                      closeModal={this.toggleJoinModal}
                    />
                    <label
                      className="new-server-join-close"
                      onClick={this.toggleJoinModal}
                    >
                      BACK
                    </label>
                  </Modal>
                </div>

                <li>
                  <Link to="/logout" className="logoutlink">⇦</Link>
                </li>
              </ul>
            </div>
              <div>
                <ProtectedRoute path="/servers/:serverId" component={ServerShowContainer} />
              </div>
          </div>
        );
    }
}
export default ServerIndex;