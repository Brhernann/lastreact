import { DEPARTMENT } from '../../../constans'

// GET

export const fetchGetDepartmentSuccess = data => {
    return {
        type: DEPARTMENT.FETCH_GET_SUCCESS,
        data,
    }
}

export const fetchGetDepartmentPending = () => {
    return {
        type: DEPARTMENT.FETCH_GET_PENDING,
    }
}

export const fetchGetDepartmentError = error => {
    return {
        type: DEPARTMENT.FETCH_GET_ERROR,
        error: error,
    }
}

export const getDepartmentReset = reset => ({
    type: DEPARTMENT.GET_RESET,
    reset,
})

// SAVE

export const fetchSaveDepartmentSuccess = data => {
    return {
        type: DEPARTMENT.FETCH_SAVE_SUCCESS,
        data,
    }
}

export const fetchSaveDepartmentPending = () => {
    return {
        type: DEPARTMENT.FETCH_SAVE_PENDING,
    }
}

export const fetchSaveDepartmentError = error => {
    return {
        type: DEPARTMENT.FETCH_SAVE_ERROR,
        error: error,
    }
}

export const saveDepartmentReset = reset => ({
    type: DEPARTMENT.SAVE_RESET,
    reset,
})

// UPDATE

export const fetchUpdateDepartmentSuccess = data => {
    return {
        type: DEPARTMENT.FETCH_UPDATE_SUCCESS,
        data,
    }
}

export const fetchUpdateDepartmentPending = () => {
    return {
        type: DEPARTMENT.FETCH_UPDATE_PENDING,
    }
}

export const fetchUpdateDepartmentError = error => {
    return {
        type: DEPARTMENT.FETCH_UPDATE_ERROR,
        error: error,
    }
}

export const updateDepartmentReset = reset => ({
    type: DEPARTMENT.UPDATE_RESET,
    reset,
})

// GET BY ID

export const fetchGetByIdDepartmentSuccess = data => {
    return {
        type: DEPARTMENT.FETCH_GETBYID_SUCCESS,
        data,
    }
}

export const fetchGetByIdDepartmentPending = () => {
    return {
        type: DEPARTMENT.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdDepartmentError = error => {
    return {
        type: DEPARTMENT.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdDepartmentReset = reset => ({
    type: DEPARTMENT.GETBYID_RESET,
    reset,
})

//DELETE

export const fetchDeleteDepartmentSuccess = data => {
    return {
        type: DEPARTMENT.FETCH_DELETE_SUCCESS,
        data,
    }
}

export const fetchDeleteDepartmentPending = () => {
    return {
        type: DEPARTMENT.FETCH_DELETE_PENDING,
    }
}

export const fetchDeleteDepartmentError = error => {
    return {
        type: DEPARTMENT.FETCH_DELETE_ERROR,
        error: error,
    }
}

export const DeleteDepartmentReset = reset => ({
    type: DEPARTMENT.DELETE_RESET,
    reset,
})
