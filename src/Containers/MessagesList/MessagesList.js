import React, { Component } from "react";
import { connect } from "react-redux";

import Message from "../../Components/Message/Message";

class MessagesList extends Component {
  render() {
    const messages = this.props.messagesList.map(msg => (
      <Message message={msg} key={msg.msgId} />
    ));
    return messages;
  }
}

const mapStateToProps = state => {
  return {
    messagesList: state.messages.messages
  };
};

export default connect(mapStateToProps)(MessagesList);
