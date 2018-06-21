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

const styles = theme => {
	return {
		headerBtns: {
			marginLeft: ".75rem"
		},
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
						main: grey[700]
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
						main: grey[700]
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
						main: grey[700]
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
						main: grey[700]
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
						main: grey[700]
					}
				}
			}
		]
	};

	componentDidMount() {
		const { onThemeChange } = this.props;
		const _P = localStorage.getItem("randomly_theme");

		if (_P) {
			const PALETTE = JSON.parse(_P);
			onThemeChange(PALETTE);
		}
	}

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
			classes: { headerBtns, popOver },
			onThemeChange
		} = this.props;
		const { handleOpen, handleClose } = this;
		const { anchorEl, colorPickers } = this.state;

		return (
			<Fragment>
				<Tooltip title="Themes" disableFocusListener>
					<IconButton
						classes={{
							root: headerBtns
						}}
						color="primary"
						onClick={handleOpen}
					>
						<InvertColors />
					</IconButton>
				</Tooltip>
				<Popover
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					onClose={handleClose}
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
