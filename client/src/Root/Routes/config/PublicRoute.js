import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PublicRoute extends Component {
	render() {
		const { isAuth, component: Component, ...rest } = this.props;
		const { from } = this.props.location.state || {
			from: { pathname: "/chat" }
		};

		return (
			<Route
				{...rest}
				render={props =>
					isAuth ? <Redirect to={from} /> : <Component {...props} />
				}
			/>
		);
	}
}

export default PublicRoute;
