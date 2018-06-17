import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Typography,
    Button,
    FormControl,
    CircularProgress
} from "@material-ui/core";

import { authLogout } from "../../Store/actions/index";
import RoomConnect from "../../components/Forms/RoomConnect/RoomConnect";
import FormLayout from "../../components/FormLayout/FormLayout";

class Connect extends Component {
    joinUser = ({ room, selectedRoom }) => {
        const {
            history: { replace }
        } = this.props;

        selectedRoom = selectedRoom === "---" ? null : selectedRoom;

        let R = "anonymous";
        if (room && selectedRoom) {
            R = room;
        } else if (room || selectedRoom) {
            R = room || selectedRoom;
        }

        replace({
            pathname: "/chat",
            search: `?room=${R}`
        });
    };

    render() {
        const { joinUser } = this;
        const { ioLoading } = this.props;

        return (
            <FormLayout>
                <RoomConnect loading={ioLoading} onSubmit={joinUser} />
                <FormControl margin="normal" fullWidth>
                    <Typography
                        variant="subheading"
                        color="textSecondary"
                        align="center"
                    >
                        or
                    </Typography>
                </FormControl>
                <Typography align="center" paragraph>
                    <Button
                        variant="raised"
                        color="primary"
                        fullWidth
                        onClick={joinUser}
                        disabled={ioLoading}
                    >
                        {ioLoading ? (
                            <CircularProgress
                                size={20}
                                thickness={4}
                                color="secondary"
                            />
                        ) : (
                            "Connect"
                        )}
                    </Button>
                </Typography>
                <Typography variant="caption" color="secondary" align="center">
                    --- You will be connected to default room ---
                </Typography>
            </FormLayout>
        );
    }
}

const mapStateToProps = state => {
    return {
        ioLoading: state.io.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authLogout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Connect);
