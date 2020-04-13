import { PDF } from '../../constans'

export const fetchPdfPending = () => {
    return {
        type: PDF.FETCH_GET_PENDING
    }
}

export const fetchPdfSuccess = data => {
    return {
        type: PDF.FETCH_GET_SUCCESS,
        data
    }
}

export const fetchPdfError = error => {
    return {
        type: PDF.FETCH_GET_ERROR,
        error: error
    }
}

export const PdfReset = reset => ({
    type: PDF.GET_RESET,
    reset
  });