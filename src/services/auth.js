import API from '../utils/api'
import jwtDecode from 'jwt-decode'
import {
    SET_LOADING,
    LOGIN_USER,
    LOGOUT,
    AUTH_ERROR,
    LOAD_USER,
    CLEAN_ERROR,
} from '../constans'

let api = new API()

export const loadUser = () => async dispatch => {
    const session = localStorage.getItem('TOKEN')

    try {
        if (session) {
            const user = jwtDecode(session)
            const expirationTime = new Date(user.exp * 1000)
            const now = Date.now()

            if (now > expirationTime.getTime()) {
                dispatch({ type: LOGOUT })
            } else {
                dispatch({ type: LOAD_USER, payload: user })
            }
        }
        dispatch({ type: SET_LOADING, payload: false })
    } catch (error) {
        const cause = error.response.data.casuse
        const reason = error.response.data.reason
        const msg = cause ? cause : reason
        dispatch({ type: AUTH_ERROR, payload: msg })
    }
}

export const login = data => async dispatch => {
    try {
        dispatch({ type: SET_LOADING, payload: true })
        const res = await api.post('auth/v1/authentication/credentials', data)
        dispatch({ type: LOGIN_USER, payload: res.data })
    } catch (error) {
        const message = error.response.data.message
        const cause = error.response.data.casuse
        const reason = error.response.data.reason
        const msg = cause ? cause : reason

        dispatch({ type: AUTH_ERROR, payload: msg || message })
    }
}

export const cleanError = () => dispatch => dispatch({ type: CLEAN_ERROR })
export const logout = () => dispatch => dispatch({ type: LOGOUT })
