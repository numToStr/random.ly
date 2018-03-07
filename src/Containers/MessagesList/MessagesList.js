import React, { Component } from "react";
import ReactDOM from "react-dom";
import Messages from "../../Components/Messages/Messages";

class MessagesList extends Component {
  scrollToBottom = () => {
    const container = this.messagesListContainer;

    console.log(ReactDOM.findDOMNode(this.msgList));

    const clientHeight = container.clientHeight;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;

    if (clientHeight + scrollTop >= scrollHeight) {
      console.log("should scroll");
    }
  };

  render() {
    return (
      <div
        className="flex-grow overflow-auto"
        ref={el => (this.messagesListContainer = el)}
      >
        <Messages
          ref={el => (this.msgList = el)}
          messages={this.props.messagesList}
        />
      </div>
    );
  }
}

export default MessagesList;
