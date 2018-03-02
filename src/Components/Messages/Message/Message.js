import React from "react";

const message = props => {
  return (
    <div>
      <small>{props.message.from + ": " + props.message.text}</small>
    </div>
  );
};

export default message;
