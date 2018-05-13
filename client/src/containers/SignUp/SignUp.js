import React, { Component, Fragment } from "react";
import { Grid } from "material-ui";
import axios from 'axios';

import SignUpForm from "../../components/Forms/SignUp/SignUp";

class SignUp extends Component {
	onSignUp = values => {
		const { history } = this.props;
		if (values) {
			axios.post('/auth/signup', values).then(d => {
				const D = d.data;
				if (D.status) {
					history.push({
						pathname: '/user/login'
					})
				} else {
					throw D.err;
				}
			}).catch(e => {
				throw e
			})
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

export default SignUp;
