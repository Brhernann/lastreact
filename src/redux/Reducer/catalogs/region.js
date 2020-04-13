import { REGION } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

export const region = (state = initialState, action) => {
    switch (action.type) {
        case REGION.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case REGION.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case REGION.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case REGION.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const saveRegion = (state = initialState, action) => {
    switch (action.type) {
        case REGION.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case REGION.FETCH_SAVE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case REGION.FETCH_SAVE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case REGION.SAVE_RESET:
            return initialState
        default:
            return state
    }
}

export const UpdateRegion = (state = initialState, action) => {
    switch (action.type) {
        case  REGION.FETCH_UPDATE_PENDING:
            return {    
                ...state,
                pending: true,
            }
        case REGION.FETCH_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case REGION.FETCH_UPDATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case REGION.UPDATE_RESET:
            return initialState
        default:
            return state
    }
}

export const regionById = (state = initialState, action) => {
    switch (action.type) {
        case REGION.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case REGION.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case REGION.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case REGION.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const deleteRegion = (state = initialState, action) => {
    switch (action.type) {
        case  REGION.FETCH_DELETE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case REGION.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case REGION.FETCH_DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case REGION.DELETE_RESET:
            return initialState
        default:
            return state
    }
}
