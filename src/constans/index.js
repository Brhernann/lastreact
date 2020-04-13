// GLOBAL CONSTANTS
export const SET_LOADING = 'SET_LOADING'
export const CLEAN_ERROR = 'CLEAN_ERROR'

/*AUTH*/
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT = 'LOGOUT'
export const AUTH_ERROR = 'AUTH_ERROR'
export const LOAD_USER = 'LOAD_USER'

//DOCUMENTS
export const DOCUMENTS = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_DOC',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_DOC',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_DOC',
    GET_RESET: 'GET_RESET_DOC',

    /*CREATE*/
    FETCH_CREATE_PENDING: 'FETCH_CREATE_PENDING_DOC',
    FETCH_CREATE_SUCCESS: 'FETCH_CREATE_SUCCESS_DOC',
    FETCH_CREATE_ERROR: 'FETCH_CREATE_ERROR_DOC',
    CREATE_RESET: 'CREATE_RESET_DOC',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_DOC',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_DOC',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_DOC',
    GETBYID_RESET: 'GETBYID_RESET_DOC',

    /*ANNULAR*/
    FETCH_ANNULAR_PENDING: 'FETCH_ANNULAR_PENDING_DOC',
    FETCH_ANNULAR_SUCCESS: 'FETCH_ANNULAR_SUCCESS_DOC',
    FETCH_ANNULAR_ERROR: 'FETCH_ANNULAR_ERROR_DOC',
    ANNULAR_RESET: 'ANNULAR_RESET_DOC',

    /*ANNULAR*/
    STATUSPRINTER_PENDING: 'FETCH_STATUSPRINTER_PENDING_DOC',
    STATUSPRINTER_SUCCESS: 'FETCH_STATUSPRINTER_SUCCESS_DOC',
    STATUSPRINTER_ERROR: 'FETCH_STATUSPRINTER_ERROR_DOC',
    STATUSPRINTER_RESET: 'STATUSPRINTER_RESET_DOC',
}
//DOCUMENTS TYPE

