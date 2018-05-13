import axios from "axios";

import * as actionTypes from './actionTypes';

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

export const auth = (data) => {
    return dispatch => {
        dispatch(authStart());
        axios
            .post("/auth/signup", data)
            .then(d => {
                const D = d.data;
                if (D.status) {
                    dispatch(authSuccess(d.data.user))
                } else {
                    dispatch(authFail(D.err));
                }
            })
            .catch(e => {
                dispatch(authFail(e));
                throw e;
            });
    };
};