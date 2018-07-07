import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { Grid, Typography } from "@material-ui/core";
import ProfileForm from "../../components/Forms/Profile/Profile";

class Profile extends Component {
	state = {
		openForm: false,
		formOptions: {
			title: null,
			fields: []
		}
	};

	openProfileForm = e => {
		const title = e.target.innerText;
		let fields = [];

		if (/name/.test(title)) {
			fields = [
				{
					name: "name",
					label: "Your name",
					placeholder: "John Doe",
					type: "text"
				}
			];
		} else if (/email/.test(title)) {
			fields = [
				{
					name: "email",
					label: "New email",
					placeholder: "Enter your new email",
					type: "email"
				},
				{
					name: "current-password",
					label: "Current Password",
					placeholder: "Enter you current password",
					type: "password"
				}
			];
		} else if (/password/.test(title)) {
			fields = [
				{
					name: "current-password",
					label: "Current Password",
					placeholder: "Enter you current password",
					type: "password"
				},
				{
					name: "new-password",
					label: "New Password",
					placeholder: "Your new password",
					type: "password"
				},
				{
					name: "confirm-password",
					label: "Confirm Password",
					placeholder: "It should match",
					type: "password"
				}
			];
		}

		this.setState({
			openForm: true,
			formOptions: { title, fields }
		});
	};

	closeProfileForm = () => this.setState({ openForm: false });

	onProfileUpdate = values => {
		console.log(values);
	};

	render() {
		const { openForm, formOptions } = this.state;
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
						marginBottom: "2rem"
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
							onClick={openProfileForm}
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
							onClick={openProfileForm}
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
							onClick={openProfileForm}
							style={{
								cursor: "pointer",
								textDecoration: "underline"
							}}
						>
							Reset your password
						</Typography>
					</Grid>
				</Grid>
				<ProfileForm
					onSubmit={onProfileUpdate}
					open={openForm}
					handleClose={closeProfileForm}
					options={formOptions}
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
