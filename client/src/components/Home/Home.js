import React, { Component, Fragment } from "react";
import SignUp from "../../containers/SignUp/SignUp";
import { Grid } from "material-ui";

class Home extends Component {
    onSignUp = values => {
        console.log(values);
    };

    render() {
        return (
            <Fragment>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={6} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container justify="center">
                            <Grid item xs={6}>
                                <SignUp onSubmit={this.onSignUp} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default Home;
