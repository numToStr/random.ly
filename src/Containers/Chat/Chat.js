import React, { Component } from "react";
import socketIO from "socket.io-client";

import Input from "../Input/Input";
import AuxComp from "../../HOC/AuxComp";
import MessagesList from "../MessagesList/MessagesList";
import UsersList from "../UsersList/UsersList";

class Chat extends Component {
  state = {
    io: socketIO(),
    connect: null,
    messages: [],
    chatData: {}
  };

  componentDidMount() {
    this.onConnect();
    this.onNewMessage();
    this.onDisconnect();

    const query = new URLSearchParams(this.props.location.search);
    const data = {};
    for (const param of query.entries()) {
      data[param[0]] = param[1];
    }
    this.setState({ chatData: data });
  }

  onConnect = () => {
    this.state.io.on("connect", () => {
      this.setState({ connect: "User Connected" });
      console.log("User Connected");
    });
  };

  onNewMessage = () => {
    this.state.io.on("newMessage", msg => {
      this.setState((prevState, props) => {
        return {
          messages: [...prevState.messages, msg]
        };
      });
      //   console.log(this.state.messages);
    });
  };

  onDisconnect = () => {
    this.state.io.on("disconnect", () => {
      this.setState({ connect: "User Disconnected" });
      console.log("User Disconnected");
    });
  };

  onCreateMessage = (e, msg) => {
    e.preventDefault();

    this.state.io.emit(
      "createMessage",
      {
        from: this.state.chatData.name,
        text: msg
      },
      data => console.log("Got It: " + data)
    );
  };

  scrollToBottom = () => {
    const container = this.messagesListContainer;

    const clientHeight = container.clientHeight;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;

    if (clientHeight + scrollTop >= scrollHeight) {
      console.log("should scroll");
    }
  };

  render() {
    return (
      <AuxComp>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 px-0">
              <UsersList />
            </div>
            <div className="col-8">
              <div className="d-flex flex-column vh-100">
                <div
                  className="flex-grow overflow-auto"
                  ref={el => (this.messagesListContainer = el)}
                >
                  <MessagesList messagesList={this.state.messages} />
                </div>
                <small>{this.state.connect}</small>
                <Input submit={this.onCreateMessage} />
              </div>
            </div>
          </div>
        </div>
      </AuxComp>
    );
  }
}

export default Chat;
