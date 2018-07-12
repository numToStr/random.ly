import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography, IconButton, Tooltip } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import Layout from "../../components/Layout/Layout";
import ChangeName from "../../components/Forms/Profile/ChangeName";
import ChangeEmail from "../../components/Forms/Profile/ChangeEmail";
import ChangePassword from "../../components/Forms/Profile/ChangePassword";

import {
	onUpdateName,
	onUpdateEmail,
	onUpdatePassword
} from "../../Store/actions/user";

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
		const { updateName, updateEmail, updatePassword } = this.props;
		const { closeProfileForm } = this;

		switch (which) {
			case "changeName":
				updateName(values, u => u && closeProfileForm(which)());
				break;
			case "changeEmail":
				updateEmail(values, u => u && closeProfileForm(which)());
				break;
			case "changePassword":
				delete values["confirm-password"];
				updatePassword(values, u => u && closeProfileForm(which)());
				break;
			default:
				return false;
		}
	};

	render() {
		const { changeName, changeEmail, changePassword } = this.state;
		const {
			user: { name, email },
			updateErrorName,
			updateErrorEmail,
			updateErrorPassword
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
					<Grid item xs={12} sm={3}>
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
							gutterBottom
						>
							<span
								onClick={openProfileForm("changeName")}
								style={{
									cursor: "pointer",
									textDecoration: "underline"
								}}
							>
								Modify your name
							</span>
						</Typography>
					</Grid>
					<Grid item xs={12} sm={3}>
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
						>
							<span
								onClick={openProfileForm("changeEmail")}
								style={{
									cursor: "pointer",
									textDecoration: "underline"
								}}
							>
								Change your email
							</span>
						</Typography>
						<Typography
							variant="caption"
							align="center"
							gutterBottom
						>
							<span
								onClick={openProfileForm("changePassword")}
								style={{
									cursor: "pointer",
									textDecoration: "underline"
								}}
							>
								Reset your password
							</span>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							align="center"
							style={{ marginTop: "3rem" }}
						>
							<Tooltip title="Delete Account">
								<IconButton color="primary">
									<Delete />
								</IconButton>
							</Tooltip>
						</Typography>
					</Grid>
				</Grid>
				<ChangeName
					onSubmit={onProfileUpdate("changeName")}
					open={changeName}
					formError={updateErrorName}
					handleClose={closeProfileForm("changeName")}
				/>
				<ChangeEmail
					onSubmit={onProfileUpdate("changeEmail")}
					open={changeEmail}
					formError={updateErrorEmail}
					handleClose={closeProfileForm("changeEmail")}
				/>
				<ChangePassword
					onSubmit={onProfileUpdate("changePassword")}
					open={changePassword}
					formError={updateErrorPassword}
					handleClose={closeProfileForm("changePassword")}
				/>
			</Layout>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		updateErrorName: state.auth.updateErrorName,
		updateErrorEmail: state.auth.updateErrorEmail,
		updateErrorPassword: state.auth.updateErrorPassword
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateName: (data, cb) => dispatch(onUpdateName(data, cb)),
		updateEmail: (data, cb) => dispatch(onUpdateEmail(data, cb)),
		updatePassword: (data, cb) => dispatch(onUpdatePassword(data, cb))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
