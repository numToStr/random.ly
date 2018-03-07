import React, { Component } from "react";
import Message from "../../Components/Message/Message";

class MessagesList extends Component {
  render() {
    const messages = this.props.messagesList.map(msg => (
      <Message message={msg} key={msg.text} />
    ));
    return messages;
  }
}

export default MessagesList;
