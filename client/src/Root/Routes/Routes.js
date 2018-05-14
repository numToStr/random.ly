import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { authAutoSignIn } from "../../Store/actions/index";

import Home from "../../containers/Home/Home";
import SignUp from "../../containers/SignUp/SignUp";
import LogIn from "../../containers/LogIn/LogIn";
import Dashboard from "../../containers/Dashboard/Dashboard";
import Profile from "../../containers/Profile/Profile";

class Routes extends Component {
	componentDidMount() {
		const { onAutoSignIn, history } = this.props;

		onAutoSignIn(() => {
			history.replace({
				pathname: "/user/dashboard"
			});
		});
	}

	render() {
		const { isAuth } = this.props;

		return (
			<Switch>
				{isAuth && <Route path="/user/profile" component={Profile} />}
				{isAuth && (
					<Route path="/user/dashboard" component={Dashboard} />
				)}
				<Route path="/user/login" component={LogIn} />
				<Route path="/user/signup" component={SignUp} />
				<Route path="/" exact component={Home} />
				<Redirect to="/" />
			</Switch>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.token ? true : false
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAutoSignIn: cb => dispatch(authAutoSignIn(cb))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
