import React, { Component } from "react";
import AuxComp from "../HOC/AuxComp";

class App extends Component {
  render() {
    return (
      <AuxComp>
        <div>this is home</div>
      </AuxComp>
    );
  }
}

export default App;
