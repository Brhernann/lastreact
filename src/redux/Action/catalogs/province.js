import { PROVINCE } from '../../../constans'

// GET

export const fetchGetProvinceSuccess = data => {
    return {
        type: PROVINCE.FETCH_GET_SUCCESS,
        data,
    }
}

export const fetchGetProvincePending = () => {
    return {
        type: PROVINCE.FETCH_GET_PENDING,
    }
}

export const fetchGetProvinceError = error => {
    return {
        type: PROVINCE.FETCH_GET_ERROR,
        error: error,
    }
}

export const getProvinceReset = reset => ({
    type: PROVINCE.GET_RESET,
    reset,
})

// SAVE

export const fetchSaveProvinceSuccess = data => {
    return {
        type: PROVINCE.FETCH_SAVE_SUCCESS,
        data,
    }
}

export const fetchSaveProvincePending = () => {
    return {
        type: PROVINCE.FETCH_SAVE_PENDING,
    }
}

export const fetchSaveProvinceError = error => {
    return {
        type: PROVINCE.FETCH_SAVE_ERROR,
        error: error,
    }
}

export const saveProvinceReset = reset => ({
    type: PROVINCE.SAVE_RESET,
    reset,
})

// UPDATE

export const fetchUpdateProvinceSuccess = data => {
    return {
        type: PROVINCE.FETCH_UPDATE_SUCCESS,
        data,
    }
}

export const fetchUpdateProvincePending = () => {
    return {
        type: PROVINCE.FETCH_UPDATE_PENDING,
    }
}

export const fetchUpdateProvinceError = error => {
    return {
        type: PROVINCE.FETCH_UPDATE_ERROR,
        error: error,
    }
}

export const updateProvinceReset = reset => ({
    type: PROVINCE.UPDATE_RESET,
    reset,
})

// GET BY ID

export const fetchGetByIdProvinceSuccess = data => {
    return {
        type: PROVINCE.FETCH_GETBYID_SUCCESS,
        data,
    }
}

export const fetchGetByIdProvincePending = () => {
    return {
        type: PROVINCE.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdProvinceError = error => {
    return {
        type: PROVINCE.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdProvinceReset = reset => ({
    type: PROVINCE.GETBYID_RESET,
    reset,
})


// GET BY REGION ID

export const fetchGetByRegionIdSuccess = data => {
    return {
        type: PROVINCE.FETCH_GETBYREGIONID_SUCCESS,
        data,
    }
}

export const fetchGetByRegionIdPending = () => {
    return {
        type: PROVINCE.FETCH_GETBYREGIONID_PENDING,
    }
}

export const fetchGetByRegionIdError = error => {
    return {
        type: PROVINCE.FETCH_GETBYREGIONID_ERROR,
        error: error,
    }
}

export const getByIdRegionReset = reset => ({
    type: PROVINCE.GETBYREGIONID_RESET,
    reset,
})


//DELETE

export const fetchDeleteProvinceSuccess = data => {
    return {
        type: PROVINCE.FETCH_DELETE_SUCCESS,
        data,
    }
}

export const fetchDeleteProvincePending = () => {
    return {
        type: PROVINCE.FETCH_DELETE_PENDING,
    }
}

export const fetchDeleteProvinceError = error => {
    return {
        type: PROVINCE.FETCH_DELETE_ERROR,
        error: error,
    }
}

export const DeleteProvinceReset = reset => ({
    type: PROVINCE.DELETE_RESET,
    reset,
})