export const DOCTYPE = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_DOCTYPE',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_DOCTYPE',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_DOCTYPE',
    GET_RESET: 'GET_RESET_DOCTYPE',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_DOCTYPE',
    FETCH_SAVE_SUCCESS: 'FETCH_SAVE_SUCCESS_DOCTYPE',
    FETCH_SAVE_ERROR: 'FETCH_SAVE_ERROR_DOCTYPE',
    SAVE_RESET: 'SAVE_RESET_DOCTYPE',

    /*UPDATE*/
    FETCH_UPDATE_PENDING: 'FETCH_UPDATE_PENDING_DOCTYPE',
    FETCH_UPDATE_SUCCESS: 'FETCH_UPDATE_SUCCESS_DOCTYPE',
    FETCH_UPDATE_ERROR: 'FETCH_UPDATE_ERROR_DOCTYPE',
    UPDATE_RESET: 'UPDATE_RESET_DOCTYPE',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_DOCTYPE',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_DOCTYPE',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_DOCTYPE',
    GETBYID_RESET: 'GETBYID_RESET_DOCTYPE',

    /*DELETE*/
    FETCH_DELETE_PENDING: 'FETCH_DELETE_PENDING_DOCTYPE',
    FETCH_DELETE_SUCCESS: 'FETCH_DELETE_SUCCESS_DOCTYPE',
    FETCH_DELETE_ERROR: 'FETCH_DELETE_ERROR_DOCTYPE',
    DELETE_RESET: 'DELETE_RESET_DOCTYPE',
}
//STATUS
export const STATUS = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_STATUS',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_STATUS',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_STATUS',
    GET_RESET: 'GET_RESET_STATUS',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_STATUS',
    FETCH_SAVE_SUCCESS: 'FETCH_SAVE_SUCCESS_STATUS',
    FETCH_SAVE_ERROR: 'FETCH_SAVE_ERROR_STATUS',
    SAVE_RESET: 'SAVE_RESET_DOCTYPE',

    /*UPDATE*/
    FETCH_UPDATE_PENDING: 'FETCH_UPDATE_PENDING_STATUS',
    FETCH_UPDATE_SUCCESS: 'FETCH_UPDATE_SUCCESS_STATUS',
    FETCH_UPDATE_ERROR: 'FETCH_UPDATE_ERROR_STATUS',
    UPDATE_RESET: 'UPDATE_RESET_STATUS',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_STATUS',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_STATUS',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_STATUS',
    GETBYID_RESET: 'GETBYID_RESET_STATUS',

    /*DELETE*/
    FETCH_DELETE_PENDING: 'FETCH_DELETE_PENDING_STATUS',
    FETCH_DELETE_SUCCESS: 'FETCH_DELETE_SUCCESS_STATUS',
    FETCH_DELETE_ERROR: 'FETCH_DELETE_ERROR_STATUS',
    DELETE_RESET: 'DELETE_RESET_STATUS',
}
//STORE
export const STORE = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_STORE',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_STORE',
    FETCH_GET_ERROR: 'FETCH_GET_ERRORSTORE_STORE',
    GET_RESET: 'GET_RESET_DOCTYPE',

    /*GET MY STORE*/
    FETCH_MYSTORE_PENDING: 'FETCH_MYSTORE_PENDING',
    FETCH_MYSTORE_SUCCESS: 'FETCH_MYSTORE_SUCCESS',
    FETCH_MYSTORE_ERROR: 'FETCH_MYSTORE_ERROR',
    MYSTORE_RESET: 'MYSTORE_RESET',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_STORE',
    FETCH_SAVE_SUCCESS: 'FETCH_SAVE_SUCCESS_STORE',
    FETCH_SAVE_ERROR: 'FETCH_SAVE_ERROR_STORE',
    SAVE_RESET: 'SAVE_RESET_STORE',

    /*UPDATE*/
    FETCH_UPDATE_PENDING: 'FETCH_UPDATE_PENDING_STORE',
    FETCH_UPDATE_SUCCESS: 'FETCH_UPDATE_SUCCESS_STORE',
    FETCH_UPDATE_ERROR: 'FETCH_UPDATE_ERROR_STORE',
    UPDATE_RESET: 'UPDATE_RESET_STORE',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_STORE',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_STORE',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_STORE',
    GETBYID_RESET: 'GETBYID_RESET_STORE',

    /*DELETE*/
    FETCH_DELETE_PENDING: 'FETCH_DELETE_PENDING_STORE',
    FETCH_DELETE_SUCCESS: 'FETCH_DELETE_SUCCESS_STORE',
    FETCH_DELETE_ERROR: 'FETCH_DELETE_ERROR_STORE',
    DELETE_RESET: 'DELETE_RESET_STORE',
}
//REGION
export const REGION = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_REGION',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_REGION',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_REGION',
    GET_RESET: 'GET_RESET_REGION',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_REGION',
    FETCH_SAVE_SUCCESS: 'FETCH_SAVE_SUCCESS_REGION',
    FETCH_SAVE_ERROR: 'FETCH_SAVE_ERROR_REGION',
    SAVE_RESET: 'SAVE_RESET_REGION',

    /*UPDATE*/
    FETCH_UPDATE_PENDING: 'FETCH_UPDATE_PENDING_REGION',
    FETCH_UPDATE_SUCCESS: 'FETCH_UPDATE_SUCCESS_REGION',
    FETCH_UPDATE_ERROR: 'FETCH_UPDATE_ERROR_REGION',
    UPDATE_RESET: 'UPDATE_RESET_REGION',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_REGION',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_REGION',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_REGION',
    GETBYID_RESET: 'GETBYID_RESET_REGION',

    /*DELETE*/
    FETCH_DELETE_PENDING: 'FETCH_DELETE_PENDING_REGION',
    FETCH_DELETE_SUCCESS: 'FETCH_DELETE_SUCCESS_REGION',
    FETCH_DELETE_ERROR: 'FETCH_DELETE_ERROR_REGION',
    DELETE_RESET: 'DELETE_RESET_REGION',
}
//PROVINCE
export const PROVINCE = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_PROVINCE',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_PROVINCE',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_PROVINCE',
    GET_RESET: 'GET_RESET_PROVINCE',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_PROVINCE',
    FETCH_SAVE_SUCCESS: 'FETCH_SAVE_SUCCESS_PROVINCE',
    FETCH_SAVE_ERROR: 'FETCH_SAVE_ERROR_PROVINCE',
    SAVE_RESET: 'SAVE_RESET_PROVINCE',

    /*UPDATE*/
    FETCH_UPDATE_PENDING: 'FETCH_UPDATE_PENDING_PROVINCE',
    FETCH_UPDATE_SUCCESS: 'FETCH_UPDATE_SUCCESS_PROVINCE',
    FETCH_UPDATE_ERROR: 'FETCH_UPDATE_ERROR_PROVINCE',
    UPDATE_RESET: 'UPDATE_RESET_PROVINCE',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_PROVINCE',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_PROVINCE',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_PROVINCE',
    GETBYID_RESET: 'GETBYID_RESET_PROVINCE',

    /*FIND ALL BY REGION ID */
    FETCH_GETBYREGIONID_PENDING: 'FETCH_GETBYREGIONID_PENDING',
    FETCH_GETBYREGIONID_SUCCESS: 'FETCH_GETBYREGIONID_SUCCESS',
    FETCH_GETBYREGIONID_ERROR: 'FETCH_GETBYREGIONID_ERROR',
    GETBYREGIONID_RESET: 'GETBYREGIONID_RESET',

    /*DELETE*/
    FETCH_DELETE_PENDING: 'FETCH_DELETE_PENDING_PROVINCE',
    FETCH_DELETE_SUCCESS: 'FETCH_DELETE_SUCCESS_PROVINCE',
    FETCH_DELETE_ERROR: 'FETCH_DELETE_ERROR_PROVINCE',
    DELETE_RESET: 'DELETE_RESET_PROVINCE',
}
//COMMUNE
export const COMMUNE = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_COMMUNE',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_COMMUNE',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_COMMUNE',
    GET_RESET: 'GET_RESET_COMMUNE',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_COMMUNE',
    FETCH_SAVE_SUCCESS: 'FETCH_SAVE_SUCCESS_COMMUNE',
    FETCH_SAVE_ERROR: 'FETCH_SAVE_ERROR_COMMUNE',
    SAVE_RESET: 'SAVE_RESET_COMMUNE',

    /*UPDATE*/
    FETCH_UPDATE_PENDING: 'FETCH_UPDATE_PENDING_COMMUNE',
    FETCH_UPDATE_SUCCESS: 'FETCH_UPDATE_SUCCESS_COMMUNE',
    FETCH_UPDATE_ERROR: 'FETCH_UPDATE_ERROR_COMMUNE',
    UPDATE_RESET: 'UPDATE_RESET_COMMUNE',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_COMMUNE',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_COMMUNE',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_COMMUNE',
    GETBYID_RESET: 'GETBYID_RESET_COMMUNE',

    /*FIND ALL BY REGION ID */
    FETCH_GET_BY_PROVINCE_ID_PENDING: 'FETCH_GET_BY_PROVINCE_ID_PENDING',
    FETCH_GET_BY_PROVINCE_ID_SUCCESS: 'FETCH_GET_BY_PROVINCE_ID_SUCCESS',
    FETCH_GET_BY_PROVINCE_ID_ERROR: 'FETCH_GET_BY_PROVINCE_ID_ERROR',
    GET_BY_PROVINCE_ID_RESET: 'GET_BY_PROVINCE_ID_RESET',

    /*DELETE*/
    FETCH_DELETE_PENDING: 'FETCH_DELETE_PENDING_COMMUNE',
    FETCH_DELETE_SUCCESS: 'FETCH_DELETE_SUCCESS_COMMUNE',
    FETCH_DELETE_ERROR: 'FETCH_DELETE_ERROR_COMMUNE',
    DELETE_RESET: 'DELETE_RESET_COMMUNE',
}
//PRODUCT
export const PRODUCT = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_PRODUCT',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_PRODUCT',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_PRODUCT',
    GET_RESET: 'GET_RESET_PRODUCT',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_PRODUCT',
    FETCH_SAVE_SUCCESS: 'FETCH_SAVE_SUCCESS_PRODUCT',
    FETCH_SAVE_ERROR: 'FETCH_SAVE_ERROR_PRODUCT',
    SAVE_RESET: 'SAVE_RESET_PRODUCT',

    /*UPDATE*/
    FETCH_UPDATE_PENDING: 'FETCH_UPDATE_PENDING_PRODUCT',
    FETCH_UPDATE_SUCCESS: 'FETCH_UPDATE_SUCCESS_PRODUCT',
    FETCH_UPDATE_ERROR: 'FETCH_UPDATE_ERROR_PRODUCT',
    UPDATE_RESET: 'UPDATE_RESET_PRODUCT',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_PRODUCT',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_PRODUCT',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_PRODUCT',
    GETBYID_RESET: 'GETBYID_RESET_PRODUCT',

    /*DELETE*/
    FETCH_DELETE_PENDING: 'FETCH_DELETE_PENDING_PRODUCT',
    FETCH_DELETE_SUCCESS: 'FETCH_DELETE_SUCCESS_PRODUCT',
    FETCH_DELETE_ERROR: 'FETCH_DELETE_ERROR_PRODUCT',
    DELETE_RESET: 'DELETE_RESET_PRODUCT',
}

