
import { PRODUCT } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

export const product = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PRODUCT.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PRODUCT.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PRODUCT.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const saveProduct = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PRODUCT.FETCH_SAVE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PRODUCT.FETCH_SAVE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PRODUCT.SAVE_RESET:
            return initialState
        default:
            return state
    }
}

export const UpdateProduct = (state = initialState, action) => {
    switch (action.type) {
        case  PRODUCT.FETCH_UPDATE_PENDING:
            return {    
                ...state,
                pending: true,
            }
        case PRODUCT.FETCH_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PRODUCT.FETCH_UPDATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PRODUCT.UPDATE_RESET:
            return initialState
        default:
            return state
    }
}

export const productById = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PRODUCT.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PRODUCT.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PRODUCT.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const deleteProduct = (state = initialState, action) => {
    switch (action.type) {
        case  PRODUCT.FETCH_DELETE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PRODUCT.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PRODUCT.FETCH_DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PRODUCT.DELETE_RESET:
            return initialState
        default:
            return state
    }
}
