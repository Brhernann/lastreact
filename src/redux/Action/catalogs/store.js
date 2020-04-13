import { STORE } from '../../../constans'

// GET

export const fetchGetStoreSuccess = data => {
    return {
        type: STORE.FETCH_GET_SUCCESS,
        data,
    }
}

export const fetchGetStorePending = () => {
    return {
        type: STORE.FETCH_GET_PENDING,
    }
}

export const fetchGetStoreError = error => {
    return {
        type: STORE.FETCH_GET_ERROR,
        error: error,
    }
}

export const getStoreReset = reset => ({
    type: STORE.GET_RESET,
    reset,
})

// SAVE

export const fetchSaveStoreSuccess = data => {
    return {
        type: STORE.FETCH_SAVE_SUCCESS,
        data,
    }
}

export const fetchSaveStorePending = () => {
    return {
        type: STORE.FETCH_SAVE_PENDING,
    }
}

export const fetchSaveStoreError = error => {
    return {
        type: STORE.FETCH_SAVE_ERROR,
        error: error,
    }
}

export const saveStoreReset = reset => ({
    type: STORE.SAVE_RESET,
    reset,
})

// UPDATE

export const fetchUpdateStoreSuccess = data => {
    return {
        type: STORE.FETCH_UPDATE_SUCCESS,
        data,
    }
}

export const fetchUpdateStorePending = () => {
    return {
        type: STORE.FETCH_UPDATE_PENDING,
    }
}

export const fetchUpdateStoreError = error => {
    return {
        type: STORE.FETCH_UPDATE_ERROR,
        error: error,
    }
}

export const updateStoreReset = reset => ({
    type: STORE.UPDATE_RESET,
    reset,
})

// GET BY ID

export const fetchGetByIdStoreSuccess = data => {
    return {
        type: STORE.FETCH_GETBYID_SUCCESS,
        data,
    }
}

export const fetchGetByIdStorePending = () => {
    return {
        type: STORE.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdStoreError = error => {
    return {
        type: STORE.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdStoreReset = reset => ({
    type: STORE.GETBYID_RESET,
    reset,
})

//DELETE

export const fetchDeleteStoreSuccess = data => {
    return {
        type: STORE.FETCH_DELETE_SUCCESS,
        data,
    }
}

export const fetchDeleteStorePending = () => {
    return {
        type: STORE.FETCH_DELETE_PENDING,
    }
}

export const fetchDeleteStoreError = error => {
    return {
        type: STORE.FETCH_DELETE_ERROR,
        error: error,
    }
}

export const DeleteStoreReset = reset => ({
    type: STORE.DELETE_RESET,
    reset,
})

//GET MY DOCUMENTS

export const fetchMyStoreSuccess = data => { 
    return {
        type: STORE.FETCH_MYSTORE_SUCCESS,
        data
    }
}
export const myStoreReset = reset => ({
    type: STORE.MYSTORE_RESET,
    reset,
})
