import React, { useState, useEffect } from 'react'
import { inputCreateGuideA, inputCreateGuideB } from '../../utils/mockupdata'
import { connect } from 'react-redux'
import { createGdd } from '../../utils/mockupdata'
import { validate, format, clean } from 'rut.js'
import CurrencyFormat from 'react-currency-format'
import { errorResponse, isEmpty } from '../../utils/util'
import {
    docServices,
    provinceServices,
    communeServices,
    storeServices,
    entityServices,
} from '../../services'
import { createDocReset } from '../../redux/Action/doc'
import {
    Form,
    Layout,
    Input,
    Icon,
    Button,
    Divider,
    Spin,
    InputNumber,
    Select,
    message,
    notification,
    Tooltip,
} from 'antd'
import './index.create.css'

const { Content } = Layout
const { Option } = Select
let id = 0

const Create = ({
    form,
    getEntityById,
    entityById,
    getProvinceByRegionId,
    getCommuneByProvinceId,
    region,
    communeByProvinceId,
    store,
    provinceByRegionId,
    myStore,
    user,
    product,
    createDocuments,
    documentsCreated,
    createDocReset,
    cleanEntityData,
}) => {
    const [subtotalPrice, setSubtotalPrice] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [text, setText] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [documentCreated, setDocumentCreated] = useState(false)
    const [packageQuantity, setPackageQuantity] = useState(0)

    useEffect(() => {
        if (entityById.data) {
            form.setFieldsValue({
                'receiver.dni': entityById.data.dni,
                'receiver.description': entityById.data.description,
                'receiver.address.description':
                    entityById.data.addresses[0].address,
                'receiver.address.city': 'NO INFORMADO',
                'receiver.address.province': 'NO INFORMADO',
                'receiver.address.commune':
                    entityById.data.addresses[0].commune.name,
            })
        } else {
            if (!documentCreated && packageQuantity === 0) add()

            if (Number.isInteger(packageQuantity) && packageQuantity < 1) {
                form.resetFields([
                    'receiver.dni',
                    'receiver.description',
                    'receiver.address.description',
                    'receiver.address.city',
                    'receiver.address.province',
                    'receiver.address.commune',
                ])
            }
        }

        errorResponse(documentsCreated.error, 'create')
        if (documentsCreated.data) {
            openNotificationWithIcon('success', documentsCreated.data)
            createDocReset()
            cleanEntityData()
            setPackageQuantity(0)
        }
        if (documentsCreated.error) {
            createDocReset()
            cleanEntityData()
            setPackageQuantity(0)
        }

        form.setFieldsValue({
            'others.packages.packageAmount': packageQuantity,
        })
        // eslint-disable-next-line
    }, [entityById.data, documentsCreated, packageQuantity])

    const openNotificationWithIcon = (type, data) => {
        notification[type]({
            message: 'Guia creada',
            description: `se ha creado la guia de despacho ${data.invoice}`,
        })
    }

    const remove = k => {
        const keys = form.getFieldValue('keys')
        if (keys.length === 1) {
            return
        }
        subtotalPrice.splice(k, 1)
        calculateTotal()
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        })
    }

    const add = () => {
        const keys = form.getFieldValue('keys')
        const nextKeys = keys.concat(id++)

        let i = nextKeys.length - 1

        if (keys.length > 0) {
            let k = nextKeys[i - 1]
            form.validateFields(
                [
                    `productType[${k}]`,
                    `description[${k}]`,
                    `quantity[${k}]`,
                    `price[${k}]`,
                ],
                (error, values) => {
                    let subtotal = values.quantity[k] * values.price[k]
                    if (subtotal < 100) {
                        message.error(
                            'Subtotal no puede ser inferior a $100.00 PESOS'
                        )
                    } else {
                        if (!error) {
                            form.setFieldsValue({
                                keys: nextKeys,
                            })
                        }
                    }
                }
            )
        } else {
            form.setFieldsValue({
                keys: nextKeys,
            })
        }

        setPrice(0)
        setQuantity(0)
    }

    const onChange = (value, data) => {
        if (data.props.name === 'Destino') {
            if (value === 0) {
                cleanEntityData()
                // otro
                for (let index = 2; index < inputCreateGuideA.length; index++) {
                    const element = inputCreateGuideA[index]
                    element.disabled = false
                    element.required = true
                }
                inputCreateGuideA[6].disabled = true
                inputCreateGuideA[7].disabled = true
                //CLEAR ONLY FIELDS A INPUT
                form.resetFields([
                    'receiver.dni',
                    'receiver.description',
                    'receiver.address.description',
                    'receiver.address.city',
                    'receiver.address.province',
                    'receiver.address.commune',
                ])
            } else {
                getEntityById(data.props.value)

                for (let index = 2; index < inputCreateGuideA.length; index++) {
                    const element = inputCreateGuideA[index]
                    element.disabled = true
                    element.required = false
                }
            }
        }

        if (data.props.name === 'Región') {
            getProvinceByRegionId(data.props.value)
            inputCreateGuideA[6].disabled = false
            form.resetFields([
                'receiver.address.province',
                'receiver.address.commune',
            ])
        }
        if (data.props.name === 'Provincia') {
            getCommuneByProvinceId(data.props.value)
            inputCreateGuideA[7].disabled = false
            form.resetFields(['receiver.address.commune'])
        }
    }

    const onChangeQuantity = (key, quantity) => {
        setQuantity(quantity)
        //ANTES DE CALCULAR, A TRAVEZ DEL KEY PREGUNTAR SI EXISTE PRICE
        let empty = isEmpty(subtotalPrice[key])

        if (!empty) {
            const value = form.getFieldValue(`price[${key}]`)
            calculateSubtotal(quantity, value, key)
        } else {
            calculateSubtotal(quantity, price, key)
        }
        calculateTotal()
    }

    const onChangePrice = (key, price) => {
        setPrice(price)
        //ANTES DE CALCULAR, A TRAVEZ DEL KEY PREGUNTAR SI EXISTE QUANTITY
        let empty = isEmpty(subtotalPrice[key])

        if (!empty) {
            const value = form.getFieldValue(`quantity[${key}]`)
            calculateSubtotal(value, price, key)
        } else {
            calculateSubtotal(quantity, price, key)
        }
        calculateTotal()
    }

    const onBlurInput = (e, data) => {
        e.preventDefault()

        if (data.key === 3) {
            form.validateFields(['receiver.dni'], (error, values) => {
                if (!error) {
                    form.setFieldsValue({
                        'receiver.dni': format(e.target.value),
                    })
                }
            })
        }
    }

    const renderFilterInput = element => {
        switch (element.type) {
            case 'select':
                return (
                    <Select
                        showSearch
                        placeholder={element.label}
                        optionFilterProp={element.label}
                        onChange={onChange}
                        disabled={element.disabled}
                        filterOption={(input, option) =>
                            option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {element.data.map((q, i) => (
                            <Option
                                key={i}
                                name={element.label}
                                value={q.value}
                            >
                                {q.text}
                            </Option>
                        ))}
                    </Select>
                )
            case 'InputNumber':
                return (
                    <InputNumber
                        min={1}
                        style={{ width: '100%' }}
                        placeholder={element.label}
                        disabled={element.disabled}
                    />
                )
            default:
                return (
                    <Input
                        disabled={element.disabled}
                        placeholder={element.label}
                        onBlur={value => onBlurInput(value, element)}
                    />
                )
        }
    }

    const getFields_A = () => {
        const { getFieldDecorator } = form
        const children = []

        inputCreateGuideA.forEach(element => {
            if (region.data) {
                //REGION
                if (element.key === 6) {
                    let data = region.data.content.map(e => {
                        return {
                            ...e,
                            value: e.id,
                            text: e.name,
                        }
                    })
                    element.data = data
                }
            }
            if (communeByProvinceId.data) {
                //COMMUNE
                if (element.key === 8) {
                    let data = communeByProvinceId.data.map(e => {
                        return {
                            ...e,
                            value: e.id,
                            text: e.name,
                        }
                    })
                    element.data = data
                }
            }
            if (provinceByRegionId.data) {
                if (element.key === 7) {
                    let data = provinceByRegionId.data.map(e => {
                        return {
                            ...e,
                            value: e.id,
                            text: e.name,
                        }
                    })
                    element.data = data
                }
            }
            if (store.data) {
                //STORE TO
                if (element.key === 2) {
                    let data = store.data.content.map(e => {
                        return {
                            ...e,
                            value: e.id,
                            text: e.description,
                        }
                    })
                    data.unshift({
                        id: 'otros',
                        description: 'Otro',
                        value: 0,
                        text: 'Otro',
                    })
                    element.data = data
                }
            }

            if (myStore.data.store) {
                if (element.key === 1) {
                    let stores = myStore.data.store.filter(q => q.address.id)
                    if (stores) {
                        let data = stores.map(e => {
                            return {
                                ...e,
                                value: e.id,
                                text: e.description,
                            }
                        })
                        element.data = data
                    }
                }
            }

            children.push(
                <div
                    key={element.key}
                    className="input-child-filter"
                    style={{ marginBottom: '-2%' }}
                >
                    <Form.Item>
                        {getFieldDecorator(element.name, {
                            rules: [
                                {
                                    required: element.required,
                                    message: `${element.label} no puede estar vacio`,
                                },
                                {
                                    validator: (rule, value, callback) => {
                                        try {
                                            if (element.key === 3) {
                                                if (!validate(value) && value) {
                                                    throw new Error(
                                                        'Something wrong!'
                                                    )
                                                }
                                            }
                                        } catch (err) {
                                            callback(err)
                                            return
                                        }
                                        callback()
                                    },
                                    message: 'Rut inválido',
                                },
                                {
                                    transform: value => format(value),
                                },
                            ],
                        })(renderFilterInput(element))}
                    </Form.Item>
                </div>
            )
        })

        return children
    }

    const getFields_B = () => {
        const { getFieldDecorator } = form
        const children = []

        inputCreateGuideB.forEach(element => {
            children.push(
                <div
                    key={element.key}
                    className="input-child-filter"
                    style={{ width: '20%' }}
                >
                    <Form.Item label={element.label}>
                        {getFieldDecorator([element.name], {
                            rules: [
                                {
                                    required: element.required,
                                    message: `${element.label} no puede estar vacio`,
                                },
                                {
                                    validator: (rule, value, callback) => {
                                        try {
                                            if (element.key === 10) {
                                                if (value) {
                                                    if (
                                                        !Number.isInteger(value)
                                                    ) {
                                                        throw new Error(
                                                            'Ingrese solo numeros.'
                                                        )
                                                    }
                                                }
                                            }
                                        } catch (err) {
                                            callback(err)
                                            return
                                        }
                                        callback()
                                    },
                                },
                            ],
                        })(renderFilterInput(element))}
                    </Form.Item>
                </div>
            )
        })

        return children
    }

    const handleSearch = e => {
        e.preventDefault()
        form.validateFields((err, values) => {
            let details = values.keys.map(value => {
                let productType = JSON.parse(values.productType[value])
                let desc = `${productType.description}: ${values.description[value]}`

                return {
                    sku: productType.id,
                    quantity: values.quantity[value],
                    description: desc,
                    netPrice: values.price[value],
                    amount: values.quantity[value] * values.price[value],
                }
            })

            let data = [values]
            values = data.map((v, k) => {
                return {
                    emitterStoreId: v.emitterStoreId,
                    others: v.others,
                    receiver: v.receiver,
                    details,
                }
            })

            values = values[0]

            let totalAmount = 0
            details.forEach(element => {
                let amount = element.quantity * element.netPrice
                totalAmount += amount
            })

            let GDD = { ...createGdd }

            GDD.userName = user.user.toUpperCase()
            GDD.emitterStoreId = values.emitterStoreId
            GDD.details = values.details
            GDD.totalAmount = Math.round(totalAmount)
            GDD.taxAmount = Math.round(totalAmount * 0.19)
            GDD.totalNetAmount = Math.round(totalAmount - totalAmount * 0.19)
            //GETTING DATA FROM JSON MOCKUP
            if (values.receiver.storeId) {
                GDD.receiver.storeId = values.receiver.storeId
            }
            if (values.receiver.dni) {
                let dni = clean(values.receiver.dni)
                GDD.receiver.dni = dni.slice(0, -1)
                GDD.receiver.dniVerifyDigit = dni[dni.length - 1]
            }
            if (values.receiver.description) {
                GDD.receiver.description = values.receiver.description
            }
            if (values.receiver.address.description) {
                GDD.receiver.address.description =
                    values.receiver.address.description
            }
            if (values.receiver.address.city) {
                GDD.receiver.address.city = values.receiver.address.city
            }
            if (values.receiver.address.province) {
                GDD.receiver.address.province = values.receiver.address.province
            }
            if (values.receiver.address.commune) {
                GDD.receiver.address.commune = values.receiver.address.commune
            }

            //OTHERS VERIFICATION
            if (values.others.applicantBy) {
                GDD.others[0].applicantBy = values.others.applicantBy
            }
            if (values.others.dispatcherName) {
                GDD.others[0].dispatcherName = values.others.dispatcherName
            }
            if (values.others.driverLastName) {
                GDD.others[0].driverLastName = values.others.driverLastName
            }
            if (
                values.others.packages.packageAmount &&
                values.others.packages.packageAmount >= 2
            ) {
                GDD.others[0].packages.packageAmount =
                    values.others.packages.packageAmount
            }

            if (values.others.filler) {
                GDD.others[0].filler = values.others.filler
            }

            if (!err) {
                createDocuments(GDD)
                handleReset()
                setDocumentCreated(true)
            }
        })
    }

    const handleReset = () => {
        setQuantity(0)
        setPrice(0)
        setTotalPrice('')
        setSubtotalPrice([])
        setText('')

        form.resetFields()

        for (let index = 2; index < inputCreateGuideA.length; index++) {
            const element = inputCreateGuideA[index]
            element.disabled = true
        }

        add()
    }

    const calculateSubtotal = (quantity, price, key) => {
        if (quantity !== 0 && price !== 0) {
            let subtotal = price * quantity

            if (subtotalPrice.length > 0) {
                const found = subtotalPrice.some(the => the.key === key)

                if (found) {
                    subtotalPrice[key].quantity = quantity
                    subtotalPrice[key].subtotal = subtotal
                } else {
                    subtotalPrice[key] = { subtotal, key, quantity }
                }
                setSubtotalPrice(subtotalPrice)
            } else {
                subtotalPrice[key] = { subtotal, key, quantity }
                setSubtotalPrice(subtotalPrice)
            }
        }
    }

    const calculateTotal = () => {
        let sum = 0
        let totalQuantity = 0
        if (subtotalPrice.length > 0) {
            subtotalPrice.forEach(element => {
                sum += element.subtotal
            })
            setTotalPrice(sum)

            subtotalPrice.forEach(element => {
                totalQuantity += element.quantity
            })
            setPackageQuantity(totalQuantity)
        }
    }

    const textForToolTips = e => {
        e.preventDefault()
        setText(e.target.value)
    }

    const { getFieldDecorator, getFieldValue } = form

    getFieldDecorator('keys', { initialValue: [] })
    const keys = getFieldValue('keys')

    const InputItems = keys.map((k, index) => (
        <div className="input-items" key={k}>
            <Form.Item
                required={false}
                label={index === 0 ? 'Tipo Producto' : ''}
                key={`product-type[${k}]`}
            >
                {getFieldDecorator(`productType[${k}]`, {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [
                        {
                            required: true,
                            message: 'Por favor seleccione tipo de producto.',
                        },
                    ],
                })(
                    <Select
                        showSearch
                        optionFilterProp="children"
                        onChange={onChange}
                        style={{ width: '15vw' }}
                        filterOption={(input, option) =>
                            option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {product.data &&
                            product.data.content.map((q, i) => {
                                return (
                                    <Option key={i} value={JSON.stringify(q)}>
                                        {q.description}
                                    </Option>
                                )
                            })}
                    </Select>
                )}
            </Form.Item>
            <Form.Item
                label={index === 0 ? 'Cantidad' : ''}
                required={false}
                key={`quantity[${k}]`}
            >
                {getFieldDecorator(`quantity[${k}]`, {
                    rules: [
                        {
                            required: true,
                            message: 'Por favor indique una cantidad.',
                        },
                        {
                            validator: (rule, value, callback) => {
                                try {
                                    if (value) {
                                        if (!Number.isInteger(value)) {
                                            throw new Error(
                                                'Ingrese solo numeros.'
                                            )
                                        } else if (value > 999999999) {
                                            throw new Error(
                                                'Has excedido el máximo permitido.'
                                            )
                                        }
                                    }
                                } catch (err) {
                                    callback(err)
                                    return
                                }
                                callback()
                            },
                        },
                    ],
                })(
                    <InputNumber
                        style={{ width: '10vw' }}
                        onChange={value => onChangeQuantity(k, value)}
                    />
                )}
            </Form.Item>
            <Tooltip arrowPointAtCenter={true} placement="bottom" title={text}>
                <Form.Item
                    label={index === 0 ? 'Descripción' : ''}
                    required={false}
                    key={`description[${k}]`}
                >
                    {getFieldDecorator(`description[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                message: 'Por favor ingrese descripción.',
                            },
                            {
                                validator: (rule, value, callback) => {
                                    try {
                                        if (value) {
                                            if (value.length > 225) {
                                                throw new Error(
                                                    'Something wrong!'
                                                )
                                            }
                                        }
                                    } catch (err) {
                                        callback(
                                            `Máximo excedido: ${value.length -
                                                225}`
                                        )
                                        return
                                    }
                                    callback()
                                },
                            },
                        ],
                    })(
                        <Input
                            onChange={textForToolTips}
                            style={{ width: '15vw' }}
                        />
                    )}
                </Form.Item>
            </Tooltip>
            <Form.Item
                label={index === 0 ? 'Precio' : ''}
                required={false}
                key={`price[${k}]`}
            >
                {getFieldDecorator(`price[${k}]`, {
                    rules: [
                        {
                            required: true,
                            message: 'Por favor indique un precio.',
                        },
                        {
                            validator: (rule, value, callback) => {
                                try {
                                    if (value) {
                                        if (!Number.isInteger(value)) {
                                            throw new Error(
                                                'Ingrese solo numeros.'
                                            )
                                        } else if (value > 999999999999999999) {
                                            throw new Error(
                                                'Has excedido el máximo permitido.'
                                            )
                                        }
                                    }
                                } catch (err) {
                                    callback(err)
                                    return
                                }
                                callback()
                            },
                        },
                    ],
                })(
                    <InputNumber
                        formatter={value =>
                            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        style={{ width: '10vw' }}
                        onChange={value => onChangePrice(k, value)}
                    />
                )}
                {keys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        style={{ paddingLeft: '10px' }}
                        onClick={() => remove(k)}
                    />
                ) : null}
            </Form.Item>
            <Form.Item
                key={`subtotal[${k}]`}
                label={index === 0 ? 'Subtotal' : ''}
            >
                <div style={{ width: '8vw' }}>
                    <span className="ant-form-text">
                        {subtotalPrice[k] ? (
                            <CurrencyFormat
                                value={
                                    isNaN(subtotalPrice[k].subtotal)
                                        ? 0
                                        : subtotalPrice[k].subtotal
                                }
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                        ) : (
                            0
                        )}
                    </span>
                </div>
            </Form.Item>
        </div>
    ))

    return (
        <Spin spinning={documentsCreated.pending} tip="Creando documento...">
            <Content className="search-content">
                <div className="titletop">
                    <Divider orientation="left">
                        Creación De Guía De Servicio
                    </Divider>
                </div>
                <Form className="form-content" onSubmit={handleSearch}>
                    <div className="child-content-top">
                        <Spin tip="cargando..." spinning={entityById.pending}>
                            <div className="input-filter">{getFields_A()}</div>
                        </Spin>
                    </div>
                    <div className="child-content sku">
                        <Divider orientation="left">Detalle De Guía</Divider>
                        {InputItems}
                        <Form.Item
                            style={{ textAlign: 'right', marginRight: '10%' }}
                        >
                            <Button type="dashed" onClick={add}>
                                <Icon type="plus" /> Agregar Producto
                            </Button>
                        </Form.Item>
                    </div>
                    <Divider dashed orientation="right">
                        {'Total '}
                        <CurrencyFormat
                            value={isNaN(totalPrice) ? 0 : totalPrice}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                        />
                    </Divider>
                    <div className="child-content">
                        <Divider orientation="left">Datos Adicionales</Divider>
                        <div className="input-filter">{getFields_B()}</div>
                    </div>
                    <div className="child-content-buttom">
                        <div className="buttom-child">
                            <Button onClick={handleReset}>Limpiar</Button>
                        </div>
                        <div className="buttom-child">
                            <Button disabled type="primary">
                                Guardar
                            </Button>
                        </div>
                        <div className="buttom-child">
                            <Button htmlType="submit" type="primary">
                                Crear GDD
                            </Button>
                        </div>
                    </div>
                </Form>
            </Content>
        </Spin>
    )
}

const mapStateToProps = state => ({
    documentsCreated: state.createDocuments,
    region: state.region,
    provinceByRegionId: state.provinceByRegionId,
    product: state.product,
    communeByProvinceId: state.communeByProvinceId,
    store: state.store,
    user: state.AuthReducer.user,
    entityById: state.entity,
    myStore: state.myStore,
})

const mapDispatchToProps = dispatch => ({
    createDocuments: value => dispatch(docServices.createDocuments(value)),
    createDocReset: value => dispatch(createDocReset(value)),
    getProvinceByRegionId: value =>
        dispatch(provinceServices.provinceByRegionId(value)),
    getCommuneByProvinceId: value =>
        dispatch(communeServices.communeByProvinceId(value)),
    getStore: value => dispatch(storeServices.store(value)),
    getEntityById: value => dispatch(entityServices.entityById(value)),
    cleanEntityData: () => dispatch(entityServices.cleanEntityData()),
})

const WrappedSearch = Form.create({ name: 'advanced_create' })(Create)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedSearch)
