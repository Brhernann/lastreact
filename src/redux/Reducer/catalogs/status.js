import { STATUS } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

export const status = (state = initialState, action) => {
    switch (action.type) {
        case STATUS.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STATUS.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STATUS.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STATUS.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const saveStatus = (state = initialState, action) => {
    switch (action.type) {
        case STATUS.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STATUS.FETCH_SAVE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STATUS.FETCH_SAVE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STATUS.SAVE_RESET:
            return initialState
        default:
            return state
    }
}

export const UpdateStatus = (state = initialState, action) => {
    switch (action.type) {
        case  STATUS.FETCH_UPDATE_PENDING:
            return {    
                ...state,
                pending: true,
            }
        case STATUS.FETCH_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STATUS.FETCH_UPDATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STATUS.UPDATE_RESET:
            return initialState
        default:
            return state
    }
}

export const statusById = (state = initialState, action) => {
    switch (action.type) {
        case STATUS.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STATUS.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STATUS.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STATUS.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const deleteStatus = (state = initialState, action) => {
    switch (action.type) {
        case  STATUS.FETCH_DELETE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STATUS.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STATUS.FETCH_DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STATUS.DELETE_RESET:
            return initialState
        default:
            return state
    }
}
