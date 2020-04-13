import {
    SET_LOADING,
    LOGIN_USER,
    LOAD_USER,
    AUTH_ERROR,
    LOGOUT,
    CLEAN_ERROR,
} from '../../constans'

const initialState = {
    token: localStorage.getItem('TOKEN'),
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            localStorage.setItem('TOKEN', action.payload.accessToken)
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
            }
        case LOAD_USER:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        case AUTH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
            }
        case LOGOUT:
            localStorage.removeItem('TOKEN')
            return initialState
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case CLEAN_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}

export default AuthReducer
