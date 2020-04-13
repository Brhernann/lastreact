import API from '../../utils/api'
import {
    fetchGetDepartmentPending,
    fetchGetDepartmentSuccess,
    fetchGetDepartmentError,
    fetchSaveDepartmentPending,
    fetchSaveDepartmentSuccess,
    fetchSaveDepartmentError,
    fetchUpdateDepartmentPending,
    fetchUpdateDepartmentSuccess,
    fetchUpdateDepartmentError,
    fetchGetByIdDepartmentPending,
    fetchGetByIdDepartmentSuccess,
    fetchGetByIdDepartmentError,
    fetchDeleteDepartmentPending,
    fetchDeleteDepartmentSuccess,
    fetchDeleteDepartmentError,
} from '../../redux/Action/catalogs/department'

let api = new API()

export default {
    department: params => { 
        return dispatch => {
            dispatch(fetchGetDepartmentPending())
            api.get('gdd/v1/catalogs/department/',params)
                .then(res => dispatch(fetchGetDepartmentSuccess(res.data)))
                .catch(error => dispatch(fetchGetDepartmentError(error)))
        }
    },
    saveDepartment: data => {
        return dispatch => {
            dispatch(fetchSaveDepartmentPending())
            api.post('gdd/v1/catalogs/department/', data)
                .then(res => dispatch(fetchSaveDepartmentSuccess(res.data)))
                .catch(error => dispatch(fetchSaveDepartmentError(error)))
        }
    },
    UpdateDepartment: data => {
        return dispatch => {
            dispatch(fetchUpdateDepartmentPending())
            api.put('gdd/v1/catalogs/department/', data)
                .then(res => dispatch(fetchUpdateDepartmentSuccess(res.data)))
                .catch(error => dispatch(fetchUpdateDepartmentError(error)))
        }
    },
    departmentById: id => {
        return dispatch => {
            dispatch(fetchGetByIdDepartmentPending())
            api.get(`gdd/v1/catalogs/department/${id}`)
                .then(res => dispatch(fetchGetByIdDepartmentSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdDepartmentError(error)))
        }
    },
    deleteDepartment: id => {
        return dispatch => {
            dispatch(fetchDeleteDepartmentPending())
            api.delete(`gdd/v1/catalogs/department/${id}`)
                .then(res => dispatch(fetchDeleteDepartmentSuccess(res.data)))
                .catch(error => dispatch(fetchDeleteDepartmentError(error)))
        }
    },
}
