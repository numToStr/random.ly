import React, { Component } from "react";

const AsyncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then(_component =>
        this.setState({ component: _component.default })
      );
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  };
};

export default AsyncComponent;
