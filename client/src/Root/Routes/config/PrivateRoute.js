import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
	render() {
		const { isAuth, component: Component, ...rest } = this.props;

		return (
			<Route
				{...rest}
				render={props =>
					isAuth ? (
						<Component {...props} />
					) : (
						<Redirect to="/user/login" />
					)
				}
			/>
		);
	}
}

export default PrivateRoute;
