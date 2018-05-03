import React, { Component, Fragment } from "react";
import { Grid } from "material-ui";

import SignUp from "../../containers/Forms/SignUp/SignUp";
// import RandomLy from '../../containers/Logo/RandomLy';

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
                            <Grid item xs={6}>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container justify="center">
                            <Grid item xs={9} sm={5} md={6}>
                                {/* <RandomLy width="3rem" /> */}
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
