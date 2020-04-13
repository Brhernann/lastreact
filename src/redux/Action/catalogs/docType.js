import { DOCTYPE } from '../../../constans'

// GET

export const fetchGetDocTypeSuccess = data => {
    return {
        type: DOCTYPE.FETCH_GET_SUCCESS,
        data,
    }
}

export const fetchGetDocTypePending = () => {
    return {
        type: DOCTYPE.FETCH_GET_PENDING,
    }
}

export const fetchGetDocTypeError = error => {
    return {
        type: DOCTYPE.FETCH_GET_ERROR,
        error: error,
    }
}

export const getDocTypeReset = reset => ({
    type: DOCTYPE.GET_RESET,
    reset,
})

// SAVE

export const fetchSaveDocTypeSuccess = data => {
    return {
        type: DOCTYPE.FETCH_SAVE_SUCCESS,
        data,
    }
}

export const fetchSaveDocTypePending = () => {
    return {
        type: DOCTYPE.FETCH_SAVE_PENDING,
    }
}

export const fetchSaveDocTypeError = error => {
    return {
        type: DOCTYPE.FETCH_SAVE_ERROR,
        error: error,
    }
}

export const saveDocTypeReset = reset => ({
    type: DOCTYPE.SAVE_RESET,
    reset,
})

// UPDATE

export const fetchUpdateDocTypeSuccess = data => {
    return {
        type: DOCTYPE.FETCH_UPDATE_SUCCESS,
        data,
    }
}

export const fetchUpdateDoctTypePending = () => {
    return {
        type: DOCTYPE.FETCH_UPDATE_PENDING,
    }
}

export const fetchUpdateDocTypeError = error => {
    return {
        type: DOCTYPE.FETCH_UPDATE_ERROR,
        error: error,
    }
}

export const updateDocTypeReset = reset => ({
    type: DOCTYPE.UPDATE_RESET,
    reset,
})

// GET BY ID

export const fetchGetByIdDocTypeSuccess = data => {
    return {
        type: DOCTYPE.FETCH_GETBYID_SUCCESS,
        data,
    }
}

export const fetchGetByIdDocTypePending = () => {
    return {
        type: DOCTYPE.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdDocTypeError = error => {
    return {
        type: DOCTYPE.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdDocTypeReset = reset => ({
    type: DOCTYPE.GETBYID_RESET,
    reset,
})

//DELETE

export const fetchDeleteDocTypeSuccess = data => {
    return {
        type: DOCTYPE.FETCH_DELETE_SUCCESS,
        data,
    }
}

export const fetchDeleteDoctTypePending = () => {
    return {
        type: DOCTYPE.FETCH_DELETE_PENDING,
    }
}

export const fetchDeleteDocTypeError = error => {
    return {
        type: DOCTYPE.FETCH_DELETE_ERROR,
        error: error,
    }
}

export const DeleteDocTypeReset = reset => ({
    type: DOCTYPE.DELETE_RESET,
    reset,
})
