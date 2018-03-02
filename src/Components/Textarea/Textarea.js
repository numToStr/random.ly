import React, { Component } from "react";

class textarea extends Component {
  state = {
    msg: ""
  };

  setMsg = event => {
    this.setState({ msg: event.target.value });
  };

  render() {
    return (
      <form onSubmit={event => this.props.submit(event, this.state.msg)}>
        <input
          name=""
          id=""
          cols="30"
          rows="10"
          className="form-control rounded-0 border border-dark"
          onInput={this.setMsg}
          value={this.state.msg}
        />
        <button className="btn btn-dark rounded-0">Submit</button>
      </form>
    );
  }
}

export default textarea;
