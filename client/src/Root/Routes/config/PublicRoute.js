import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PublicRoute extends Component {
	render() {
		const { isAuth, component: Component, ...rest } = this.props;

		return (
			<Route
				{...rest}
				render={props =>
					isAuth ? (
						<Redirect to="/user/dashboard" />
					) : (
						<Component {...props} />
					)
				}
			/>
		);
	}
}

export default PublicRoute;
