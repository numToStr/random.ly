import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "../actions/actionTypes";

const initState = {
    user: {
        id: null,
        name: null,
        email: null,
    },
    token: null,
    loading: false,
    error: null
};

const authStart = (state, action) => {
    return {
        ...state,
        token: null,
        error: null,
        loading: true
    };
};

const authSuccess = (state, { data }) => {
    return {
        ...state,
        user: {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
        },
        token: data.token,
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
