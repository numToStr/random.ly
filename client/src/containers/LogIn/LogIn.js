import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FormControl, Typography } from "@material-ui/core";
import { connect } from "react-redux";

import { login } from "../../Store/actions/index";
import LogInForm from "../../components/Forms/LogIn/LogIn";
import FormLayout from "../../components/FormLayout/FormLayout";

class LogIn extends Component {
	onLogIn = values => {
		const { handleLogin } = this.props;
		if (values) {
			handleLogin(values);
		}
	};

	render() {
		const { loading, error } = this.props;
		return (
			<FormLayout>
				<LogInForm
					onSubmit={this.onLogIn}
					loading={loading}
					formError={error}
				/>
				<FormControl margin="dense" fullWidth>
					<Typography
						align="center"
						color="textSecondary"
						variant="caption"
					>
						Need an account?{" "}
						<NavLink to="/user/signup">Signup</NavLink>
					</Typography>
				</FormControl>
			</FormLayout>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.loginError
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLogin: (data, cb) => dispatch(login(data, cb))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogIn);
