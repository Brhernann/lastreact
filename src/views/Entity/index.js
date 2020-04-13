import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    Layout,
    Divider,
    Form,
    Select,
    Input,
    InputNumber,
    Button,
    message,
    Spin,
} from 'antd'
import {
    provinceServices,
    communeServices,
    entityServices,
} from '../../services'

const { Content } = Layout
const { Option } = Select

const Entity = ({
    store,
    region,
    provinces,
    provinceByRegionId,
    communes,
    communeByProvinceId,
    form,
    saveEntity,
    pending,
    error,
    cleanError,
    cleanSuccessMessage,
    successMessage,
}) => {
    const { getFieldDecorator, resetFields } = form

    const [storeId, setStoreId] = useState(null)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [addressNumber, setAddressNumber] = useState('')
    const [landmark, setLandmark] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [commune, setCommune] = useState(null)
    const [socialReason, setSocialReason] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [giro, setGiro] = useState('')
    const [economicActivityCode, setEconomicActivityCode] = useState('')
    const [dni, setDni] = useState('')

    useEffect(() => {
        if (error) {
            message.error(error)
            cleanError()
        }

        if (successMessage) {
            message.success(successMessage)
            cleanSuccessMessage()
        }
    }, [error, cleanError, successMessage, cleanSuccessMessage])

    const handleOnSubmit = e => {
        e.preventDefault()

        if (!storeId || !name || !address || !commune) {
            return message.error('Debes completar todos los campos requeridos.')
        }

        if (isNaN(parseInt(phoneNumber))) {
            return message.error(
                'El número de teléfono solo debe contener números.'
            )
        }

        const data = {
            addresses: [
                {
                    address,
                    communeId: commune,
                    landmark,
                    latitude,
                    longitude,
                    name,
                    number: addressNumber,
                    storeId,
                },
            ],
            description: name,
            dni,
            economicActivityCode,
            entityTypeId: 1,
            giro,
            phoneNumber,
            socialReason,
        }

        saveEntity(data)
        cleanForm()
    }

    const cleanForm = () => {
        resetFields()

        setStoreId(null)
        setName('')
        setAddress('')
        setAddressNumber('')
        setLandmark('')
        setLatitude(0)
        setLongitude(0)
        setCommune(null)
        setSocialReason('')
        setPhoneNumber('')
        setGiro('')
        setEconomicActivityCode('')
        setDni('')
    }

    return (
        <Spin tip="Guardando..." spinning={pending}>
            <Content className="search-content">
                <div className="titletop">
                    <Divider orientation="left">Crear entidad</Divider>
                </div>
                <Form className="form-content" onSubmit={handleOnSubmit}>
                    <div className="child-content-top">
                        <div className="input-filter">
                            <div className="input-child-filter">
                                <Form.Item required label="Tienda">
                                    {getFieldDecorator('store', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Selecciona una tienda',
                                            },
                                        ],
                                    })(
                                        <Select
                                            onChange={setStoreId}
                                            placeholder="Seleccionar"
                                            required
                                        >
                                            {store.map(store => (
                                                <Option
                                                    key={store.id}
                                                    value={store.id}
                                                >
                                                    {store.description}
                                                </Option>
                                            ))}
                                        </Select>
                                    )}
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item required label="Nombre">
                                    <Input
                                        placeholder="Nombre"
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                    />
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item required label="Dirección">
                                    <Input
                                        placeholder="Dirección"
                                        onChange={e =>
                                            setAddress(e.target.value)
                                        }
                                        value={address}
                                    />
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item label="Nro. Dirección">
                                    <Input
                                        placeholder="Nro. Dirección"
                                        onChange={e =>
                                            setAddressNumber(e.target.value)
                                        }
                                        value={addressNumber}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="input-filter">
                            <div className="input-child-filter">
                                <Form.Item label="Adicional">
                                    <Input
                                        placeholder="Adicional"
                                        onChange={e =>
                                            setLandmark(e.target.value)
                                        }
                                        value={landmark}
                                    />
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item label="Latitud">
                                    <InputNumber
                                        placeholder="Latitud"
                                        onChange={setLatitude}
                                        value={latitude}
                                    />
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item label="Longitud">
                                    <InputNumber
                                        placeholder="Longitud"
                                        onChange={setLongitude}
                                        value={longitude}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="input-filter">
                            <div className="input-child-filter">
                                <Form.Item required label="Región">
                                    {getFieldDecorator('region', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Selecciona una región',
                                            },
                                        ],
                                    })(
                                        <Select
                                            onChange={provinceByRegionId}
                                            placeholder="Seleccionar"
                                        >
                                            {region.map(region => (
                                                <Option
                                                    key={region.id}
                                                    value={region.id}
                                                >
                                                    {region.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    )}
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item required label="Provincia">
                                    {getFieldDecorator('province', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Selecciona una provincia',
                                            },
                                        ],
                                    })(
                                        <Select
                                            disabled={!provinces ? true : false}
                                            onChange={communeByProvinceId}
                                            placeholder="Seleccionar"
                                        >
                                            {provinces &&
                                                provinces.map(province => (
                                                    <Option
                                                        key={province.id}
                                                        value={province.id}
                                                    >
                                                        {province.name}
                                                    </Option>
                                                ))}
                                        </Select>
                                    )}
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item required label="Comuna">
                                    {getFieldDecorator('commune', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Selecciona una comuna',
                                            },
                                        ],
                                    })(
                                        <Select
                                            disabled={!communes ? true : false}
                                            onChange={setCommune}
                                            placeholder="Seleccionar"
                                        >
                                            {communes &&
                                                communes.map(commune => (
                                                    <Option
                                                        key={commune.id}
                                                        value={commune.id}
                                                    >
                                                        {commune.name}
                                                    </Option>
                                                ))}
                                        </Select>
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="input-filter">
                            <div className="input-child-filter">
                                <Form.Item label="Razón social">
                                    <Input
                                        placeholder="Razón social"
                                        value={socialReason}
                                        onChange={e =>
                                            setSocialReason(e.target.value)
                                        }
                                    />
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item label="Número de teléfono">
                                    <Input
                                        placeholder="Número de teléfono"
                                        onChange={e =>
                                            setPhoneNumber(e.target.value)
                                        }
                                        maxLength={8}
                                        value={phoneNumber}
                                    />
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item label="Giro">
                                    <Input
                                        placeholder="Giro"
                                        value={giro}
                                        onChange={e => setGiro(e.target.value)}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="input-filter">
                            <div className="input-child-filter">
                                <Form.Item label="Actividad economica">
                                    <Input
                                        placeholder="Actividad economica"
                                        value={economicActivityCode}
                                        onChange={e =>
                                            setEconomicActivityCode(
                                                e.target.value
                                            )
                                        }
                                    />
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item label="Tipo de entidad">
                                    {getFieldDecorator('entityType', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Selecciona un tipo de entidad',
                                            },
                                        ],
                                    })(
                                        <Select placeholder="Seleccionar">
                                            <Option value={1}>Tienda</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </div>
                            <div className="input-child-filter">
                                <Form.Item label="Rut">
                                    <Input
                                        placeholder="Rut"
                                        value={dni}
                                        onChange={e => setDni(e.target.value)}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="child-content-buttom">
                            <div className="buttom-child">
                                <Button onClick={cleanForm}>Limpiar</Button>
                            </div>
                            <div className="buttom-child">
                                <Button htmlType="submit" type="primary">
                                    Guardar
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Content>
        </Spin>
    )
}

