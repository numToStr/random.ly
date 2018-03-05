import React, { Component } from "react";

class Join extends Component {
  state = {
    displayName: "",
    roomName: ""
  };

  goToChat = e => {
    e.preventDefault();

    const queryParams = [
      encodeURIComponent("name") +
        "=" +
        encodeURIComponent(this.state.displayName),
      encodeURIComponent("room") + "=" + encodeURIComponent(this.state.roomName)
    ];
    const queryString = queryParams.join("&");

    this.props.history.push({
      pathname: "/chat",
      search: "?" + queryString
    });
  };

  render() {
    return (
      <form>
        <div className="container">
          <div className="row">
            <div className="col-5 mx-auto">
              <div className="form-group">
                <label htmlFor="">Display Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Display Name"
                  onChange={event =>
                    this.setState({ displayName: event.target.value })
                  }
                  value={this.state.displayName}
                />
                <small className="form-text">
                  We will never share your information
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="">Room Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={event =>
                    this.setState({ roomName: event.target.value })
                  }
                  value={this.state.roomName}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary w-100"
                  onClick={this.goToChat}
                >
                  Let's Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Join;
