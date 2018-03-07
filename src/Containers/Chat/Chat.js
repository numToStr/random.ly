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
    currentUser: {},
    usersList: []
  };

  componentDidMount() {
    this.onConnect();
    this.onNewMessage();
    this.onUpdateUserList();
    this.onDisconnect();
  }

  onConnect = () => {
    this.state.io.on("connect", () => {
      this.setState({ connect: "User Connected" });

      const query = new URLSearchParams(this.props.location.search);
      const data = {};
      for (const param of query.entries()) {
        data[param[0]] = param[1];
      }

      this.setState({ currentUser: data });

      this.onJoin();
    });
  };

  onNewMessage = () => {
    this.state.io.on("newMessage", msg => {
      this.setState((prevState, props) => {
        return {
          messages: [...prevState.messages, msg]
        };
      });

      this.scrollToBottom();
    });
  };

  onUpdateUserList = () => {
    this.state.io.on("updateUserList", users =>
      this.setState({ usersList: users })
    );
  };

  onJoin = () => {
    this.state.io.emit("join", this.state.currentUser, err => {
      if (err) {
        alert(err);
        this.props.history.replace("/");
      } else {
        console.log("User Connected", this.state.currentUser);
      }
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
        text: msg
      },
      data => console.log("Got It: " + data)
    );
  };

  scrollToBottom = () => {
    const messagesContainer = this.messagesListContainer;
    const newMessage =
      messagesContainer.children[messagesContainer.children.length - 1];
    const lastMessage = messagesContainer.children[
      messagesContainer.children.length - 2
    ]
      ? messagesContainer.children[messagesContainer.children.length - 2]
      : 0;

    const clientHeight = messagesContainer.clientHeight;
    const scrollTop = messagesContainer.scrollTop;
    const scrollHeight = messagesContainer.scrollHeight;

    const newMessageHeight = newMessage.clientHeight;
    const lastMessageHeight = lastMessage.clientHeight;

    if (
      clientHeight + scrollTop + newMessageHeight + lastMessageHeight >=
      scrollHeight
    ) {
      messagesContainer.scrollTop = scrollHeight;
    }
  };

  render() {
    return (
      <AuxComp>
        <div className="container-fluid">
          <div className="row">
            <UsersList
              usersList={this.state.usersList}
              currentUser={this.state.currentUser}
            />
            <div className="col-12 col-md-8">
              <div className="d-flex flex-column vh-100">
                <div
                  className="flex-grow overflow-auto mt-2"
                  ref={el => (this.messagesListContainer = el)}
                >
                  <MessagesList messagesList={this.state.messages} />
                </div>
                {/* <small>{this.state.connect}</small> */}
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
