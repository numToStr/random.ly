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

    io.emit("join", currentUser, (err, data) => {
      if (err) {
        dispatch(authFail(err));
      } else {
        dispatch(authSuccess(data));
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("room", data.room);
        sessionStorage.setItem("id", data.id);
        console.log("User Connected", data);
      }
    });
  };
};
