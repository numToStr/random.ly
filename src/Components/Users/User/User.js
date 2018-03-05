import React from "react";

const componentName = props => {
  return (
    <div className="bg-white mx-2 mb-2 p-2">
      <span className="lead">{props.user.name}</span>
    </div>
  );
};

export default componentName;
