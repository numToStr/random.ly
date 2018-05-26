import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Typography, Button, withStyles } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import ChatImage from "../../components/Images/ChatImage/ChatImage";
import { isMobile } from "../../Store/helper/helper";

const styles = theme => ({
	gradient: {
		background: "linear-gradient(152deg, #fff 55%, #212121 55%);"
	}
});

class Home extends Component {
	render() {
		const { classes } = this.props;

		let bannerImage = null;
		if (!isMobile) {
			bannerImage = (
				<Grid item xs={12} md={6} className="text-center pt-5">
					<ChatImage width="65%" className="mt-5" />
				</Grid>
			);
		}

		return (
			<Fragment>
				<Layout>
					<Grid container className={`${classes.gradient} h-100`}>
						<Grid item xs={12} md={6} className="px-3 px-md-5 pt-5">
							<Typography
								paragraph
								variant={isMobile ? "display1" : "display2"}
								className="mt-md-5 pt-md-5"
								color="secondary"
							>
								Chat with random People
							</Typography>
							<Typography
								variant={isMobile ? "body1" : "subheading"}
								paragraph
								className="pr-3 pr-md-5 mr-md-5"
								color="textSecondary"
							>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Aspernatur blanditiis eaque
								nobis vitae facere voluptatum! Repudiandae,
								officia porro aliquid alias quis possimus
								architecto nesciunt exercitate.
							</Typography>
							<Button
								className="mt-3 mt-md-4 capsule"
								variant="raised"
								component={NavLink}
								to="/user/signup"
								color="primary"
							>
								Get Started
							</Button>
						</Grid>
						{bannerImage}
					</Grid>
				</Layout>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
