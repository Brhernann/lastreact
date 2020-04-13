import { PRODUCT } from '../../../constans'

// GET

export const fetchGetProductSuccess = data => {
    return {
        type: PRODUCT.FETCH_GET_SUCCESS,
        data,
    }
}

export const fetchGetProductPending = () => {
    return {
        type: PRODUCT.FETCH_GET_PENDING,
    }
}

export const fetchGetProductError = error => {
    return {
        type: PRODUCT.FETCH_GET_ERROR,
        error: error,
    }
}

export const getProductReset = reset => ({
    type: PRODUCT.GET_RESET,
    reset,
})

// SAVE

export const fetchSaveProductSuccess = data => {
    return {
        type: PRODUCT.FETCH_SAVE_SUCCESS,
        data,
    }
}

export const fetchSaveProductPending = () => {
    return {
        type: PRODUCT.FETCH_SAVE_PENDING,
    }
}

export const fetchSaveProductError = error => {
    return {
        type: PRODUCT.FETCH_SAVE_ERROR,
        error: error,
    }
}

export const saveProductReset = reset => ({
    type: PRODUCT.SAVE_RESET,
    reset,
})

// UPDATE

export const fetchUpdateProductSuccess = data => {
    return {
        type: PRODUCT.FETCH_UPDATE_SUCCESS,
        data,
    }
}

export const fetchUpdateProductPending = () => {
    return {
        type: PRODUCT.FETCH_UPDATE_PENDING,
    }
}

export const fetchUpdateProductError = error => {
    return {
        type: PRODUCT.FETCH_UPDATE_ERROR,
        error: error,
    }
}

export const updateProductReset = reset => ({
    type: PRODUCT.UPDATE_RESET,
    reset,
})

// GET BY ID

export const fetchGetByIdProductSuccess = data => {
    return {
        type: PRODUCT.FETCH_GETBYID_SUCCESS,
        data,
    }
}

export const fetchGetByIdProductPending = () => {
    return {
        type: PRODUCT.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdProductError = error => {
    return {
        type: PRODUCT.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdProductReset = reset => ({
    type: PRODUCT.GETBYID_RESET,
    reset,
})

//DELETE

export const fetchDeleteProductSuccess = data => {
    return {
        type: PRODUCT.FETCH_DELETE_SUCCESS,
        data,
    }
}

export const fetchDeleteProductPending = () => {
    return {
        type: PRODUCT.FETCH_DELETE_PENDING,
    }
}

export const fetchDeleteProductError = error => {
    return {
        type: PRODUCT.FETCH_DELETE_ERROR,
        error: error,
    }
}

export const DeleteProductReset = reset => ({
    type: PRODUCT.DELETE_RESET,
    reset,
})
