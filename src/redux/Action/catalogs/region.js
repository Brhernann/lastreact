import { REGION } from '../../../constans'

// GET

export const fetchGetRegionSuccess = data => {
    return {
        type: REGION.FETCH_GET_SUCCESS,
        data,
    }
}

export const fetchGetRegionPending = () => {
    return {
        type: REGION.FETCH_GET_PENDING,
    }
}

export const fetchGetRegionError = error => {
    return {
        type: REGION.FETCH_GET_ERROR,
        error: error,
    }
}

export const getRegionReset = reset => ({
    type: REGION.GET_RESET,
    reset,
})

// SAVE

export const fetchSaveRegionSuccess = data => {
    return {
        type: REGION.FETCH_SAVE_SUCCESS,
        data,
    }
}

export const fetchSaveRegionPending = () => {
    return {
        type: REGION.FETCH_SAVE_PENDING,
    }
}

export const fetchSaveRegionError = error => {
    return {
        type: REGION.FETCH_SAVE_ERROR,
        error: error,
    }
}

export const saveRegionReset = reset => ({
    type: REGION.SAVE_RESET,
    reset,
})

// UPDATE

export const fetchUpdateRegionSuccess = data => {
    return {
        type: REGION.FETCH_UPDATE_SUCCESS,
        data,
    }
}

export const fetchUpdateRegionPending = () => {
    return {
        type: REGION.FETCH_UPDATE_PENDING,
    }
}

export const fetchUpdateRegionError = error => {
    return {
        type: REGION.FETCH_UPDATE_ERROR,
        error: error,
    }
}

export const updateRegionReset = reset => ({
    type: REGION.UPDATE_RESET,
    reset,
})

// GET BY ID

export const fetchGetByIdRegionSuccess = data => {
    return {
        type: REGION.FETCH_GETBYID_SUCCESS,
        data,
    }
}

export const fetchGetByIdRegionPending = () => {
    return {
        type: REGION.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdRegionError = error => {
    return {
        type: REGION.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdRegionReset = reset => ({
    type: REGION.GETBYID_RESET,
    reset,
})

//DELETE

export const fetchDeleteRegionSuccess = data => {
    return {
        type: REGION.FETCH_DELETE_SUCCESS,
        data,
    }
}

export const fetchDeleteRegionPending = () => {
    return {
        type: REGION.FETCH_DELETE_PENDING,
    }
}

export const fetchDeleteRegionError = error => {
    return {
        type: REGION.FETCH_DELETE_ERROR,
        error: error,
    }
}

export const DeleteRegionReset = reset => ({
    type: REGION.DELETE_RESET,
    reset,
})
