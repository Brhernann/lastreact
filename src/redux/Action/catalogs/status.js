import { STATUS } from '../../../constans'

// GET

export const fetchGetStatusSuccess = data => {
    return {
        type: STATUS.FETCH_GET_SUCCESS,
        data,
    }
}

export const fetchGetStatusPending = () => {
    return {
        type: STATUS.FETCH_GET_PENDING,
    }
}

export const fetchGetStatusError = error => {
    return {
        type: STATUS.FETCH_GET_ERROR,
        error: error,
    }
}

export const getStatusReset = reset => ({
    type: STATUS.GET_RESET,
    reset,
})

// SAVE

export const fetchSaveStatusSuccess = data => {
    return {
        type: STATUS.FETCH_SAVE_SUCCESS,
        data,
    }
}

export const fetchSaveStatusPending = () => {
    return {
        type: STATUS.FETCH_SAVE_PENDING,
    }
}

export const fetchSaveStatusError = error => {
    return {
        type: STATUS.FETCH_SAVE_ERROR,
        error: error,
    }
}

export const saveStatusReset = reset => ({
    type: STATUS.SAVE_RESET,
    reset,
})

// UPDATE

export const fetchUpdateStatusSuccess = data => {
    return {
        type: STATUS.FETCH_UPDATE_SUCCESS,
        data,
    }
}

export const fetchUpdateStatusPending = () => {
    return {
        type: STATUS.FETCH_UPDATE_PENDING,
    }
}

export const fetchUpdateStatusError = error => {
    return {
        type: STATUS.FETCH_UPDATE_ERROR,
        error: error,
    }
}

export const updateStatusReset = reset => ({
    type: STATUS.UPDATE_RESET,
    reset,
})

// GET BY ID

export const fetchGetByIdStatusSuccess = data => {
    return {
        type: STATUS.FETCH_GETBYID_SUCCESS,
        data,
    }
}

export const fetchGetByIdStatusPending = () => {
    return {
        type: STATUS.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdStatusError = error => {
    return {
        type: STATUS.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdStatusReset = reset => ({
    type: STATUS.GETBYID_RESET,
    reset,
})

//DELETE

export const fetchDeleteStatusSuccess = data => {
    return {
        type: STATUS.FETCH_DELETE_SUCCESS,
        data,
    }
}

export const fetchDeleteStatusPending = () => {
    return {
        type: STATUS.FETCH_DELETE_PENDING,
    }
}

export const fetchDeleteStatusError = error => {
    return {
        type: STATUS.FETCH_DELETE_ERROR,
        error: error,
    }
}

export const DeleteStatusReset = reset => ({
    type: STATUS.DELETE_RESET,
    reset,
})
