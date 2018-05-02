import React, { Component, Fragment } from "react";
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    FormControl
} from "material-ui";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        showPassword: false
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleClickShowPassword = () => {
        this.setState(prevState => {
            return { showPassword: !prevState.showPassword };
        });
    };

    render() {
        return (
            <Fragment>
                <form
                    onSubmit={this.props.submit}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        type="text"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange("name")}
                        margin="normal"
                        placeholder="John Doe"
                        InputLabelProps={{
                            shrink: true
                        }}
                        fullWidth
                    />
                    <TextField
                        type="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange("email")}
                        margin="normal"
                        placeholder="johndoe@email.com"
                        InputLabelProps={{
                            shrink: true
                        }}
                        fullWidth
                    />
                    <TextField
                        type={this.state.showPassword ? "text" : "password"}
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                        margin="normal"
                        placeholder="I'll be our secret"
                        InputLabelProps={{
                            shrink: true
                        }}
                        endadornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    // onMouseDown={this.handleMouseDownPassword}
                                >
                                    {this.state.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        fullWidth
                    />
                    <FormControl margin="normal" fullWidth>
                        <Button
                            variant="raised"
                            type="Submit"
                            color="primary"
                        >
                            Create my account
                        </Button>
                    </FormControl>
                </form>
            </Fragment>
        );
    }
}

export default SignUp;
