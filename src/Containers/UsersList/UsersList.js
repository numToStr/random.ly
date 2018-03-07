import React, { Component } from "react";
import Users from "../../Components/Users/Users";

class UsersList extends Component {
  render() {
    return (
      <div className="d-none d-md-block col-md-4 px-0">
        <div className={"bg-light vh-100"}>
          <p className="display-4 text-center">People</p>
          <Users
            usersList={this.props.usersList}
            currentUser={this.props.currentUser}
          />
        </div>
      </div>
    );
  }
}

export default UsersList;
