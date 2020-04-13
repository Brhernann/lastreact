import { STORE } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

const myStoreState = {
    pending: false,
    data: {
        store:null, 
        emittersAddressesIds:{}
    },
    error: null,
}

export const store = (state = initialState, action) => {
    switch (action.type) {
        case STORE.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STORE.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STORE.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STORE.GET_RESET:
            return initialState
        default:
            return state
    }
}

export const myStore = (state = myStoreState, action) => {
    switch (action.type) {
        case STORE.FETCH_MYSTORE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STORE.FETCH_MYSTORE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STORE.FETCH_MYSTORE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STORE.MYSTORE_RESET:
            return initialState
        default:
            return state
    }
}
export const saveStore = (state = initialState, action) => {
    switch (action.type) {
        case STORE.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STORE.FETCH_SAVE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STORE.FETCH_SAVE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STORE.SAVE_RESET:
            return initialState
        default:
            return state
    }
}

export const UpdateStore = (state = initialState, action) => {
    switch (action.type) {
        case  STORE.FETCH_UPDATE_PENDING:
            return {    
                ...state,
                pending: true,
            }
        case STORE.FETCH_UPDATE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STORE.FETCH_UPDATE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STORE.UPDATE_RESET:
            return initialState
        default:
            return state
    }
}

export const storeById = (state = initialState, action) => {
    switch (action.type) {
        case STORE.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STORE.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STORE.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STORE.GETBYID_RESET:
            return initialState
        default:
            return state
    }
}

export const deleteStore = (state = initialState, action) => {
    switch (action.type) {
        case  STORE.FETCH_DELETE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case STORE.FETCH_DELETE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case STORE.FETCH_DELETE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case STORE.DELETE_RESET:
            return initialState
        default:
            return state
    }
}
