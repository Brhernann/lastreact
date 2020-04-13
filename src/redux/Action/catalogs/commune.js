import { COMMUNE } from '../../../constans'

// GET

export const fetchGetCommuneSuccess = data => {
    return {
        type: COMMUNE.FETCH_GET_SUCCESS,
        data,
    }
}

export const fetchGetCommunePending = () => {
    return {
        type: COMMUNE.FETCH_GET_PENDING,
    }
}

export const fetchGetCommuneError = error => {
    return {
        type: COMMUNE.FETCH_GET_ERROR,
        error: error,
    }
}

export const getCommuneReset = reset => ({
    type: COMMUNE.GET_RESET,
    reset,
})

// SAVE

export const fetchSaveCommuneSuccess = data => {
    return {
        type: COMMUNE.FETCH_SAVE_SUCCESS,
        data,
    }
}

export const fetchSaveCommunePending = () => {
    return {
        type: COMMUNE.FETCH_SAVE_PENDING,
    }
}

export const fetchSaveCommuneError = error => {
    return {
        type: COMMUNE.FETCH_SAVE_ERROR,
        error: error,
    }
}

export const saveCommuneReset = reset => ({
    type: COMMUNE.SAVE_RESET,
    reset,
})

// UPDATE

export const fetchUpdateCommuneSuccess = data => {
    return {
        type: COMMUNE.FETCH_UPDATE_SUCCESS,
        data,
    }
}

export const fetchUpdateCommunePending = () => {
    return {
        type: COMMUNE.FETCH_UPDATE_PENDING,
    }
}

export const fetchUpdateCommuneError = error => {
    return {
        type: COMMUNE.FETCH_UPDATE_ERROR,
        error: error,
    }
}

export const updateCommuneReset = reset => ({
    type: COMMUNE.UPDATE_RESET,
    reset,
})

// GET BY ID

export const fetchGetByIdCommuneSuccess = data => {
    return {
        type: COMMUNE.FETCH_GETBYID_SUCCESS,
        data,
    }
}

export const fetchGetByIdCommunePending = () => {
    return {
        type: COMMUNE.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdCommuneError = error => {
    return {
        type: COMMUNE.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdCommuneReset = reset => ({
    type: COMMUNE.GETBYID_RESET,
    reset,
})

// GET BY PROVINCE ID

export const fetchGetByProvinceIdSuccess = data => {
    return {
        type: COMMUNE.FETCH_GET_BY_PROVINCE_ID_SUCCESS,
        data,
    }
}

export const fetchGetByProvinceIdPending = () => {
    return {
        type: COMMUNE.FETCH_GET_BY_PROVINCE_ID_PENDING,
    }
}

export const fetchGetByProvinceIdError = error => {
    return {
        type: COMMUNE.FETCH_GET_BY_PROVINCE_ID_ERROR,
        error: error,
    }
}

export const getByIdProvinceIdReset = reset => ({
    type: COMMUNE.GETBYREGIONID_RESET,
    reset,
})

//DELETE

export const fetchDeleteCommuneSuccess = data => {
    return {
        type: COMMUNE.FETCH_DELETE_SUCCESS,
        data,
    }
}

export const fetchDeleteCommunePending = () => {
    return {
        type: COMMUNE.FETCH_DELETE_PENDING,
    }
}

export const fetchDeleteCommuneError = error => {
    return {
        type: COMMUNE.FETCH_DELETE_ERROR,
        error: error,
    }
}

export const DeleteCommuneReset = reset => ({
    type: COMMUNE.DELETE_RESET,
    reset,
})
