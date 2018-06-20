import React, { Component } from "react";
import { Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { authAutoSignIn, onConnect } from "../../Store/actions/index";

import PrivateRoute from "./config/PrivateRoute";
import PublicRoute from "./config/PublicRoute";

import {
	Home,
	SignUp,
	LogIn,
	Chat,
	Profile,
	Connect
} from "./config/AsyncRoutes";
import Loader from "../../components/Loader/Loader";

class Routes extends Component {
	state = {
		goAhead: false
	};

	componentDidMount() {
		const { onAutoSignIn, ioConnect } = this.props;

		onAutoSignIn(d => {
			this.setState({ goAhead: d });
		});
		ioConnect();
	}

	render() {
		const { isAuth } = this.props;
		const { goAhead } = this.state;

		if (!goAhead) {
			return <Loader />;
		}

		return (
			<Switch>
				<PrivateRoute
					isAuth={isAuth}
					path="/user/profile"
					component={Profile}
				/>
				<PrivateRoute isAuth={isAuth} path="/chat" component={Chat} />
				<PrivateRoute
					isAuth={isAuth}
					path="/connect"
					component={Connect}
				/>
				<PublicRoute
					isAuth={isAuth}
					path="/user/login"
					component={LogIn}
				/>
				<PublicRoute
					isAuth={isAuth}
					path="/user/signup"
					component={SignUp}
				/>
				<PublicRoute isAuth={isAuth} path="/" exact component={Home} />
				<Redirect to="/" />
			</Switch>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.user.id ? true : false
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAutoSignIn: cb => dispatch(authAutoSignIn(cb)),
		ioConnect: () => dispatch(onConnect())
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Routes)
);
