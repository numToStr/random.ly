import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { Grid } from "material-ui";

import { auth } from '../../Store/actions/index';
import SignUpForm from "../../components/Forms/SignUp/SignUp";

class SignUp extends Component {
	onSignUp = (values, err) => {
		if (values) {
			this.props.signUp(values);
		}
	};

	render() {
		return (
			<Fragment>
				<Grid container justify="center">
					<Grid item xs={9} sm={5} md={3}>
						<SignUpForm onSubmit={this.onSignUp} />
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signUp: data => dispatch(auth(data))
	}
}

export default connect(null, mapDispatchToProps)(SignUp);
