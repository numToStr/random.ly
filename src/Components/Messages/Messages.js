import React from "react";
import Message from "./Message/Message";

const Messages = props => {
  const message = props.messages.map(msg => (
    <Message key={msg.createdAt} message={msg} />
  ));

  return <div>{message}</div>;
};

export default Messages;
