import React, { Component } from "react";
import { connect } from "react-redux";
import socketIO from "socket.io-client";

import * as actionTypes from "../../store/actionTypes";

import Input from "../Input/Input";
import AuxComp from "../../HOC/AuxComp";
import MessagesList from "../MessagesList/MessagesList";
import UsersList from "../UsersList/UsersList";

class Chat extends Component {
  state = {
    io: socketIO(),
    connect: null
  };

  componentDidMount() {
    this.onConnect();
    this.onNewMessage();
    this.onUpdateUserList();
    this.onDisconnect();
  }

  onConnect = () => {
    this.state.io.on("connect", () => {
      this.onJoin();
    });
  };

  onNewMessage = () => {
    let msgs = [];
    this.state.io.on("newMessage", msg => {
      msgs = [...msgs, msg];
      this.props.onSetMessages(msgs);
      this.scrollToBottom();
    });
  };

  onUpdateUserList = () => {
    this.state.io.on("updateUserList", users => {
      this.props.onSetUsers(users);
    });
  };

  onGetCurrentUser = () => {
    const u = {};
    for (const key in this.props.currentUser) {
      const val = this.props.currentUser[key];
      if (val) {
        u[key] = val;
      } else {
        u[key] = sessionStorage[key];
      }
    }
    this.props.onSetCurrentUser(u);
  };

  onJoin = () => {
    this.onGetCurrentUser();
    this.state.io.emit("join", this.props.currentUser, err => {
      if (err) {
        alert(err);
        this.props.history.replace("/");
      } else {
        this.setState({ connect: "User Connected" });
        console.log("User Connected", this.props.currentUser);
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
            <UsersList />
            <div className="col-12 col-md-8">
              <div className="d-flex flex-column vh-100">
                <div
                  className="flex-grow overflow-auto mt-2"
                  ref={el => (this.messagesListContainer = el)}
                >
                  <MessagesList />
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

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCurrentUser: currentUser =>
      dispatch({ type: actionTypes.SET_CURRENTUSER, currentUser }),
    onSetMessages: messages =>
      dispatch({ type: actionTypes.SET_MESSAGES, messages }),
    onSetUsers: users => dispatch({ type: actionTypes.SET_USERS, users })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
