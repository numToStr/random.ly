import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { login } from "../../Store/actions/index";
import LogInForm from "../../components/Forms/LogIn/LogIn";
import Logo from "../../components/Logo/RandomLyFull";

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
		return (
			<Fragment>
				<Grid container justify="center" className="pt-5 mt-4">
					<Grid item xs={9} sm={5} md={3}>
						<div className="text-center mb-3">
							<Logo width="13rem" />
						</div>
						<LogInForm onSubmit={this.onLogIn} />
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleLogin: (data, cb) => dispatch(login(data, cb))
	};
};

export default connect(null, mapDispatchToProps)(LogIn);
