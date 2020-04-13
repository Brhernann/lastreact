import { DEPARTMENT } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

export const department = (state = initialState, action) => {
    switch (action.type) {
        case DEPARTMENT.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DEPARTMENT.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DEPARTMENT.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DEPARTMENT.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const saveDepartment = (state = initialState, action) => {
    switch (action.type) {
        case DEPARTMENT.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DEPARTMENT.FETCH_SAVE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DEPARTMENT.FETCH_SAVE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DEPARTMENT.SAVE_RESET:
            return initialState
        default:
            return state
    }
}

export const UpdateDepartment = (state = initialState, action) => {
    switch (action.type) {
        case  DEPARTMENT.FETCH_UPDATE_PENDING:
            return {    
                ...state,
                pending: true,
            }
        case DEPARTMENT.FETCH_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DEPARTMENT.FETCH_UPDATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DEPARTMENT.UPDATE_RESET:
            return initialState
        default:
            return state
    }
}

export const departmentById = (state = initialState, action) => {
    switch (action.type) {
        case DEPARTMENT.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DEPARTMENT.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DEPARTMENT.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DEPARTMENT.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const deleteDepartment = (state = initialState, action) => {
    switch (action.type) {
        case  DEPARTMENT.FETCH_DELETE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case DEPARTMENT.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case DEPARTMENT.FETCH_DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case DEPARTMENT.DELETE_RESET:
            return initialState
        default:
            return state
    }
}
