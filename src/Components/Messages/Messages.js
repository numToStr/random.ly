import React from "react";
import Message from "./Message/Message";

const Messages = props => {
  return (
    <div>
      {props.messages.map(msg => {
        return <Message key={msg.createdAt} message={msg} />;
      })}
    </div>
  );
};

export default Messages;
