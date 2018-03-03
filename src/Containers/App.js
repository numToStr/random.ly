import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Chat from "./Chat/Chat";
import Join from "./Join/Join";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/" exact component={Join} />
      </Switch>
    );
  }
}

export default App;
