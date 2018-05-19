import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { signup } from "../../Store/actions/index";
import SignUpForm from "../../components/Forms/SignUp/SignUp";
import Logo from "../../components/Logo/RandomLyFull";

class SignUp extends Component {
	onSignUp = values => {
		const { history, handleSignup } = this.props;
		if (values) {
			handleSignup(values, data => {
				history.push({
					pathname: "/user/login"
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
						<SignUpForm onSubmit={this.onSignUp} />
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleSignup: (data, cb) => dispatch(signup(data, cb))
	};
};

export default connect(null, mapDispatchToProps)(SignUp);
