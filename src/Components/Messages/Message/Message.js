import React from "react";

const message = props => {
  return (
    <div>
      <div className="d-inline-block my-2">
        <div className="bg-primary text-white py-2 px-3 rounded">
          <small>{props.message.from + ": " + props.message.text}</small>
        </div>
        <div className="text-right">
          <small>{props.message.createdAt}</small>
        </div>
      </div>
    </div>
  );
};

export default message;
