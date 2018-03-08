import React, { Component } from "react";
import { connect } from "react-redux";

import RandomLy from "../../assets/images/random-ly";

class Join extends Component {
  state = {
    displayName: "",
    roomName: ""
  };

  goToChat = e => {
    e.preventDefault();

    // if (!this.state.displayName || !this.state.roomName) {
    //   alert("Display Name or Room Name is not valid.");
    //   return;
    // }

    // const queryParams = [
    //   encodeURIComponent("name") +
    //     "=" +
    //     encodeURIComponent(this.state.displayName),
    //   encodeURIComponent("room") + "=" + encodeURIComponent(this.state.roomName)
    // ];
    // const queryString = queryParams.join("&");

    // this.props.history.push({
    //   pathname: "/chat",
    //   search: "?" + queryString
    // });

    this.props.onSetCurrentUser({
      name: this.state.displayName,
      room: this.state.roomName
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-11 col-md-6 col-lg-4 mx-auto pt-4">
            <div className="text-center d-flex justify-content-center align-items-center py-3">
              <RandomLy width="4rem" />
              <span className="h3 text-secondary ml-3">random.ly</span>
            </div>
            <form onSubmit={this.goToChat}>
              <div className="form-group">
                <label htmlFor="" className="text-secondary">
                  Display Name
                </label>
                <input
                  type="text"
                  className="form-control badge-pill px-3"
                  placeholder="Display Name"
                  onChange={event =>
                    this.setState({ displayName: event.target.value })
                  }
                  value={this.state.displayName}
                />
                <small className="form-text text-muted">
                  We will never share your information
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="" className="text-secondary">
                  Room Name
                </label>
                <input
                  type="text"
                  className="form-control badge-pill px-3"
                  onChange={event =>
                    this.setState({ roomName: event.target.value })
                  }
                  value={this.state.roomName}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary-randomly w-100 badge-pill text-white font-weight-bold">
                  Let's Chat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     ...state
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onSetCurrentUser: currentUser =>
      dispatch({ type: "SET_CURRENTUSER", currentUser })
  };
};

export default connect(/*mapStateToProps*/ null, mapDispatchToProps)(Join);
