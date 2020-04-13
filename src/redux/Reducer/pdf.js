import { PDF } from '../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
}

const pdf = (state = initialState, action) => {
    switch (action.type) {
        case PDF.FETCH_GET_PENDING:
            return {
                ...state,
                pending: true,
            }
        case PDF.FETCH_GET_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case PDF.FETCH_GET_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case PDF.GET_RESET:
            return initialState
        default:
            return state
    }
}

export default pdf
