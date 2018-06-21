import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { themeChange } from "../../Store/actions";
import Routes from "../Routes/Routes";

class APP extends Component {
	componentDidMount() {
		const { onThemeChange } = this.props;
		const _P = localStorage.getItem("randomly_theme");

		if (_P) {
			const PALETTE = JSON.parse(_P);
			onThemeChange(PALETTE);
		}
	}

	render() {
		const { palette } = this.props;

		const THEME = createMuiTheme({
			// shadows: Array(25),
			overrides: {
				MuiButton: {
					root: {
						borderRadius: "10rem"
					},
					raised: {
						boxShadow: "none"
					}
				},
				MuiAppBar: {
					root: {
						boxShadow: "none"
					}
				}
			},
			palette,
			typography: {
				fontFamily: [
					// "Roboto Mono",
					// "monospace",
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					'"Helvetica Neue"',
					"Arial",
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"'
				].join(",")
			}
		});

		return (
			<BrowserRouter>
				<Fragment>
					<MuiThemeProvider theme={THEME}>
						<CssBaseline />
						<Routes />
					</MuiThemeProvider>
				</Fragment>
			</BrowserRouter>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onThemeChange: p => dispatch(themeChange(p))
	};
};

const mapStateToProps = state => {
	return {
		palette: state.theme.palette
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(APP);
