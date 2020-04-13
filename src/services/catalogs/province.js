import API from '../../utils/api'
import {
    fetchGetProvincePending,
    fetchGetProvinceSuccess,
    fetchGetProvinceError,
    fetchSaveProvincePending,
    fetchSaveProvinceSuccess,
    fetchSaveProvinceError,
    fetchUpdateProvincePending,
    fetchUpdateProvinceSuccess,
    fetchUpdateProvinceError,
    fetchGetByIdProvincePending,
    fetchGetByIdProvinceSuccess,
    fetchGetByIdProvinceError,
    fetchGetByRegionIdPending,
    fetchGetByRegionIdSuccess,
    fetchGetByRegionIdError,
    fetchDeleteProvincePending,
    fetchDeleteProvinceSuccess,
    fetchDeleteProvinceError,
} from '../../redux/Action/catalogs/province'

let api = new API()

export default {
    province: () => { 
        return dispatch => {
            dispatch(fetchGetProvincePending())
            api.get('gdd/v1/catalogs/province/')
                .then(res => dispatch(fetchGetProvinceSuccess(res.data)))
                .catch(error => dispatch(fetchGetProvinceError(error)))
        }
    },
    saveProvince: data => {
        return dispatch => {
            dispatch(fetchSaveProvincePending())
            api.post('gdd/v1/catalogs/province/', data)
                .then(res => dispatch(fetchSaveProvinceSuccess(res.data)))
                .catch(error => dispatch(fetchSaveProvinceError(error)))
        }
    },
    UpdateProvince: data => {
        return dispatch => {
            dispatch(fetchUpdateProvincePending())
            api.put('gdd/v1/catalogs/province/', data)
                .then(res => dispatch(fetchUpdateProvinceSuccess(res.data)))
                .catch(error => dispatch(fetchUpdateProvinceError(error)))
        }
    },
    provinceById: id => {
        return dispatch => {
            dispatch(fetchGetByIdProvincePending())
            api.get(`gdd/v1/catalogs/province/${id}`)
                .then(res => dispatch(fetchGetByIdProvinceSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdProvinceError(error)))
        }
    },
    provinceByRegionId: id => {
        return dispatch => {
            dispatch(fetchGetByRegionIdPending())
            api.get(`gdd/v1/catalogs/province/all/${id}`)
                .then(res => dispatch(fetchGetByRegionIdSuccess(res.data)))
                .catch(error => dispatch(fetchGetByRegionIdError(error)))
        }
    },
    deleteProvince: id => {
        return dispatch => {
            dispatch(fetchDeleteProvincePending())
            api.delete(`gdd/v1/catalogs/province/${id}`)
                .then(res => dispatch(fetchDeleteProvinceSuccess(res.data)))
                .catch(error => dispatch(fetchDeleteProvinceError(error)))
        }
    },
}
