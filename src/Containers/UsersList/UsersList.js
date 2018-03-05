import React, { Component } from "react";
import Users from "../../Components/Users/Users";

class UsersList extends Component {
  render() {
    return (
      <div className={"bg-light vh-100"}>
        <p className="display-4 text-center">People</p>
        <Users
          usersList={this.props.usersList}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default UsersList;
