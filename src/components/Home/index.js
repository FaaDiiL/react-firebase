import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';

const HomePage = () => (
    <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        <Messages />
    </div>
);

class MessagesBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
        loading: false,
        messages: [],
        };
        }
        componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.messages().on('value', snapshot => {
        // convert messages list from snapshot
        this.setState({ loading: false });
        });
        }
        componentWillUnmount() {
        this.props.firebase.messages().off();
        }
        render() {
        const { messages, loading } = this.state;
        return (
        <div>
        {loading && <div>Loading ...</div>}
        <MessageList messages={messages} />
        </div>
        );
        }
}
const MessageList = ({ messages }) => (
    <ul>
    {messages.map(message => (
    <MessageItem key={message.uid} message={message} />
    ))}
    </ul>
    );
    const MessageItem = ({ message }) => (
    <li>
    <strong>{message.userId}</strong> {message.text}
    </li>
);
const Messages = withFirebase(MessagesBase);

const condition = authUser => !!authUser;


export default withAuthorization(condition)(HomePage);
