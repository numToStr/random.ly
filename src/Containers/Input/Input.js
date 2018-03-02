import React, { Component } from "react";

import Textarea from "../../Components/Textarea/Textarea";

class Input extends Component {
  render() {
    return (
      <div>
        <Textarea submit={this.props.submit} />
      </div>
    );
  }
}

export default Input;
