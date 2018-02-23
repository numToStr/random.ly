import React, { Component } from "react";
import AuxComp from "../HOC/AuxComp";
// import { subscribeToTimer } from "../api";

class App extends Component {
  state = {
    timer: null,
    customers: null
  };
  componentDidMount() {
    // subscribeToTimer((err, timestamp) => {
    //   this.setState({ timer: timestamp });
    // });
    fetch("/api/customers")
      .then(res => res.json())
      .then(data => {
        this.setState({ customers: data });
        console.log(data);
      });
  }

  render() {
    return (
      <AuxComp>
        {this.state.customers &&
          this.state.customers.map(customer => (
            <AuxComp key={customer.name}>
              <small>{customer.name}</small>
              <br />
            </AuxComp>
          ))}
        <small>{this.state.timer}</small>
      </AuxComp>
    );
  }
}

export default App;
