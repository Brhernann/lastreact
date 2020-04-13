
import { PROVINCE } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

export const province = (state = initialState, action) => {
    switch (action.type) {
        case PROVINCE.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PROVINCE.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PROVINCE.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PROVINCE.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const saveProvince = (state = initialState, action) => {
    switch (action.type) {
        case PROVINCE.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PROVINCE.FETCH_SAVE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PROVINCE.FETCH_SAVE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PROVINCE.SAVE_RESET:
            return initialState
        default:
            return state
    }
}

export const UpdateProvince = (state = initialState, action) => {
    switch (action.type) {
        case  PROVINCE.FETCH_UPDATE_PENDING:
            return {    
                ...state,
                pending: true,
            }
        case PROVINCE.FETCH_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PROVINCE.FETCH_UPDATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PROVINCE.UPDATE_RESET:
            return initialState
        default:
            return state
    }
}

export const provinceById = (state = initialState, action) => {
    switch (action.type) {
        case PROVINCE.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PROVINCE.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PROVINCE.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PROVINCE.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const provinceByRegionId = (state = initialState, action) => {
    switch (action.type) {
        case PROVINCE.FETCH_GETBYREGIONID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PROVINCE.FETCH_GETBYREGIONID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PROVINCE.FETCH_GETBYREGIONID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PROVINCE.GETBYREGIONID_RESET:
            return initialState
        default:
            return state
    }
}

export const deleteProvince = (state = initialState, action) => {
    switch (action.type) {
        case  PROVINCE.FETCH_DELETE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PROVINCE.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PROVINCE.FETCH_DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PROVINCE.DELETE_RESET:
            return initialState
        default:
            return state
    }
}
