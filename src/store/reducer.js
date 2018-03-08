import * as actionTypes from "./actionTypes";

const initState = {
  currentUser: {
    name: "",
    room: ""
  },
  messages: [],
  users: []
};

const setCurrentUser = (state, action) => {
  return {
    ...state,
    currentUser: action.currentUser
  };
};

const setMessages = (state, action) => {
  return {
    ...state,
    messages: action.messages
  };
};

const setUsers = (state, action) => {
  return {
    ...state,
    users: action.users
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENTUSER:
      return setCurrentUser(state, action);
    case actionTypes.SET_MESSAGES:
      return setMessages(state, action);
    case actionTypes.SET_USERS:
      return setUsers(state, action);
    default:
      return state;
  }
};

export default reducer;
