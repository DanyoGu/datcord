# [DATCORD](https://datc0rd.herokuapp.com/#/login)
---
![alt text](https://i.imgur.com/wdlNkTA.png)

Background
---
Datcord is a fullstack Rails/React app inspired by Discord that allows users to create servers, channels, and profiles and interact with each other on live chat. 

Technologies Used
---
+ **PostgreSQL**: PostgreSQL was used as the primary database tool as well as for associations
+ **Ruby on Rails**: Ruby on Rails was used to manage all backend aspects, such as models and controllers
+ **React/Redux**: Conversely, React/Redux was used to manage all things frontend, such as action creators, reducers, and components
+ **ActionCable**: ActionCable was used to create websockets for the live chat feature
+ **Heroku**: Heroku was utilized as an online web application host

Features
---
### User Authentication
Datcord utlizes BCrypt to ensure user data protection so that users can securely create profiles and keep their information safe. Additionally, a demo user account is also pre-created for anyone who wants to quickly preview the site without having to create their own account.
![alt text](https://i.imgur.com/mP1Jc6e.png)


### Server/Channel Creation
Users can create custom servers/channels for other users to join via invite code. Only users with the invite code can join a specific server.
![alt text](https://im2.ezgif.com/tmp/ezgif-2-9c9161d0b3a1.gif)


```
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
            <h1 className="create-header">CREATE YOUR DATCORD SERVER</h1>
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
```

### Live Chat
Live chat feature is available in every channel of every server. Individual channels have individual chat rooms that allow users to interact with one another in real time

![alt text](https://im2.ezgif.com/tmp/ezgif-2-8d7eaf92c920.gif)

```
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
                        placeholder={`Message Channel`}
                    />
                </form>
            </div>
        );
    }
}
```
