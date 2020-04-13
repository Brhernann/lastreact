//TABLE SEARCH DISPATCH GUIDE
export const inputFilter = [
    {
        label: 'Nº Folio',
        key: 1,
        type: 'input',
        name: 'folioNumber',
        data: [],
        role: 'user',
    },
    {
        label: 'Fecha de creación',
        key: 2,
        type: 'date',
        name: 'emissionAt',
        data: [],
        role: 'user',
    },
    {
        label: 'Tienda',
        key: 3,
        type: 'multiple',
        name: 'emittersAddressesIds',
        data: [],
        role: 'admin',
    },
    {
        label: 'Usuario',
        key: 4,
        type: 'input',
        name: 'userName',
        data: [],
        role: 'user',
    },
    {
        label: 'Tipo De Guía',
        key: 5,
        type: 'select',
        name: 'documentTypeId',
        data: [],
        role: 'user',
    },
    {
        label: 'Estado',
        key: 6,
        type: 'select',
        name: 'statusId',
        data: [],
        role: 'user',
    },
    {
        label: 'Departamento',
        key: 7,
        type: 'select',
        name: 'departmentId',
        data: [],
        role: 'user',
    },
    {
        label: 'LPN',
        key: 8,
        type: 'lpn-input',
        name: 'lpn',
        data: [],
        role: 'user',
        disabled: true,
    },
]

export const inputCreateGuideA = [
    {
        label: 'Tienda Origen',
        key: 1,
        type: 'select',
        name: 'emitterStoreId',
        data: [],
        role: 'user',
        required: true,
        disabled: false,
    },
    {
        label: 'Destino',
        key: 2,
        type: 'select',
        name: 'receiver.storeId',
        data: [],
        role: 'user',
        required: true,
        disabled: false,
    },
    {
        label: 'Rut',
        key: 3,
        type: 'input',
        name: 'receiver.dni',
        data: [],
        role: 'user',
        required: false,
        disabled: true,
    },
    {
        label: 'Nombre',
        key: 4,
        type: 'input',
        name: 'receiver.description',
        data: [],
        role: 'user',
        required: false,
        disabled: true,
    },
    {
        label: 'Dirección',
        key: 5,
        type: 'input',
        name: 'receiver.address.description',
        data: [],
        role: 'admin',
        required: false,
        disabled: true,
    },
    {
        label: 'Región',
        key: 6,
        type: 'select',
        name: 'receiver.address.city',
        data: [],
        role: 'user',
        required: false,
        disabled: true,
    },
    {
        label: 'Provincia',
        key: 7,
        type: 'select',
        name: 'receiver.address.province',
        data: [],
        role: 'user',
        required: false,
        disabled: true,
    },
    {
        label: 'Comuna',
        key: 8,
        type: 'select',
        name: 'receiver.address.commune',
        data: [],
        role: 'user',
        required: false,
        disabled: true,
    },
]

export const inputCreateGuideB = [
    {
        label: 'Solícita',
        key: 9,
        type: 'input',
        required: true,
        name: 'others.applicantBy',
        data: [],
        role: 'user',
    },
    {
        label: 'Transporta',
        key: 11,
        type: 'input',
        required: true,
        name: 'others.driverLastName',
        data: [],
        role: 'user',
    },
    {
        label: 'Despacha',
        key: 12,
        type: 'input',
        required: true,
        name: 'others.dispatcherName',
        data: [],
        role: 'user',
    },
    {
        label: 'Autoriza',
        required: true,
        key: 13,
        type: 'input',
        name: 'others.filler',
        data: [],
        role: 'user',
    },
    {
        label: 'Cantidad De Bultos',
        key: 10,
        type: 'InputNumber',
        required: true,
        name: 'others.packages.packageAmount',
        data: [],
        role: 'user',
        disabled: true,
    },
]

let currentDate = new Date()

export const createGdd = {
    documentTypeId: 'SE',
    userName: 'DEFAULT', //GET FROM LOGIN
    deviceUserAs400: 'WEB',
    emissionDate: currentDate.getTime(),
    emitterStoreId: 0, //Tienda Origen
    receiver: {
        dni: '0096293000', //Document
        dniVerifyDigit: 'K',
        description: '', //nombre
        economicActivityCode: 'GENERICO',
        address: {
            city: '', //province
            commune: '', //commune
            description: '', //address
        },
        storeId: 0, // no igual a emmiterStoreId
    },
    totalNetAmount: 0,
    totalAmount: 0,
    taxRate: 19,
    taxAmount: 19,
    details: [],
    others: [
        {
            numberTypeGloss: 'SE',
            driverLastName: 'No Informado',
            applicantBy: 'No Informado',
            filler: 'No informado',
            dispatcherName: 'No Informado',
            documenTypeId: 'SE',
            packages: {
                packageAmount: 1,
            },
        },
    ],
}
