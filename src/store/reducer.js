const initState = {
  currentUser: {},
  users: [],
  messages: []
};

const setCurrentUser = (state, action) => {
  return {
    ...state,
    currentUser: {
      name: action.currentUser.name,
      room: action.currentUser.room
    }
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CURRENTUSER":
      return setCurrentUser(state, action);
    default:
      return state;
  }
};

export default reducer;
