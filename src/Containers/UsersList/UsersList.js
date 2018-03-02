import React, { Component } from "react";

import classes from "./UsersList.css";

class UsersList extends Component {
  render() {
    return (
      <div className={"bg-light " + classes.UsersList}>
        <p>Users</p>
      </div>
    );
  }
}

export default UsersList;
