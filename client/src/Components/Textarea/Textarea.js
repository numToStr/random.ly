import React, { Component } from "react";

import SendIcon from "./Icons/Send";

import styles from "./Textarea.css";

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
        <div className="input-group position-relative">
          <input
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type your message..."
            className={`form-control bg-light py-2 px-3 text-secondary ${
              styles.MessageInput
            }`}
            onInput={this.setMsg}
            value={this.state.msg}
            autoFocus
          />
          <button
            type="submit"
            className="btn btn-dark ml-1 rounded-circle d-flex justify-content align-items-center"
          >
            <SendIcon />
          </button>
          {/* <button
              className="btn btn-sm btn-dark rounded-0 ml-1"
              type="button"
            >
              Location
            </button> */}
        </div>
      </form>
    );
  }
}

export default textarea;
