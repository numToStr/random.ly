import React, { Component, Fragment } from "react";
import { IconButton, withStyles, Popover, Tooltip } from "@material-ui/core";
import InvertColors from "@material-ui/icons/InvertColors";
import Lens from "@material-ui/icons/Lens";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { connect } from "react-redux";
import { themeChange } from "../../Store/actions";
import { isMobile } from "../../Store/helper/helper";

const styles = theme => {
	return {
		popOver: {
			padding: ".25rem",
			borderRadius: "10rem"
		}
	};
};

class ThemeChooser extends Component {
	state = {
		anchorEl: null,
		colorPickers: [
			{
				name: "Dark",
				palette: {
					primary: {
						main: grey[900]
					},
					secondary: {
						main: grey[300]
					}
				}
			},
			{
				name: "Blue",
				palette: {
					primary: {
						main: blue[500]
					},
					secondary: {
						main: grey[300]
					}
				}
			},
			{
				name: "Pink",
				palette: {
					primary: {
						main: pink[500]
					},
					secondary: {
						main: grey[300]
					}
				}
			},
			{
				name: "Purple",
				palette: {
					primary: {
						main: purple["A200"]
					},
					secondary: {
						main: grey[300]
					}
				}
			},
			{
				name: "Green",
				palette: {
					primary: {
						main: green["A400"]
					},
					secondary: {
						main: grey[300]
					}
				}
			}
		]
	};

	handleOpen = event => {
		this.setState({
			anchorEl: event.currentTarget
		});
	};

	handleClose = () => {
		this.setState({
			anchorEl: null
		});
	};

	render() {
		const {
			classes: { popOver },
			onThemeChange
		} = this.props;
		const { handleOpen, handleClose } = this;
		const { anchorEl, colorPickers } = this.state;

		return (
			<Fragment>
				<Tooltip title="Themes" disableFocusListener>
					<IconButton color="primary" onClick={handleOpen}>
						<InvertColors />
					</IconButton>
				</Tooltip>
				<Popover
					open={Boolean(anchorEl)}
					anchorReference={isMobile ? "anchorPosition" : "anchorEl"}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorPosition={{
						top: 50,
						left: window.innerWidth / 2
					}}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center"
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "center"
					}}
					classes={{
						paper: popOver
					}}
				>
					{colorPickers.map(({ name, palette }, i) => (
						<IconButton
							key={i}
							style={{
								color: palette.primary.main
							}}
							name={name}
							onClick={() => onThemeChange(palette)}
						>
							<Lens />
						</IconButton>
					))}
				</Popover>
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onThemeChange: p => dispatch(themeChange(p))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(withStyles(styles)(ThemeChooser));
