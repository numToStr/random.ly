import io from "../socket";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = data => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    data
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (name, room) => {
  return dispatch => {
    dispatch(authStart());

    const currentUser = {
      name,
      room
    };

    io.emit("join", currentUser, err => {
      if (err) {
        dispatch(authFail(err));
        alert(err);
      } else {
        dispatch(authSuccess(currentUser));
        console.log("User Connected", currentUser);
      }
    });
  };
};
