import { combineReducers } from 'redux'
import AuthReducer from './auth'
import pdf from './pdf'
import {
    documents,
    createDocuments,
    documentsById,
    annularDocumment,
    statusPrinterDocumment,
} from './doc'
import {
    documentType,
    saveDocumentType,
    UpdatedocumentType,
    documentTypeById,
    deletedocumentType,
} from './catalogs/docType'

import {
    status,
    saveStatus,
    UpdateStatus,
    statusById,
    deleteStatus,
} from './catalogs/status'

import {
    store,
    myStore,
    saveStore,
    UpdateStore,
    storeById,
    deleteStore,
} from './catalogs/store'

import {
    region,
    saveRegion,
    UpdateRegion,
    regionById,
    deleteRegion,
} from './catalogs/region'

import {
    department,
    saveDepartment,
    UpdateDepartment,
    departmentById,
    deleteDepartment,
} from './catalogs/deparment'

//HERE HERE HEREH

import {
    commune,
    saveCommune,
    UpdateCommune,
    communeById,
    communeByProvinceId,
    deleteCommune,
} from './catalogs/commune'

import {
    province,
    saveProvince,
    UpdateProvince,
    provinceById,
    provinceByRegionId,
    deleteProvince,
} from './catalogs/province'

import {
    product,
    saveProduct,
    UpdateProduct,
    productById,
    deleteProduct,
} from './catalogs/product'

import { entity } from './catalogs/entity'

export default combineReducers({
    AuthReducer,
    documents,
    createDocuments,
    documentsById,
    annularDocumment,
    statusPrinterDocumment,
    documentType,
    saveDocumentType,
    UpdatedocumentType,
    documentTypeById,
    deletedocumentType,
    status,
    saveStatus,
    UpdateStatus,
    statusById,
    deleteStatus,
    store,
    saveStore,
    UpdateStore,
    storeById,
    deleteStore,
    region,
    saveRegion,
    UpdateRegion,
    regionById,
    deleteRegion,
    commune,
    saveCommune,
    UpdateCommune,
    communeById,
    communeByProvinceId,
    deleteCommune,
    province,
    saveProvince,
    UpdateProvince,
    provinceById,
    provinceByRegionId,
    deleteProvince,
    product,
    saveProduct,
    UpdateProduct,
    productById,
    deleteProduct,
    pdf,
    department,
    saveDepartment,
    UpdateDepartment,
    departmentById,
    deleteDepartment,
    entity,
    myStore,
})
