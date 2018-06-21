import React, { Component, Fragment } from "react";
import { IconButton, withStyles, Popover, Tooltip } from "@material-ui/core";
import InvertColors from "@material-ui/icons/InvertColors";
import Lens from "@material-ui/icons/Lens";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

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
				color: grey[900]
			},
			{
				name: "Blue",
				color: blue[500]
			},
			{
				name: "Pink",
				color: pink[500]
			},
			{
				name: "Purple",
				color: purple["A200"]
			},
			{
				name: "Green",
				color: green["A400"]
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

	changeTheme = color => {
		console.log(color);
	};

	render() {
		const {
			classes: { headerBtns, popOver }
		} = this.props;
		const { handleOpen, handleClose, changeTheme } = this;
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
					{colorPickers.map(({ name, color }, i) => (
						<IconButton
							key={i}
							style={{
								color
							}}
							name={name}
							onClick={() => changeTheme(color)}
						>
							<Lens />
						</IconButton>
					))}
				</Popover>
			</Fragment>
		);
	}
}

export default withStyles(styles)(ThemeChooser);
