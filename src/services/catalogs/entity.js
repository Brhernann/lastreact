import API from '../../utils/api'
import {
    fetchGetByIdEntityPending,
    fetchGetByIdGetEntitySuccess,
    fetchGetByIdGetEntityError,
    fetchSaveEntityPending,
    fetchSaveEntitySuccess,
    fetchSaveEntityError,
    fetchCleanError,
    fetchCleanSuccessMessage,
    fetchCleanEntityData,
} from '../../redux/Action/catalogs/entity'

let api = new API()

export default {
    entityById: id => {
        return dispatch => {
            dispatch(fetchGetByIdEntityPending())
            api.get(`gdd/v1/catalogs/entity/${id}`)
                .then(res => dispatch(fetchGetByIdGetEntitySuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdGetEntityError(error)))
        }
    },
    saveEntity: data => {
        return dispatch => {
            dispatch(fetchSaveEntityPending())
            api.post('gdd/v1/catalogs/entity/', data)
                .then(res => dispatch(fetchSaveEntitySuccess(res.data)))
                .catch(error => dispatch(fetchSaveEntityError(error.message)))
        }
    },
    cleanError: () => dispatch => dispatch(fetchCleanError()),
    cleanSuccessMessage: () => dispatch => dispatch(fetchCleanSuccessMessage()),
    cleanEntityData: () => dispatch => dispatch(fetchCleanEntityData()),
}
