import React, { Component } from "react";
import Messages from "../../Components/Messages/Messages";

class MessagesList extends Component {
  render() {
    return (
      <div>
        <Messages messages={this.props.messagesList} />
      </div>
    );
  }
}

export default MessagesList;
