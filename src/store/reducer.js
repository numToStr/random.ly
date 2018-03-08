const initState = {
  currentUser: {},
  users: [],
  messages: []
};

const setCurrentUser = (state, action) => {
  return {
    ...state,
    currentUser: {
      name: "Vikas",
      room: "test101"
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
