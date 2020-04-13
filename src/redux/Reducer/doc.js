import { DOCUMENTS } from '../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

export const documents = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENTS.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCUMENTS.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCUMENTS.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCUMENTS.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const createDocuments = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENTS.FETCH_CREATE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCUMENTS.FETCH_CREATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCUMENTS.FETCH_CREATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCUMENTS.CREATE_RESET:
            return initialState
        default:
            return state
    }
}

export const documentsById = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENTS.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCUMENTS.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCUMENTS.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCUMENTS.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const annularDocumment = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENTS.FETCH_ANNULAR_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCUMENTS.FETCH_ANNULAR_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCUMENTS.FETCH_ANNULAR_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCUMENTS.ANNULAR_RESET:
            return initialState
        default:
            return state
    }
}

export const statusPrinterDocumment = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENTS.STATUSPRINTER_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DOCUMENTS.STATUSPRINTER_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DOCUMENTS.STATUSPRINTER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DOCUMENTS.STATUSPRINTER_RESET:
            return initialState
        default:
            return state
    }
}
