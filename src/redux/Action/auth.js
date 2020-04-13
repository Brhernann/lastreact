import {
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_PENDING,
    FETCH_AUTH_ERROR
} from '../../constans'

export const fetchAuthPending = () => {
    return {
        type: FETCH_AUTH_PENDING,
    }
}

export const fetchAuthSuccess = data => {
    return {
        type: FETCH_AUTH_SUCCESS,
        data,
    }
}

export const fetchAuthError = error => {
    return {
        type: FETCH_AUTH_ERROR,
        error: error,
    }
}
