import * as actionTypes from "./actionTypes";

export const setUsers = users => {
  return {
    type: actionTypes.SET_USERS,
    users
  };
};

export const setCurrentUser = currentUser => {
  return {
    type: actionTypes.SET_CURRENTUSER,
    currentUser
  };
};
