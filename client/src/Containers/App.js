import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AsyncComp from "../HOC/AsyncComponent";

const Chat = AsyncComp(() => import("./Chat/Chat"));
const Join = AsyncComp(() => import("./Join/Join"));

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
