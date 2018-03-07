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
                <MessagesList
                  ref={el => (this.msgList = el)}
                  messagesList={this.state.messages}
                />
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
