import { ENTITY } from '../../../constans'

const initialState = {
    pending: false,
    data: null,
    error: null,
    entities: [],
    successMessage: null,
}

export const entity = (state = initialState, action) => {
    switch (action.type) {
        case ENTITY.FETCH_GETBYID_PENDING:
            return {
                ...state,
                pending: true,
            }
        case ENTITY.FETCH_GETBYID_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            }
        case ENTITY.FETCH_GETBYID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            }
        case ENTITY.GETBYID_RESET:
            return initialState
        case ENTITY.FETCH_SAVE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case ENTITY.FETCH_SAVE_ENTITY_SUCCESS:
            return {
                ...state,
                entities: [...state.entities, action.payload],
                pending: false,
                error: null,
                successMessage: '¡Entidad creada con éxito!',
            }
        case ENTITY.FETCH_SAVE_ENTITY_ERROR:
            return {
                ...state,
                error: action.payload,
                pending: false,
                successMessage: null,
            }
        case ENTITY.FETCH_CLEAN_ERROR:
            return {
                ...state,
                error: null,
            }
        case ENTITY.FETCH_CLEAN_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: null,
            }
        case ENTITY.FETCH_CLEAN_ENTITY_DATA:
            return {
                ...state,
                data: null,
            }
        default:
            return state
    }
}
