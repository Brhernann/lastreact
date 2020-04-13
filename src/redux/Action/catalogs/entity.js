import { ENTITY } from '../../../constans'

export const fetchGetByIdGetEntitySuccess = data => ({
    type: ENTITY.FETCH_GETBYID_SUCCESS,
    data,
})

export const fetchGetByIdEntityPending = () => {
    return {
        type: ENTITY.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdGetEntityError = error => {
    return {
        type: ENTITY.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdEntityReset = reset => ({
    type: ENTITY.GETBYID_RESET,
    reset,
})

export const fetchSaveEntityPending = () => ({
    type: ENTITY.FETCH_SAVE_PENDING,
})

export const fetchSaveEntitySuccess = data => ({
    type: ENTITY.FETCH_SAVE_ENTITY_SUCCESS,
    payload: data,
})

export const fetchSaveEntityError = error => ({
    type: ENTITY.FETCH_SAVE_ENTITY_ERROR,
    payload: error,
})

export const fetchCleanError = () => ({
    type: ENTITY.FETCH_CLEAN_ERROR,
})

export const fetchCleanSuccessMessage = () => ({
    type: ENTITY.FETCH_CLEAN_SUCCESS_MESSAGE,
})

export const fetchCleanEntityData = () => ({
    type: ENTITY.FETCH_CLEAN_ENTITY_DATA,
})
