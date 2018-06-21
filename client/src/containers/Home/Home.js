import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Typography, Button, withStyles, Paper } from "@material-ui/core";

import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Images/Hero/Hero";
import { isMobile } from "../../Store/helper/helper";

const styles = ({ palette: { primary }, breakpoints }) => ({
	gradient: {
		background: `linear-gradient(152deg, #fff 55%, ${primary.main} 55%)`
	},
	heroText: {
		background: "none",
		padding: "2.8rem 2rem 0",
		[breakpoints.up("md")]: {
			marginTop: "8.5rem",
			padding: "2.8rem 3.5rem 0"
		}
	},
	heroImage: {
		marginTop: "1.5rem",
		width: "16rem",
		[breakpoints.up("md")]: {
			marginTop: "3rem",
			width: "80%"
		}
	}
});

class Home extends Component {
	render() {
		const {
			classes: { gradient, heroText, heroImage }
		} = this.props;

		return (
			<Fragment>
				<Layout>
					<Paper elevation={0} className={`${gradient} h-100`}>
						<Grid container>
							<Grid item xs={12} md={6}>
								<Paper
									elevation={0}
									classes={{
										root: heroText
									}}
								>
									<Typography
										paragraph
										variant={
											isMobile ? "headline" : "display1"
										}
										color="secondary"
									>
										Chat with random People
									</Typography>
									<Typography
										variant={
											isMobile ? "body1" : "subheading"
										}
										paragraph
										color="textSecondary"
									>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Aspernatur blanditiis
										eaque nobis vitae facere voluptatum!
										Repudiandae, officia porro aliquid alias
										quis possimus architecto nesciunt.
									</Typography>
									<Button
										variant="raised"
										component={NavLink}
										to="/user/signup"
										color="primary"
										style={{
											marginTop: ".8rem"
										}}
									>
										Get Started
									</Button>
								</Paper>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography align="center">
									<Hero className={heroImage} />
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Layout>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
