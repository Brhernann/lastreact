import { DOCTYPE } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

export const documentType = (state = initialState, action) => {
    switch (action.type) {
        case DOCTYPE.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCTYPE.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCTYPE.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCTYPE.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const saveDocumentType = (state = initialState, action) => {
    switch (action.type) {
        case DOCTYPE.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCTYPE.FETCH_SAVE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCTYPE.FETCH_SAVE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCTYPE.SAVE_RESET:
            return initialState
        default:
            return state
    }
}

export const UpdatedocumentType = (state = initialState, action) => {
    switch (action.type) {
        case  DOCTYPE.FETCH_UPDATE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCTYPE.FETCH_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCTYPE.FETCH_UPDATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCTYPE.UPDATE_RESET:
            return initialState
        default:
            return state
    }
}

export const documentTypeById = (state = initialState, action) => {
    switch (action.type) {
        case DOCTYPE.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCTYPE.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCTYPE.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCTYPE.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const deletedocumentType = (state = initialState, action) => {
    switch (action.type) {
        case  DOCTYPE.FETCH_DELETE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCTYPE.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCTYPE.FETCH_DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCTYPE.DELETE_RESET:
            return initialState
        default:
            return state
    }
}
