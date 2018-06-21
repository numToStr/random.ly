import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import grey from "@material-ui/core/colors/grey";

import Routes from "../Routes/Routes";

class APP extends Component {
	render() {
		const { themeColor } = this.props;

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
			palette: {
				primary: {
					main: themeColor
				},
				secondary: {
					main: grey[700]
				}
			},
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

const mapStateToProps = state => {
	return {
		themeColor: state.theme.color
	};
};

export default connect(mapStateToProps)(APP);
