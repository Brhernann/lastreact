import API from '../../utils/api'
import { getMyIdsStores } from '../../utils/util'
import { docServices } from '../../services'
import {
    fetchGetStorePending,
    fetchGetStoreSuccess,
    fetchGetStoreError,
    fetchSaveStorePending,
    fetchSaveStoreSuccess,
    fetchSaveStoreError,
    fetchUpdateStorePending,
    fetchUpdateStoreSuccess,
    fetchUpdateStoreError,
    fetchGetByIdStorePending,
    fetchMyStoreSuccess,
    fetchGetByIdStoreSuccess,
    fetchGetByIdStoreError,
    fetchDeleteStorePending,
    fetchDeleteStoreSuccess,
    fetchDeleteStoreError,
} from '../../redux/Action/catalogs/store'

let api = new API()

const loadStore = (data) => {
    //My ids
    let ids = getMyIdsStores(),
        emittersAddressesIds = {},
        isAdmin = ids[0] === 0;

    if (!isAdmin) { //LIMITED STORES

        if (data) { //we need control the delay
            //All stores
            let allStores = data.content
            //My stores
            let myStores = allStores.filter(my => ~ids.indexOf(my.id))
            //emittersAddressesIds
            emittersAddressesIds =
                myStores.length > 0 && myStores.map(q => q.address.id)

            if (emittersAddressesIds) {
                //transform for the filter query
                emittersAddressesIds = {
                    emittersAddressesIds: emittersAddressesIds.join(
                        ','
                    ),
                }
            }

            return {store: myStores,emittersAddressesIds}
        }
    }
    return {store: null, emittersAddressesIds:{}} 
}

export default { 
    store: params => { 
        return dispatch => {
            dispatch(fetchGetStorePending())
            api.get('gdd/v1/catalogs/store/', params)
                .then(async res => {
                    let myStore = await loadStore(res.data)
                    await dispatch(fetchGetStoreSuccess(res.data))
                    
                    if(myStore.store){
                         dispatch(fetchMyStoreSuccess(myStore))
                    }else{
                        myStore.store = res.data.content
                         dispatch(fetchMyStoreSuccess(myStore)) 
                    }

                    await  dispatch(docServices.documents({
                        page: 0,
                        size: 20,
                        sort: `folioNumber,desc`,
                        filters: myStore.emittersAddressesIds,
                    }))
                })
                .catch(error => dispatch(fetchGetStoreError(error)))
        }
    },
    saveStore: data => {
        return dispatch => {
            dispatch(fetchSaveStorePending())
            api.post('gdd/v1/catalogs/store/', data)
                .then(res => dispatch(fetchSaveStoreSuccess(res.data)))
                .catch(error => dispatch(fetchSaveStoreError(error)))
        }
    },
    UpdateStore: data => {
        return dispatch => {
            dispatch(fetchUpdateStorePending())
            api.put('gdd/v1/catalogs/store/', data)
                .then(res => dispatch(fetchUpdateStoreSuccess(res.data)))
                .catch(error => dispatch(fetchUpdateStoreError(error)))
        }
    },
    storeById: id => {
        return dispatch => {
            dispatch(fetchGetByIdStorePending())
            api.get(`gdd/v1/catalogs/store/${id}`)
                .then(res => dispatch(fetchGetByIdStoreSuccess(res.data)))
                .catch(error => dispatch(fetchGetByIdStoreError(error)))
        }
    },
    deleteStore: id => {
        return dispatch => {
            dispatch(fetchDeleteStorePending())
            api.delete(`gdd/v1/catalogs/store/${id}`)
                .then(res => dispatch(fetchDeleteStoreSuccess(res.data)))
                .catch(error => dispatch(fetchDeleteStoreError(error)))
        }
    },
}
