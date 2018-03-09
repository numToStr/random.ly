import * as actionTypes from "./actionTypes";

export const messageRecieved = messages => {
  return {
    type: actionTypes.SET_MESSAGES,
    messages
  };
};
