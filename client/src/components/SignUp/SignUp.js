import React, { Component, Fragment } from "react";
import { Grid } from "material-ui";
import axios from "axios";

import SignUpForm from "../../containers/Forms/SignUp/SignUp";

class SignUp extends Component {
	onSignUp = values => {
		axios
			.post("/auth/signup", values)
			.then(d => console.log(d.data))
			.catch(e => {
				throw e;
			});
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

export default SignUp;
