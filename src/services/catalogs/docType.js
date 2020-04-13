import API from '../../utils/api'
import {
    fetchGetDocTypePending,
    fetchGetDocTypeSuccess,
    fetchGetDocTypeError,
    fetchSaveDocTypePending,
    fetchSaveDocTypeSuccess,
    fetchSaveDocTypeError,
    fetchUpdateDoctTypePending,
    fetchUpdateDocTypeSuccess,
    fetchUpdateDocTypeError,
    fetchGetByIdDocTypePending,
    fetchGetByIdDocTypeSuccess,
    fetchGetByIdDocTypeError,
    fetchDeleteDoctTypePending,
    fetchDeleteDocTypeSuccess,
    fetchDeleteDocTypeError,
} from '../../redux/Action/catalogs/docType'

let api = new API()

export default {
    documentType: params => {
        return dispatch => {
            dispatch(fetchGetDocTypePending())
            api.get('gdd/v1/catalogs/document-type/', params)
                .then(res => dispatch(fetchGetDocTypeSuccess(res.data)))
                .catch(error => dispatch(fetchGetDocTypeError(error)))
        }
    },
    saveDocumentType: data => {
        return dispatch => {
            dispatch(fetchSaveDocTypePending())
            api.post('gdd/v1/catalogs/document-type/', data)
                .then(res => dispatch(fetchSaveDocTypeSuccess(res.data)))
                .catch(error => dispatch(fetchSaveDocTypeError(error)))
        }
    },
    UpdatedocumentType: data => {
        return dispatch => {
            dispatch(fetchUpdateDoctTypePending())
            api.put('gdd/v1/catalogs/document-type/', data)
                .then(res => dispatch(fetchUpdateDocTypeSuccess(res.data)))
                .catch(error => dispatch(fetchUpdateDocTypeError(error)))
        }
    },
    documentTypeById: id => {
        return dispatch => {
            dispatch(fetchGetByIdDocTypePending())
            api.get(`gdd/v1/catalogs/document-type/${id}`)
                .then(res => dispatch(fetchGetByIdDocTypeSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdDocTypeError(error)))
        }
    },
    deletedocumentType: id => {
        return dispatch => {
            dispatch(fetchDeleteDoctTypePending())
            api.delete(`gdd/v1/catalogs/document-type/${id}`)
                .then(res => dispatch(fetchDeleteDocTypeSuccess(res.data)))
                .catch(error => dispatch(fetchDeleteDocTypeError(error)))
        }
    },
}
