import API from '../utils/api'
import {
    fetchPdfPending,
    fetchPdfSuccess,
    fetchPdfError,
} from '../redux/Action/pdf'

let api = new API()

export default {
    pdf: params => {
        return dispatch => {
            dispatch(fetchPdfPending())
            api.getpdf('gdd/v1/files/pdf/merge', params)
                .then(res => dispatch(fetchPdfSuccess(res.data)))
                .catch(error => dispatch(fetchPdfError(error)))
        }
    },
}
