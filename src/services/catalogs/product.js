import API from '../../utils/api'
import {
    fetchGetProductPending,
    fetchGetProductSuccess,
    fetchGetProductError,
    fetchSaveProductPending,
    fetchSaveProductSuccess,
    fetchSaveProductError,
    fetchUpdateProductPending,
    fetchUpdateProductSuccess,
    fetchUpdateProductError,
    fetchGetByIdProductPending,
    fetchGetByIdProductSuccess,
    fetchGetByIdProductError,
    fetchDeleteProductPending,
    fetchDeleteProductSuccess,
    fetchDeleteProductError,
} from '../../redux/Action/catalogs/product'

let api = new API()

export default {
    product: params => { 
        return dispatch => {
            dispatch(fetchGetProductPending())
            api.get('gdd/v1/catalogs/product/',params)
                .then(res => dispatch(fetchGetProductSuccess(res.data)))
                .catch(error => dispatch(fetchGetProductError(error)))
        }
    },
    saveProduct: data => {
        return dispatch => {
            dispatch(fetchSaveProductPending())
            api.post('gdd/v1/catalogs/product/', data)
                .then(res => dispatch(fetchSaveProductSuccess(res.data)))
                .catch(error => dispatch(fetchSaveProductError(error)))
        }
    },
    UpdateProduct: data => {
        return dispatch => {
            dispatch(fetchUpdateProductPending())
            api.put('gdd/v1/catalogs/product/', data)
                .then(res => dispatch(fetchUpdateProductSuccess(res.data)))
                .catch(error => dispatch(fetchUpdateProductError(error)))
        }
    },
    productById: id => {
        return dispatch => {
            dispatch(fetchGetByIdProductPending())
            api.get(`gdd/v1/catalogs/product/${id}`)
                .then(res => dispatch(fetchGetByIdProductSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdProductError(error)))
        }
    },
    deleteProduct: id => {
        return dispatch => {
            dispatch(fetchDeleteProductPending())
            api.delete(`gdd/v1/catalogs/product/${id}`)
                .then(res => dispatch(fetchDeleteProductSuccess(res.data)))
                .catch(error => dispatch(fetchDeleteProductError(error)))
        }
    },
}
