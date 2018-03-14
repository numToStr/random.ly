import React from "react";

const componentName = props => {
  const joinedAt = new Date(props.user.joinedAt);

  return (
    <div className="bg-white mx-2 mb-2 p-2 box-shadow">
      <span className="lead font-weight-bold text-secondary">
        {props.user.name}
      </span>
      <small className="text-muted d-block">
        {`Joined at: ${joinedAt.toLocaleTimeString()}`}
      </small>
    </div>
  );
};

export default componentName;
