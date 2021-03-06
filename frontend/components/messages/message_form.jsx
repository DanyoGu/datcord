import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            channel_id: this.props.channel.id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak(
            {   message: this.state.body,
                author_id: this.props.currentUser.id,
                channel_id: this.props.channel.id
            });
        this.setState({ body: "" });
    }

    render() {
        return (
            <div className="message-submit-form">
                <form className="message-form-2" onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder={`Message #${this.props.channel.channel_name}`}
                    />
                </form>
            </div>
        );
    }
}
export default MessageForm