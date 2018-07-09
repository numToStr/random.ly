import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { Grid, Typography } from "@material-ui/core";
import ChangeName from "../../components/Forms/Profile/ChangeName";
import ChangeEmail from "../../components/Forms/Profile/ChangeEmail";
import ChangePassword from "../../components/Forms/Profile/ChangePassword";

class Profile extends Component {
	state = {
		changeName: false,
		changeEmail: false,
		changePassword: false
	};

	openProfileForm = which => () => {
		this.setState({
			[which]: true
		});
	};

	closeProfileForm = which => () => {
		this.setState({
			[which]: false
		});
	};

	onProfileUpdate = which => values => {
		console.log(which, values);
	};

	render() {
		const { changeName, changeEmail, changePassword } = this.state;
		const {
			user: { name, email }
		} = this.props;
		const { openProfileForm, closeProfileForm, onProfileUpdate } = this;

		return (
			<Layout>
				<Typography
					align="center"
					color="textSecondary"
					variant="title"
					style={{
						margin: "1rem 0 2rem"
					}}
				>
					Your Account
				</Typography>
				<Grid container justify="center">
					<Grid item xs={9} sm={3}>
						<Typography
							align="center"
							color="textSecondary"
							variant="subheading"
						>
							Name
						</Typography>
						<Typography
							color="primary"
							align="center"
							variant="body2"
							paragraph
						>
							{name}
						</Typography>
						<Typography
							variant="caption"
							align="center"
							paragraph
							onClick={openProfileForm("changeName")}
							style={{
								cursor: "pointer",
								textDecoration: "underline"
							}}
						>
							Modify your name
						</Typography>
					</Grid>
					<Grid item xs={9} sm={3}>
						<Typography
							align="center"
							color="textSecondary"
							variant="subheading"
						>
							Email
						</Typography>
						<Typography
							color="primary"
							align="center"
							variant="body2"
							paragraph
						>
							{email}
						</Typography>
						<Typography
							variant="caption"
							align="center"
							gutterBottom
							onClick={openProfileForm("changeEmail")}
							style={{
								cursor: "pointer",
								textDecoration: "underline"
							}}
						>
							Change your email
						</Typography>
						<Typography
							variant="caption"
							align="center"
							paragraph
							onClick={openProfileForm("changePassword")}
							style={{
								cursor: "pointer",
								textDecoration: "underline"
							}}
						>
							Reset your password
						</Typography>
					</Grid>
				</Grid>
				<ChangeName
					onSubmit={onProfileUpdate("changeName")}
					open={changeName}
					handleClose={closeProfileForm("changeName")}
				/>
				<ChangeEmail
					onSubmit={onProfileUpdate("changeEmail")}
					open={changeEmail}
					handleClose={closeProfileForm("changeEmail")}
				/>
				<ChangePassword
					onSubmit={onProfileUpdate("changePassword")}
					open={changePassword}
					handleClose={closeProfileForm("changePassword")}
				/>
			</Layout>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user
	};
};

export default connect(mapStateToProps)(Profile);
