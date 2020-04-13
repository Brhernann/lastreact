import API from '../utils/api'
import {
    fetchGetDocSuccess,
    fetchGetDocPending,
    fetchGetDocError,
    fetchCreateDocSuccess,
    fetchCreateDocPending,
    fetchCreateDocError,
    fetchGetByIdDocSuccess,
    fetchGetByIdDocPending,
    fetchGetByIdDocError,
    fetchAnnularDocSuccess,
    fetchAnnularDocPending,
    fetchAnnularDocError,
    fetchStatusPrinterSuccess,
    fetchStatusPrinterPending,
    fetchStatusPrinterError
} from '../redux/Action/doc'

let api = new API()

export default {
    documents: params => {
        return dispatch => {
            dispatch(fetchGetDocPending())
            api.get('gdd/v1/guide/documents/', params) 
                .then(res => dispatch(fetchGetDocSuccess(res.data)))
                .catch(error => dispatch(fetchGetDocError(error)))
        }
    },
    createDocuments: data => {
        return dispatch => {
            dispatch(fetchCreateDocPending())
            api.post('gdd/v1/guide/documents/', data) 
                .then(res => dispatch(fetchCreateDocSuccess(res.data)))
                .catch(error => dispatch(fetchCreateDocError(error)))
        }
    } ,
    documentsById: id => {
        return dispatch => {
            dispatch(fetchGetByIdDocPending())
            api.get(`gdd/v1/guide/documents/${id}`) 
                .then(res => dispatch(fetchGetByIdDocSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdDocError(error)))
        }
    } ,
    Annulardocuments: data => {
        return dispatch => {
            dispatch(fetchAnnularDocPending())
            api.put('gdd/v1/guide/documents/annular', data) 
                .then(res => dispatch(fetchAnnularDocSuccess(res.data)))
                .catch(error => dispatch(fetchAnnularDocError(error)))
        }
    },
    statusPrinter: data => {
        return dispatch => {
            dispatch(fetchStatusPrinterPending())
            api.put('gdd/v1/guide/documents/status/printed', data) 
                .then(res => dispatch(fetchStatusPrinterSuccess(res.data)))
                .catch(error => dispatch(fetchStatusPrinterError(error)))
        }
    } 
}
