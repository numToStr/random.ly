import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS
  };
};

export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL
  };
};

export const auth = (name, room) => {
  return dispatch => {
    dispatch(authStart());
    fetch("/auth")
      .then(res => res.json())
      .then(data => console.log(data));
  };
};
