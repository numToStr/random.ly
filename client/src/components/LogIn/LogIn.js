import React, { Component, Fragment } from "react";
import { Grid } from "material-ui";
import axios from "axios";

import LogInForm from "../../containers/Forms/LogIn/LogIn";

class LogIn extends Component {
	onLogIn = values => {
		axios
			.post("/auth/login", values)
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
						<LogInForm onSubmit={this.onLogIn} />
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default LogIn;
