import {DOCUMENTS } from '../../constans'

//GET

export const fetchGetDocSuccess = data => {  
    return {
        type: DOCUMENTS.FETCH_GET_SUCCESS,
        data
    }
}

export const fetchGetDocPending = () => {
    return {
        type: DOCUMENTS.FETCH_GET_PENDING
    }
}

export const fetchGetDocError = error => {
    return {
        type: DOCUMENTS.FETCH_GET_ERROR,
        error: error,
    }
}

export const getDocReset = reset => ({
    type: DOCUMENTS.GET_RESET,
    reset,
})

//CREATE

export const fetchCreateDocSuccess = data => {
    return {
        type: DOCUMENTS.FETCH_CREATE_SUCCESS,
        data
    }
}

export const fetchCreateDocPending = () => {
    return {
        type: DOCUMENTS.FETCH_CREATE_PENDING
    }
}

export const fetchCreateDocError = error => {
    return {
        type: DOCUMENTS.FETCH_CREATE_ERROR,
        error: error,
    }
}

export const createDocReset = reset => ({
    type: DOCUMENTS.CREATE_RESET,
    reset,
})

//GET BY ID

export const fetchGetByIdDocSuccess = data => {
    return {
        type: DOCUMENTS.FETCH_GETBYID_SUCCESS,
        data
    }
}

export const fetchGetByIdDocPending = () => {
    return {
        type: DOCUMENTS.FETCH_GETBYID_PENDING,
    }
}

export const fetchGetByIdDocError = error => {
    return {
        type: DOCUMENTS.FETCH_GETBYID_ERROR,
        error: error,
    }
}

export const getByIdDocReset = reset => ({
    type: DOCUMENTS.GETBYID_RESET,
    reset,
})

//ANNULAR 

export const fetchAnnularDocSuccess = data => {
    return {
        type: DOCUMENTS.FETCH_ANNULAR_SUCCESS,
        data
    }
}

export const fetchAnnularDocPending = () => {
    return {
        type: DOCUMENTS.FETCH_ANNULAR_PENDING
    }
}

export const fetchAnnularDocError = error => {
    return {
        type: DOCUMENTS.FETCH_ANNULAR_ERROR,
        error: error,
    }
}

export const AnnularDocReset = reset => ({
    type: DOCUMENTS.ANNULAR_RESET,
    reset,
})

//STATUS PRINTED

export const fetchStatusPrinterSuccess = data => { 
    return {
        type: DOCUMENTS.FETCH_ANNULAR_SUCCESS,
        data
    }
}

export const fetchStatusPrinterPending = () => {
    return {
        type: DOCUMENTS.FETCH_ANNULAR_PENDING
    }
}

export const fetchStatusPrinterError = error => {
    return {
        type: DOCUMENTS.FETCH_ANNULAR_ERROR,
        error: error,
    }
}

export const StatusPrinterReset = reset => ({
    type: DOCUMENTS.ANNULAR_RESET,
    reset,
})
