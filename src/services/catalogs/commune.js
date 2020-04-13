import API from '../../utils/api'
import {
    fetchGetCommunePending,
    fetchGetCommuneSuccess,
    fetchGetCommuneError,
    fetchSaveCommunePending,
    fetchSaveCommuneSuccess,
    fetchSaveCommuneError,
    fetchUpdateCommunePending,
    fetchUpdateCommuneSuccess,
    fetchUpdateCommuneError,
    fetchGetByIdCommunePending,
    fetchGetByIdCommuneSuccess,
    fetchGetByIdCommuneError,
    fetchGetByProvinceIdPending,
    fetchGetByProvinceIdSuccess,
    fetchGetByProvinceIdError,
    fetchDeleteCommunePending,
    fetchDeleteCommuneSuccess,
    fetchDeleteCommuneError,
} from '../../redux/Action/catalogs/commune'

let api = new API()

export default {
    commune: () => { 
        return dispatch => {
            dispatch(fetchGetCommunePending())
            api.get('gdd/v1/catalogs/commune/')
                .then(res => dispatch(fetchGetCommuneSuccess(res.data)))
                .catch(error => dispatch(fetchGetCommuneError(error)))
        }
    },
    saveCommune: data => {
        return dispatch => {
            dispatch(fetchSaveCommunePending())
            api.post('gdd/v1/catalogs/commune/', data)
                .then(res => dispatch(fetchSaveCommuneSuccess(res.data)))
                .catch(error => dispatch(fetchSaveCommuneError(error)))
        }
    },
    UpdateCommune: data => {
        return dispatch => {
            dispatch(fetchUpdateCommunePending())
            api.put('gdd/v1/catalogs/commune/', data)
                .then(res => dispatch(fetchUpdateCommuneSuccess(res.data)))
                .catch(error => dispatch(fetchUpdateCommuneError(error)))
        }
    },
    communeById: id => {
        return dispatch => {
            dispatch(fetchGetByIdCommunePending())
            api.get(`gdd/v1/catalogs/commune/${id}`)
                .then(res => dispatch(fetchGetByIdCommuneSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdCommuneError(error)))
        }
    },
    communeByProvinceId: id => {
        return dispatch => {
            dispatch(fetchGetByProvinceIdPending())
            api.get(`gdd/v1/catalogs/commune/all/${id}`)
                .then(res => dispatch(fetchGetByProvinceIdSuccess(res.data)))
                .catch(error => dispatch(fetchGetByProvinceIdError(error)))
        }
    },
    deleteCommune: id => {
        return dispatch => {
            dispatch(fetchDeleteCommunePending())
            api.delete(`gdd/v1/catalogs/commune/${id}`)
                .then(res => dispatch(fetchDeleteCommuneSuccess(res.data)))
                .catch(error => dispatch(fetchDeleteCommuneError(error)))
        }
    },
}
