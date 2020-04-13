import API from '../../utils/api'
import {
    fetchGetRegionPending,
    fetchGetRegionSuccess,
    fetchGetRegionError,
    fetchSaveRegionPending,
    fetchSaveRegionSuccess,
    fetchSaveRegionError,
    fetchUpdateRegionPending,
    fetchUpdateRegionSuccess,
    fetchUpdateRegionError,
    fetchGetByIdRegionPending,
    fetchGetByIdRegionSuccess,
    fetchGetByIdRegionError,
    fetchDeleteRegionPending,
    fetchDeleteRegionSuccess,
    fetchDeleteRegionError,
} from '../../redux/Action/catalogs/region'

let api = new API()

export default {
    region: params => {  
        return dispatch => {
            dispatch(fetchGetRegionPending())
            api.get('gdd/v1/catalogs/region/', params)
                .then(res => dispatch(fetchGetRegionSuccess(res.data)))
                .catch(error => dispatch(fetchGetRegionError(error)))
        }
    },
    saveRegion: data => {
        return dispatch => {
            dispatch(fetchSaveRegionPending())
            api.post('gdd/v1/catalogs/region/', data)
                .then(res => dispatch(fetchSaveRegionSuccess(res.data)))
                .catch(error => dispatch(fetchSaveRegionError(error)))
        }
    },
    UpdateRegion: data => {
        return dispatch => {
            dispatch(fetchUpdateRegionPending())
            api.put('gdd/v1/catalogs/region/', data)
                .then(res => dispatch(fetchUpdateRegionSuccess(res.data)))
                .catch(error => dispatch(fetchUpdateRegionError(error)))
        }
    },
    regionById: id => {
        return dispatch => {
            dispatch(fetchGetByIdRegionPending())
            api.get(`gdd/v1/catalogs/region/${id}`)
                .then(res => dispatch(fetchGetByIdRegionSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdRegionError(error)))
        }
    },
    deleteRegion: id => {
        return dispatch => {
            dispatch(fetchDeleteRegionPending())
            api.delete(`gdd/v1/catalogs/region/${id}`)
                .then(res => dispatch(fetchDeleteRegionSuccess(res.data)))
                .catch(error => dispatch(fetchDeleteRegionError(error)))
        }
    },
}
