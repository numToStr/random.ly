import * as actionTypes from "../actions/actionTypes";

const initState = {
  token: null,
  loading: false,
  error: null
};

const authStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: true
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.data.token,
    loading: false,
    error: null
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    token: null,
    loading: false,
    error: action.error
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
