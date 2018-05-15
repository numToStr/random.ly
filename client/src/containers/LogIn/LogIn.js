import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { login } from "../../Store/actions/index";
import LogInForm from "../../components/Forms/LogIn/LogIn";

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
				<Grid container justify="center">
					<Grid item xs={9} sm={5} md={3}>
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