Entity.propTypes = {
    store: PropTypes.array.isRequired,
    region: PropTypes.array.isRequired,
    provinces: PropTypes.array,
    communes: PropTypes.array,
    provinceByRegionId: PropTypes.func.isRequired,
    communeByProvinceId: PropTypes.func.isRequired,
    saveEntity: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired,
    error: PropTypes.string,
    cleanError: PropTypes.func.isRequired,
    successMessage: PropTypes.string,
    cleanSuccessMessage: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    provinceByRegionId: value =>
        dispatch(provinceServices.provinceByRegionId(value)),
    communeByProvinceId: value =>
        dispatch(communeServices.communeByProvinceId(value)),
    saveEntity: value => dispatch(entityServices.saveEntity(value)),
    cleanError: () => dispatch(entityServices.cleanError()),
    cleanSuccessMessage: () => dispatch(entityServices.cleanSuccessMessage()),
})

const mapStateToProps = state => ({
    store: state.store.data.content,
    region: state.region.data.content,
    provinces: state.provinceByRegionId.data,
    communes: state.communeByProvinceId.data,
    pending: state.entity.pending,
    error: state.entity.error,
    successMessage: state.entity.successMessage,
})

const EntityForm = Form.create({ name: 'entity_form' })(Entity)

export default connect(mapStateToProps, mapDispatchToProps)(EntityForm)
