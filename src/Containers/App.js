import React, { Component } from "react";
import socketIO from "socket.io-client";

import Input from "./Input/Input";
import AuxComp from "../HOC/AuxComp";
import MessagesList from "./MessagesList/MessagesList";
import UsersList from "./UsersList/UsersList";

class App extends Component {
  state = {
    io: socketIO(),
    connect: null,
    messages: []
  };

  componentDidMount() {
    this.onConnect();
    this.onNewMessage();
    this.onDisconnect();
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
      console.log(this.state.messages);
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
        from: "Vikas",
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
            <div className="col-4 px-0">
              <UsersList />
            </div>
            <div className="col-8">
              <div className="d-flex flex-column h-100">
                <div className="flex-grow">
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

export default App;