//DEPARTMENT
export const DEPARTMENT = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_DEPARTMENT',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_DEPARTMENT',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_DEPARTMENT',
    GET_RESET: 'GET_RESET_DEPARTMENT',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_DEPARTMENT',
    FETCH_SAVE_SUCCESS: 'FETCH_SAVE_SUCCESS_DEPARTMENT',
    FETCH_SAVE_ERROR: 'FETCH_SAVE_ERROR_DEPARTMENT',
    SAVE_RESET: 'SAVE_RESET_DEPARTMENT',

    /*UPDATE*/
    FETCH_UPDATE_PENDING: 'FETCH_UPDATE_PENDING_DEPARTMENT',
    FETCH_UPDATE_SUCCESS: 'FETCH_UPDATE_SUCCESS_DEPARTMENT',
    FETCH_UPDATE_ERROR: 'FETCH_UPDATE_ERROR_DEPARTMENT',
    UPDATE_RESET: 'UPDATE_RESET_DEPARTMENT',

    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_DEPARTMENT',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_DEPARTMENT',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_DEPARTMENT',
    GETBYID_RESET: 'GETBYID_RESET_DEPARTMENT',

    /*DELETE*/
    FETCH_DELETE_PENDING: 'FETCH_DELETE_PENDING_DEPARTMENT',
    FETCH_DELETE_SUCCESS: 'FETCH_DELETE_SUCCESS_DEPARTMENT',
    FETCH_DELETE_ERROR: 'FETCH_DELETE_ERROR_DEPARTMENT',
    DELETE_RESET: 'DELETE_RESET_DEPARTMENT',
}

