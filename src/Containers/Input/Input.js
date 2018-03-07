import React, { Component } from "react";

import Textarea from "../../Components/Textarea/Textarea";

class Input extends Component {
  render() {
    return <Textarea submit={this.props.submit} />;
  }
}

export default Input;
