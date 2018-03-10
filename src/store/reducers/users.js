import * as actionTypes from "../actions/actionTypes";

const initState = {
  currentUser: {
    name: null,
    room: null,
    id: null
  },
  users: []
};

const setUsers = (state, action) => {
  return {
    ...state,
    users: action.users
  };
};

const setCurrentUser = (state, action) => {
  return {
    ...state,
    currentUser: action.currentUser
  };
};

const setAllUsers = (state, action) => {
  return {
    ...state,
    users: action.data.users,
    currentUser: action.data.currentUser
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENTUSER:
      return setCurrentUser(state, action);
    case actionTypes.SET_USERS:
      return setUsers(state, action);
    case actionTypes.AUTH_SUCCESS:
      return setAllUsers(state, action);
    default:
      return state;
  }
};

export default reducer;
