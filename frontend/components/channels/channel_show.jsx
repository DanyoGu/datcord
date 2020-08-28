import React from 'react';
import Modal from 'react-modal';
import MessageFormContainer from "../messages/message_form_container";

class ChannelShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCreateModal: false,
            messages: this.props.messages
        }
        this.bottom = React.createRef();
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

    render() {
        if (!this.props.channel) return null;
        const channel = this.props.channel;

        const messages = this.props.messages.map(message => {
            return (
                <li className="message" key={message.id}>
                    {message.author}: {message.body}
                </li>
            )
        })

        return (
            <div className="messages-bar">
                <h1>Channel Name: {channel.channel_name}</h1>
                <div className="message-list">
                    {messages}
                </div>
                <MessageFormContainer channel={channel}/>
            </div>
        )
    }

}

export default ChannelShow;