import React from "react";
import User from "./User/User";

const componentName = props => {
  const users = props.usersList.map(u => (
    <User key={u.id} user={u} currentUser={props.currentUser} />
  ));

  return <div>{users}</div>;
};

export default componentName;
