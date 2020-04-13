import API from '../../utils/api'
import {
    fetchGetStatusPending,
    fetchGetStatusSuccess,
    fetchGetStatusError,
    fetchSaveStatusPending,
    fetchSaveStatusSuccess,
    fetchSaveStatusError,
    fetchUpdateStatusPending,
    fetchUpdateStatusSuccess,
    fetchUpdateStatusError,
    fetchGetByIdStatusPending,
    fetchGetByIdStatusSuccess,
    fetchGetByIdStatusError,
    fetchDeleteStatusPending,
    fetchDeleteStatusSuccess,
    fetchDeleteStatusError,
} from '../../redux/Action/catalogs/status'

let api = new API()

export default {
    status: params => { 
        return dispatch => {
            dispatch(fetchGetStatusPending())
            api.get('gdd/v1/catalogs/status/', params)
                .then(res => dispatch(fetchGetStatusSuccess(res.data)))
                .catch(error => dispatch(fetchGetStatusError(error)))
        }
    },
    saveStatus: data => {
        return dispatch => {
            dispatch(fetchSaveStatusPending())
            api.post('gdd/v1/catalogs/status/', data)
                .then(res => dispatch(fetchSaveStatusSuccess(res.data)))
                .catch(error => dispatch(fetchSaveStatusError(error)))
        }
    },
    UpdateStatus: data => {
        return dispatch => {
            dispatch(fetchUpdateStatusPending())
            api.put('gdd/v1/catalogs/status/', data)
                .then(res => dispatch(fetchUpdateStatusSuccess(res.data)))
                .catch(error => dispatch(fetchUpdateStatusError(error)))
        }
    },
    statusById: id => {
        return dispatch => {
            dispatch(fetchGetByIdStatusPending())
            api.get(`gdd/v1/catalogs/status/${id}`)
                .then(res => dispatch(fetchGetByIdStatusSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdStatusError(error)))
        }
    },
    deleteStatus: id => {
        return dispatch => {
            dispatch(fetchDeleteStatusPending())
            api.delete(`gdd/v1/catalogs/status/${id}`)
                .then(res => dispatch(fetchDeleteStatusSuccess(res.data)))
                .catch(error => dispatch(fetchDeleteStatusError(error)))
        }
    },
}
