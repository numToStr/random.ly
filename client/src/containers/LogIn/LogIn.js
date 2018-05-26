import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Grid, FormControl, Typography } from "@material-ui/core";
import { connect } from "react-redux";

import { login } from "../../Store/actions/index";
import LogInForm from "../../components/Forms/LogIn/LogIn";
import Logo from "../../components/Images/Logo/RandomLyFull";

class LogIn extends Component {
	onLogIn = values => {
		const { handleLogin, history } = this.props;
		if (values) {
			handleLogin(values, data => {
				history.push({
					pathname: "/user/dashboard"
				});
			});
		}
	};

	render() {
		const { loading } = this.props;
		return (
			<Fragment>
				<Grid container justify="center" className="pt-5">
					<Grid item xs={9} sm={5} md={3} className="mt-5">
						<Typography className="text-center mb-3">
							<NavLink to="/">
								<Logo width="13rem" />
							</NavLink>
						</Typography>
						<LogInForm onSubmit={this.onLogIn} loading={loading} />
						<FormControl margin="dense" fullWidth>
							<Typography
								align="center"
								color="textSecondary"
								variant="caption"
							>
								Need an account?
								<NavLink to="/user/signup"> Signup</NavLink>
							</Typography>
						</FormControl>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLogin: (data, cb) => dispatch(login(data, cb))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
