import * as actionTypes from "../actions/actionTypes";

const initState = {
  messages: []
};

const setMessages = (state, action) => {
  return {
    ...state,
    messages: action.messages
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_MESSAGES:
      return setMessages(state, action);

    default:
      return state;
  }
};

export default reducer;
