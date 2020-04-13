
import { COMMUNE } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

export const commune = (state = initialState, action) => {
    switch (action.type) {
        case COMMUNE.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case COMMUNE.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case COMMUNE.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case COMMUNE.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const saveCommune = (state = initialState, action) => {
    switch (action.type) {
        case COMMUNE.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case COMMUNE.FETCH_SAVE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case COMMUNE.FETCH_SAVE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case COMMUNE.SAVE_RESET:
            return initialState
        default:
            return state
    }
}

export const UpdateCommune = (state = initialState, action) => {
    switch (action.type) {
        case  COMMUNE.FETCH_UPDATE_PENDING:
            return {    
                ...state,
                pending: true,
            }
        case COMMUNE.FETCH_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case COMMUNE.FETCH_UPDATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case COMMUNE.UPDATE_RESET:
            return initialState
        default:
            return state
    }
}

export const communeById = (state = initialState, action) => {
    switch (action.type) {
        case COMMUNE.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case COMMUNE.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case COMMUNE.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case COMMUNE.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const communeByProvinceId = (state = initialState, action) => {
    switch (action.type) {
        case COMMUNE.FETCH_GET_BY_PROVINCE_ID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case COMMUNE.FETCH_GET_BY_PROVINCE_ID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case COMMUNE.FETCH_GET_BY_PROVINCE_ID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
                data: [],
            }
        case COMMUNE.GET_BY_PROVINCE_ID_RESET:
            return initialState
        default:
            return state
    }
}

export const deleteCommune = (state = initialState, action) => {
    switch (action.type) {
        case  COMMUNE.FETCH_DELETE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case COMMUNE.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case COMMUNE.FETCH_DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case COMMUNE.DELETE_RESET:
            return initialState
        default:
            return state
    }
}
