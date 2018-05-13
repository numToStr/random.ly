import React, { Component, Fragment } from "react";
import { Grid, Typography } from "material-ui";
import { connect } from 'react-redux';

import Header from "../../components/Header/Header";

import { authAutoSignIn } from '../../Store/actions/index';

class Home extends Component {

	componentDidMount() {
		const { history } = this.props;
		this.props.onAutoSignIn(() => {
			history.replace({
				pathname: '/user/dashboard'
			})
		})
	}

	render() {
		return (
			<Fragment>
				<Grid container>
					<Grid item xs={12}>
						<Header title="random.ly" />
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant="display3">
							{/* Chat with random peaple ... and make new friends */}
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						two
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAutoSignIn: cb => dispatch(authAutoSignIn(cb))
	}
}

export default connect(null, mapDispatchToProps)(Home);
