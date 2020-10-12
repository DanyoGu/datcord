import React from 'react';
import Modal from 'react-modal';
import MessageFormContainer from "../messages/message_form_container";
import { useStore } from 'react-redux';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCreateModal: false,
            messages: this.props.messages
        }
        this.bottom = React.createRef();
        this.randomMessage = this.randomMessage.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },//create subscription to ChatChannel
            {
                received: data => {   //when client is subscribed, listen to channel for new data
                    this.props.receiveMessage(data)
                },
                speak: function (data) { //sends data to backend
                    return this.perform("speak", data);
                }
            }
        );

        this.props.requestChannel();
        this.props.requestMessages();
        }

    componentDidUpdate(newProps) {
        if (this.props.match.params.channelId !== newProps.match.params.channelId) {
            this.props.requestChannel();
            this.props.requestMessages();
        };
        // $('.messages-bar').scrollTop($('.messages-bar')[0].scrollHeight);
        // this.bottom.current.scrollIntoView();
    }
    randomMessage(num) {
        switch (num) {
            case 1:    
                return "Shooting Free Throws";
            case 2:    
                return "Shooting Three Pointers";
            case 3:    
                return "Grabbing Rebounds";
            case 4:    
                return "Swatting Shots";
            case 5:    
                return "Dishing Dimes";
            case 6:    
                return "Working Out";
            case 7:    
                return "Requesting a Trade";
            case 8:    
                return "Practicing Ball Handling";
            case 9:    
                return "Getting Ready for Playoffs";
            case 10:
                return "Playing VALORANT"
            default:
                return "Transferring to the NFL";
        }
    }
    formatDate(date) {
        if(!date) return null;
        const arr = date.slice(0,10).split("-");
        return `${arr[1]}/${arr[2]}/${arr[0]}`
    }
    render() {
        if (!this.props.channel) return null;
        const channel = this.props.channel;
        const numMembers = this.props.currentServer.members.length + 1;
        const serverOwner = this.props.currentServer.owner;
        const members = this.props.currentServer.members.map(member => {
            return (
              <ul>
                <li className="member-bar-li">
                  <img src="discord-logo.png" alt="justin goes here" />
                  <div className="member-bar-content">
                    <h3 className="memmber-username">{member.username}</h3>
                    <p>
                      {this.randomMessage(Math.floor(Math.random() * 10) + 1)}
                    </p>
                  </div>
                </li>
              </ul>
            );
        })

        const messages = this.props.messages.map(message => {
            return (
              <li className="message" key={message.id}>
                <img src="discord-logo.png" alt="justin goes here" />
                <div className="whole-message">
                  <div className="message-author-date">
                    <h3>{message.author}</h3>
                    <p>{this.formatDate(message.created_at)}</p>
                  </div>
                  <div className="message-body">{message.body}</div>
                </div>
              </li>
            );
        })

        return (
          <div className="messages-bar-container">
            <div className="messages-bar">
              <h1 className="channel-header"># {channel.channel_name}</h1>
              <div className="message-list">
                <div className="message-list-header">
                  <img src="channel-header.jpg" alt="" />
                  <br />
                  <span className="channel-welcome">
                    Welcome to #{channel.channel_name}
                  </span>
                  <br />
                  <br />
                  <span className="channel-start">
                    This is the start of the #{channel.channel_name} channel
                  </span>
                </div>

                {messages}
              </div>
              <MessageFormContainer
                className="message-form-container"
                channel={channel}
              />
            </div>
            <div className="members-bar">
              <h1 className="members-bar-header">{`Members - ${numMembers}`}</h1>
              <li className="member-bar-li">
                <img src="discord-logo.png" alt="justin goes here" />
                <div className="member-bar-content">
                  <h3 className="memmber-username">{serverOwner.username}</h3>
                  <p>
                    {this.randomMessage(Math.floor(Math.random() * 10) + 1)}
                  </p>
                </div>
              </li>
              {members}
            </div>
          </div>
        );
    }

}

export default ChannelShow;