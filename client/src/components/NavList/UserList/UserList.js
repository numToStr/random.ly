import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import {
    ListItem,
    ListItemText,
    ListItemIcon,
    Menu,
    MenuItem,
    List,
    ListSubheader,
    ListItemSecondaryAction,
    IconButton,
    Typography
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarIcon from "@material-ui/icons/Star";

import Users from "./Users/Users";

class UserList extends Component {
    state = {
        menuAnchor: null,
        leave: false
    };
    openMenu = e => {
        this.setState({ menuAnchor: e.currentTarget });
    };

    closeMenu = () => {
        this.setState({ menuAnchor: null });
    };

    leaveRoom = () => {
        this.setState({ leave: true });
    };

    render() {
        const { user, ioUsers } = this.props;
        const { openMenu, closeMenu, leaveRoom } = this;
        const { menuAnchor, leave } = this.state;

        if (leave) {
            return <Redirect to="/connect" />;
        }

        return (
            <Fragment>
                <List component="nav">
                    <ListItem>
                        <ListItemIcon>
                            <StarIcon style={{ fontSize: 30 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography variant="title" color="secondary">
                                    You
                                </Typography>
                            }
                            disableTypography
                            secondary={
                                <Typography variant="caption">
                                    {user.name}
                                </Typography>
                            }
                        />
                        <ListItemSecondaryAction>
                            <IconButton onClick={openMenu}>
                                <MoreVertIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                <List
                    component="nav"
                    subheader={
                        <ListSubheader>
                            Connected Users ({ioUsers.length})
                        </ListSubheader>
                    }
                >
                    <Users users={ioUsers} />
                </List>

                <Menu
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor)}
                    onClose={closeMenu}
                >
                    <MenuItem component={NavLink} to="/user/profile">
                        <ListItemIcon>
                            <AccountCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </MenuItem>
                    <MenuItem onClick={leaveRoom}>
                        <ListItemIcon>
                            <Lock color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Exit" />
                    </MenuItem>
                </Menu>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        ioUsers: state.io.users
    };
};

export default connect(mapStateToProps)(UserList);
