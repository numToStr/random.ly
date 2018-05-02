import React, { Component, Fragment } from "react";
import { TextField } from "material-ui";

class SignUp extends Component {
    state = {
        name: ""
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <Fragment>
                <form className="" noValidate autoComplete="off">
                    <TextField
                        id="name"
                        label="Name"
                        className=""
                        value={this.state.name}
                        onChange={this.handleChange("name")}
                        margin="normal"
                    />
                </form>
            </Fragment>
        );
    }
}

export default SignUp;
