import React from "react";

const message = props => {
  return (
    <div>
      <p>{props.message.from}</p>
      <p>{props.message.text}</p>
    </div>
  );
};

export default message;
