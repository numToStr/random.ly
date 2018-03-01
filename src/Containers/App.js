import React, { Component } from "react";
import socketIO from "socket.io-client";

import AuxComp from "../HOC/AuxComp";
import MessagesList from "./MessagesList/MessagesList";
import Textarea from "./Textarea/Textarea";
import UsersList from "./UsersList/UsersList";

class App extends Component {
  state = {
    io: socketIO(),
    connect: null
  };

  componentDidMount() {
    const io = socketIO();
    this.onConnect(io);
    this.onDisconnect(io);
  }

  onConnect = io => {
    io.on("connect", () => {
      this.setState({ connect: "User Connected" });
      console.log("User Connected");

      io.emit("createEmail", {
        to: "vikasraj505@gmail.com",
        text: "hey, what's up"
      });
    });

    io.on("newEmail", data => console.log(data));
  };

  onDisconnect = io => {
    io.on("disconnect", () => {
      this.setState({ connect: "User Disconnected" });
      console.log("User Disconnected");
    });
  };

  render() {
    return (
      <AuxComp>
        <UsersList />
        <MessagesList />
        <Textarea />
        <small>{this.state.connect}</small>
      </AuxComp>
    );
  }
}

export default App;
