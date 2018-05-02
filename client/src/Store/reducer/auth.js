import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "../actions/actionTypes";

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
        case AUTH_START:
            return authStart(state, action);
        case AUTH_SUCCESS:
            return authSuccess(state, action);
        case AUTH_FAIL:
            return authFail(state, action);
        default:
            return state;
    }
};

export default reducer;