export const PDF = {
    /*GET*/
    FETCH_GET_PENDING: 'FETCH_GET_PENDING_PDF',
    FETCH_GET_SUCCESS: 'FETCH_GET_SUCCESS_PDF',
    FETCH_GET_ERROR: 'FETCH_GET_ERROR_PDF',
    GET_RESET: 'GET_RESET_PDF',
}

export const ENTITY = {
    /*GET BY ID */
    FETCH_GETBYID_PENDING: 'FETCH_GETBYID_PENDING_ENTITY',
    FETCH_GETBYID_SUCCESS: 'FETCH_GETBYID_SUCCESS_ENTITY',
    FETCH_GETBYID_ERROR: 'FETCH_GETBYID_ERROR_ENTITY',
    GETBYID_RESET: 'GETBYID_RESET_ENTITY',

    /*SAVE*/
    FETCH_SAVE_PENDING: 'FETCH_SAVE_PENDING_ENTITY',
    FETCH_SAVE_ENTITY_SUCCESS: 'FETCH_SAVE_ENTITY_SUCCESS',
    FETCH_SAVE_ENTITY_ERROR: 'FETCH_SAVE_ENTITY_ERROR',

    FETCH_CLEAN_ERROR: 'FETCH_CLEAN_ERROR',
    FETCH_CLEAN_SUCCESS_MESSAGE: 'FETCH_CLEAN_SUCCESS_MESSAGE',
    FETCH_CLEAN_ENTITY_DATA: 'FETCH_CLEAN_ENTITY_DATA',
}