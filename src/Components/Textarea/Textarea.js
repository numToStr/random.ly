import React, { Component } from "react";

class textarea extends Component {
  state = {
    msg: ""
  };

  setMsg = event => {
    this.setState({ msg: event.target.value });
  };

  onFormSubmit = event => {
    this.props.submit(event, this.state.msg);
    this.setState({ msg: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="py-3">
        <div className="input-group">
          <input
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control rounded-0 border border-dark"
            onInput={this.setMsg}
            value={this.state.msg}
            autoFocus
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-sm btn-dark rounded-0 ml-1"
            >
              Submit
            </button>
            {/* <button
              className="btn btn-sm btn-dark rounded-0 ml-1"
              type="button"
            >
              Location
            </button> */}
          </div>
        </div>
      </form>
    );
  }
}

export default textarea;
