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

export const auth = (name, room, id) => {
  return dispatch => {
    dispatch(authStart());

    const currentUser = {
      name,
      room,
      id
    };

    if (!name) {
      const err = "User Name is required";
      return dispatch(authFail(err));
    }
    if (!room) {
      const err = "Room Name is required";
      return dispatch(authFail(err));
    }

    sessionStorage.setItem("name", currentUser.name);
    sessionStorage.setItem("room", currentUser.room);
    sessionStorage.setItem("id", currentUser.id);

    dispatch(authSuccess(currentUser));
  };
};

// export const auth = (name, room) => {
//   return dispatch => {
//     dispatch(authStart());

//     const currentUser = {
//       name,
//       room
//     };

//     io.emit("join", currentUser, (err, data) => {
//       if (err) {
//         dispatch(authFail(err));
//       } else {
//         dispatch(authSuccess(data));
//         sessionStorage.setItem("name", data.currentUser.name);
//         sessionStorage.setItem("room", data.currentUser.room);
//         sessionStorage.setItem("id", data.currentUser.id);
//         console.log("User Connected", data);
//       }
//     });
//   };
// };
