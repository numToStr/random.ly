import React, { Component } from "react";
import Message from "./Message/Message";

class Messages extends Component {
  render() {
    return this.props.messages.map(msg => (
      <Message key={msg.createdAt} message={msg} />
    ));
  }
}

export default Messages;
