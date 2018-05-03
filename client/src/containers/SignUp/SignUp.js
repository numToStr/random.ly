import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import {
    TextField,
    Button,
    FormControl
} from "material-ui";

class SignUp extends Component {
    state = {
        showPassword: false
    };

    inputField = field => {
        return (
            <TextField
                {...field.input}
                {...field}
                margin="normal"
                InputLabelProps={{
                    shrink: true
                }}
                fullWidth
            />
        );
    };

    render() {
        return (
            <Fragment>
                <form
                    onSubmit={this.props.handleSubmit}
                    noValidate
                    autoComplete="off"
                >
                    <Field
                        name="firstName"
                        label="Name"
                        placeholder="John Doe"
                        type="text"
                        component={this.inputField}
                    />
                    <Field
                        name="email"
                        label="Email"
                        placeholder="johndoe@email.com"
                        type="email"
                        component={this.inputField}
                    />
                    <Field
                        name="password"
                        label="Password"
                        placeholder="I'll be our secret"
                        type="password"
                        component={this.inputField}
                    />
                    <FormControl margin="normal" fullWidth>
                        <Button variant="raised" type="Submit" color="primary">
                            Create my account
                        </Button>
                    </FormControl> 
                </form>
            </Fragment>
        );
    }
}

SignUp = reduxForm({
    form: "signup"
})(SignUp);

export default SignUp;
