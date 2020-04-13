import React, { Component } from 'react'
import { inputFilter } from '../../utils/mockupdata'
import { connect } from 'react-redux'
import {
    docServices,
    pdfServices,
    statusServices,
    departmentServices,
    entityServices,
} from '../../services'
import {
    Form,
    Layout,
    Table,
    Input,
    Icon,
    Button,
    Divider,
    AutoComplete,
    Select,
    Spin,
    Result,
    Tag,
    message,
    DatePicker,
    Modal,
    Tabs,
    Descriptions,
    Tooltip,
} from 'antd'
import './index.search.css'
import { PdfReset } from '../../redux/Action/pdf'
import { getDocReset } from '../../redux/Action/doc'
import moment from 'moment'
import { isEmpty } from '../../utils/util'

const { Content } = Layout
const { Option } = Select
const { RangePicker } = DatePicker
const { TabPane } = Tabs

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lpnDisabled: true,
            lpnValue: '',
            documents: [],
            pagination: { defaultCurrent: 0 },
            activeKey: '1',
            visible: false,
            filters: {},
            selectedRows: [],
            currentPage: 0,
            loading: false,
            fileURL: '',
            showPDF: false,
            showPrintBtn: true,
            reloadDocuments: false,
            titleModal: '',
            columns: [
                {
                    title: 'Nº De Folio',
                    dataIndex: 'invoice',
                    width: '8%',
                    sorter: true,
                },
                {
                    title: 'Tipo De Guía',
                    dataIndex: 'documentType.description',
                    width: '15%',
                },
                {
                    title: 'Fecha Creación',
                    dataIndex: 'creationAt',
                    width: '10%',
                    render: value => moment(value).format('DD/MM/YYYY'),
                },
                {
                    title: 'Tienda Origen',
                    dataIndex: 'emitter.address.name',
                    width: '10%',
                },
                {
                    title: 'Destino',
                    dataIndex: 'receiver.address.name',
                    width: '20%',
                },
                {
                    title: 'Estado',
                    width: '8%',
                    dataIndex: 'status.description',
                    render: value => this.setPrintStatusColor(value),
                },
                {
                    title: 'Usuario',
                    dataIndex: 'userName',
                    width: '8%',
                },
                {
                    title: 'Ver',
                    width: '5%',
                    dataIndex: 'show',
                    render: (text, record) => (
                        <Button
                            onClick={() => this.modalDocuments(record)}
                            type="link"
                            icon="eye"
                        />
                    ),
                },
            ],
            detailsColumns: [
                {
                    title: 'Código',
                    dataIndex: 'sku',
                    key: 'sku',
                },
                {
                    title: 'Cantidad',
                    dataIndex: 'quantity',
                    key: 'quantity',
                },
                {
                    title: 'Descripción',
                    dataIndex: 'description',
                    key: 'description',
                    ellipsis: true,
                },
                {
                    title: 'Total',
                    dataIndex: 'amount',
                    key: 'amount',
                },
            ],
        }
    }

    componentDidMount() {
        if (this.props.entity.data) this.props.cleanEntityData()
    }

    componentDidUpdate() {
        //Error action
        this.errorResponse(this.props.documents.error, 'documents')
        this.errorResponse(this.props.documentType.error, 'documentType')
        this.errorResponse(this.props.store.error, 'store')
        this.errorResponse(this.props.status.error, 'status')
        this.errorResponse(this.props.department.error, 'department')
        this.errorResponse(this.props.documentsById.error, 'documentsById')
        this.errorResponse(this.props.pdf.error, 'Multi pdf')

        //Render pdf
        if (this.props.pdf.data) {
            const file = new Blob([this.props.pdf.data], {
                type: 'application/pdf',
            })
            const fileURL = URL.createObjectURL(file)

            if (this.state.selectedRows.length > 0) {
                // from multi pdf
                this.setState({
                    fileURL,
                    visible: true,
                    showPDF: true,
                })
            } else {
                this.setState({ fileURL, visible: true })
            }

            this.props.pdfReset()
        }

        if (this.props.pdf.error) {
            this.props.pdfReset()
        }

        if (this.props.documents.error) {
            this.props.DocReset()
        }
    }
    errorResponse(error, name) {
        if (error) {
            if (error.response) {
                if (error.response.data.description) {
                    this.documentError(
                        name + ': ' + error.response.data.description
                    )
                } else {
                    this.documentError(name + ': ' + error.message)
                }
            } else {
                this.documentError(name + ': ' + error.message)
            }
        }
    }
    modalDocuments(value) {
        this.props.getDocumentsByID(value.id)
        this.props.getPdf({ documentsIds: value.id })
        this.setState({
            visible: true,
            titleModal: value.documentType.description,
        })

        if (
            value.status.description !== 'Anulado' &&
            value.status.description !== 'Impreso'
        ) {
            this.changestatus([value.id])
            this.setState({ reloadDocuments: true })
        }
    }
    documentError(msg) {
        message.error(msg)
    }
    handleTableChange = (pagination, filters, sorter) => {
        let order = sorter.order === 'ascend' ? 'asc' : 'desc'

        filters = isEmpty(this.state.filters)
            ? this.props.myStore.data.emittersAddressesIds
            : this.state.filters

        this.setState({ currentPage: pagination.current - 1 })

        this.props.getDocuments({
            page: pagination.current - 1,
            size: pagination.pageSize,
            filters,
            sort: `folioNumber,${order}`,
        })
    }
    onBlurInput(e, data) {
        e.preventDefault()
        if (data.key === 6) {
            this.props.form.setFieldsValue({
                userName: e.target.value.toUpperCase(),
            })
        }
    }

    handleLpnDisabled = value => {
        if (value === 'TR') return this.setState({ lpnDisabled: false })
        this.setState({ lpnDisabled: true, lpnValue: '' })
    }

    renderFilterInput(element) {
        switch (element.type) {
            case 'autocomplete':
                return (
                    <AutoComplete
                        dataSource={element.data}
                        onSearch={this.onSearch}
                        placeholder={element.label}
                    />
                )
            case 'date':
                return (
                    <RangePicker
                        placeholder={['Emision', '']}
                        style={{ width: '100%' }}
                    />
                )
            case 'multiple':
                return (
                    <Select
                        showSearch
                        optionFilterProp={element.label}
                        placeholder={element.label}
                        filterOption={(input, option) =>
                            option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                        mode="multiple"
                    >
                        {element.data.map(q => {
                            return (
                                <Option key={q.address.id} value={q.address.id}>
                                    {q.description}
                                </Option>
                            )
                        })}
                    </Select>
                )
            case 'lpn-input':
                return (
                    <Tooltip title='Solo puedes buscar por LPN cuando haz seleccionado "TRASPASO MERCADERIA" en Tipo De Guía'>
                        <Input
                            placeholder={element.label}
                            disabled={this.state.lpnDisabled}
                            value={this.state.lpnValue}
                            onChange={e =>
                                this.setState({ lpnValue: e.target.value })
                            }
                        />
                    </Tooltip>
                )
            case 'select':
                let onChangeHandler = value => {
                    if (element.name === 'documentTypeId') {
                        this.handleLpnDisabled(value)
                    }
                }

                return (
                    <Select onChange={value => onChangeHandler(value)}>
                        {element.data.map((el, index) => {
                            return (
                                <Option key={index} value={el.id}>
                                    {el.description}
                                </Option>
                            )
                        })}
                    </Select>
                )
            default:
                return (
                    <Input
                        placeholder={element.label}
                        onBlur={value => this.onBlurInput(value, element)}
                        disabled={element.disabled}
                    />
                )
        }
    }
    setPrintStatusColor(value) {
        switch (value) {
            case 'No Impreso':
                return <Tag color="green">{value}</Tag>
            case 'Impreso':
                return <Tag color="blue">{value}</Tag>
            case 'Anulado':
                return <Tag color="volcano">{value}</Tag>

            default:
                break
        }
    }
    getFields() {
        const count = this.state.expand ? 10 : 5
        const { getFieldDecorator } = this.props.form
        const children = []

        inputFilter.forEach(element => {
            if (this.props.documentType.data) {
                if (element.key === 5) {
                    //DOCTYPE
                    let enables = this.props.documentType.data.content.filter(
                        e => e.enable
                    )
                    let data = enables.map(e => {
                        return {
                            ...e,
                            value: e.id,
                            text: e.description,
                        }
                    })
                    element.data = data
                }
            }
            if (this.props.status.data) {
                if (element.key === 6) {
                    let data = this.props.status.data.content.map(e => {
                        return {
                            ...e,
                            value: e.id,
                            text: e.description,
                        }
                    })
                    //
                    element.data = data
                }
            }

            if (this.props.myStore.data) {
                if (this.props.myStore.data.store) {
                    // tiendas asignadas
                    if (element.key === 3) {
                        let stores = this.props.myStore.data.store.filter(
                            q => q.address.id
                        )
                        let data = stores.map(e => {
                            return {
                                ...e,
                                value: e.address.id,
                                text: e.description,
                            }
                        })
                        element.data = data
                    }
                }
            }

            if (this.props.department.data) {
                if (element.key === 7) {
                    let data = this.props.department.data.content.map(e => {
                        return {
                            ...e,
                            value: e.id,
                            text: e.description,
                        }
                    })
                    element.data = data
                }
            }
            children.push(
                <div
                    key={element.key}
                    className="input-child-filter"
                    style={{
                        display: element.key < count ? 'block' : 'none',
                        marginBottom: '-2%',
                    }}
                >
                    <Form.Item>
                        {getFieldDecorator(element.name, {
                            rules: [
                                {
                                    required: false,
                                },
                            ],
                        })(this.renderFilterInput(element))}
                    </Form.Item>
                </div>
            )
        })

        return children
    }
    handleSearch = e => {
        e.preventDefault()
        const { lpnValue } = this.state

        this.props.form.validateFields((err, values) => {
            Object.keys(values).forEach(key =>
                values[key] === undefined || values[key] === ''
                    ? delete values[key]
                    : ''
            )

            if (values.emissionAt) {
                values.emissionAtEnd = moment(values.emissionAt[1]).format(
                    'YYYY/MM/DD'
                )
                values.emissionAt = moment(values.emissionAt[0]).format(
                    'YYYY/MM/DD'
                )
            }

            if (values.emittersAddressesIds) {
                if (values.emittersAddressesIds.length > 0) {
                    values.emittersAddressesIds = values.emittersAddressesIds.join(
                        ','
                    )
                } else {
                    values.emittersAddressesIds = this.props.myStore.data.emittersAddressesIds.emittersAddressesIds
                }
            } else {
                values.emittersAddressesIds = this.props.myStore.data.emittersAddressesIds.emittersAddressesIds
            }

            const filler = lpnValue ? `LPN${lpnValue}` : ''
            const filterValues = { ...values, filler }

            this.setState({ filters: filterValues, currentPage: 0 })
            this.props.getDocuments({
                page: 0,
                size: 20,
                sort: `folioNumber,desc`,
                filters: filterValues,
            })

            this.setState({ lpnValue: '', lpnDisabled: true })
            this.props.form.resetFields()
        })
    }
    handleReset = () => {
        this.props.form.resetFields()
        let emittersAddressesIds = this.props.myStore.data.emittersAddressesIds
        this.setState({ currentPage: 0, lpnDisabled: true, lpnValue: '' })
        this.props.getDocuments({
            page: 0,
            size: 20,
            sort: `folioNumber,desc`,
            filters: emittersAddressesIds,
        })
    }
    toggle = () => {
        const { expand } = this.state
        this.setState({ expand: !expand })
        if (!expand) {
            this.props.getDepartment({ size: 1000 })
            this.props.getStatus({ size: 50 })
        }
    }
    printPdf = () => {
        this.setState({ reloadDocuments: true })
        this.props.getPdf({ documentsIds: this.state.selectedRows.join(',') })
        this.changestatus(this.state.selectedRows)
    }
    closeModal = e => {
        e.preventDefault()
        this.setState({
            visible: false,
            showPDF: false,
            showPrintBtn: true,
            activeKey: '1',
            fileURL: '',
            selectedRows: [],
        })

        if (this.state.reloadDocuments) {
            this.setState({ reloadDocuments: false })
            let emittersAddressesIds = this.props.myStore.data
                .emittersAddressesIds
            this.props.getDocuments({
                page: this.state.currentPage, // here keep the current page
                size: 20,
                sort: `folioNumber,desc`,
                filters: emittersAddressesIds,
            })
        }
    }
    onSelectChange = selectedRows => {
        if (selectedRows.length > 1) {
            this.setState({
                showPrintBtn: false,
                selectedRows,
            })
        } else {
            this.setState({
                showPrintBtn: true,
                selectedRows,
            })
        }
    }
    changestatus(ids) {
        let name = localStorage.getItem('NAME')
        this.props.statusPrinter({
            documentIds: ids,
            userName: name ? name : 'NO_NAME',
        })
    }
    render() {
        const documentsById = this.props.documentsById.data
        const pendingDocById = this.props.documentsById.pending
        const {
            pagination,
            selectedRows,
            showPDF,
            fileURL,
            detailsColumns,
            activeKey,
        } = this.state

        if (this.props.documents.data) {
            pagination.pageSize = this.props.documents.data.size
            pagination.total = this.props.documents.data.totalElements
            pagination.current = this.props.documents.data.number + 1
            pagination.showSizeChanger = true
        }

        const rowSelection = {
            selectedRowKeys: selectedRows,
            onChange: this.onSelectChange,
            getCheckboxProps: record => ({
                disabled:
                    record.status.description === 'Guardado' ||
                    record.status.description === 'Anulado',
                invoice: record.invoice,
            }),
        }

        const tableFooter = () => {
            let documentsTotal = this.props.documents.data
                ? this.props.documents.data.totalElements
                : '...'
            return (
                <div style={{ textAlign: 'end' }}>
                    {' '}
                    {documentsTotal} Guías De Despacho{' '}
                </div>
            )
        }

        const renderLPN = doc => {
            if (doc) {
                if (doc.documentType.id === 'TR') {
                    if (doc.documentOther.filler) {
                        return (
                            <Descriptions.Item label="LPN">
                                {doc.documentOther.filler.replace('LPN', '')}
                            </Descriptions.Item>
                        )
                    }
                }
            }
        }

        return (
            <Content className="search-content">
                <Modal
                    title={this.state.titleModal}
                    visible={this.state.visible}
                    onOk={this.closeModal}
                    onCancel={this.closeModal}
                    width={'80%'}
                    centered
                >
                    {showPDF ? (
                        <object
                            style={{ width: '100%', height: '600px' }}
                            type="application/pdf"
                            aria-label="multi pdf"
                            data={fileURL}
                        ></object>
                    ) : (
                        <Tabs
                            type="card"
                            onTabClick={activeKey =>
                                this.setState({ activeKey })
                            }
                            activeKey={activeKey}
                        >
                            <TabPane tab="Detalle" key="1">
                                <Spin
                                    tip="Loading..."
                                    spinning={pendingDocById}
                                >
                                    <Descriptions>
                                        <Descriptions.Item label="Folio">
                                            {documentsById
                                                ? documentsById.invoice
                                                : 0}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Tipo De Guía">
                                            {documentsById
                                                ? documentsById.documentType
                                                      .description
                                                : 0}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Fecha creación">
                                            {documentsById
                                                ? moment(
                                                      documentsById.creationAt
                                                  ).format('DD/MM/YYYY')
                                                : 0}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Tienda origen">
                                            {documentsById
                                                ? documentsById.emitter.address
                                                      .name
                                                : 0}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Destino">
                                            {documentsById
                                                ? documentsById.receiver.address
                                                      .name
                                                : 0}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Usuario">
                                            {documentsById
                                                ? documentsById.userName
                                                : 0}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Estado">
                                            {documentsById
                                                ? this.setPrintStatusColor(
                                                      documentsById.status
                                                          .description
                                                  )
                                                : 0}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Impresiones">
                                            {documentsById
                                                ? documentsById.printCount
                                                : 0}
                                        </Descriptions.Item>
                                    </Descriptions>
                                    <Divider orientation="left">SKU</Divider>
                                    <div>
                                        {documentsById ? (
                                            <Table
                                                columns={detailsColumns}
                                                rowKey={record => record.sku}
                                                dataSource={
                                                    documentsById.details
                                                }
                                            />
                                        ) : (
                                            'No data'
                                        )}
                                    </div>
                                    <Divider orientation="left">
                                        Otros Datos
                                    </Divider>
                                    <Descriptions>
                                        <Descriptions.Item
                                            label={
                                                documentsById &&
                                                documentsById.documentOther
                                                    .numberTypeGloss
                                            }
                                        >
                                            {documentsById &&
                                                documentsById.documentOther
                                                    .numberType}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Guia relacionada">
                                            {/* {documentsById
                                        ? documentsById.documentOther.
                                        : 0} */}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Transporta">
                                            {/* {documentsById
                                        ? documentsById.documentOther.
                                        : 0} */}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Despacha">
                                            {documentsById &&
                                                documentsById.dispatcherName}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Solicitante">
                                            {documentsById &&
                                                documentsById.applicantBy}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Boleta">
                                            {/* {documentsById
                                        ? documentsById.documentOther.
                                        : 0} */}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Cantidad">
                                            {/* {documentsById
                                        ? documentsById.documentOther.
                                        : 0} */}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Departamento">
                                            {documentsById &&
                                                documentsById.department &&
                                                documentsById.department
                                                    .description}
                                        </Descriptions.Item>
                                        {renderLPN(documentsById)}
                                    </Descriptions>
                                </Spin>
                            </TabPane>
                            <TabPane tab="PDF" key="2">
                                {documentsById &&
                                documentsById.status.description ===
                                    'Anulado' ? (
                                    <Result
                                        icon={
                                            <Icon type="meh" theme="twoTone" />
                                        }
                                        title="Hola, No tenemos nada para mostrar!"
                                        extra={
                                            <Button type="primary">Next</Button>
                                        }
                                    />
                                ) : (
                                    <object
                                        style={{
                                            width: '100%',
                                            height: '600px',
                                        }}
                                        type="application/pdf"
                                        aria-label="one pdf"
                                        data={fileURL}
                                    ></object>
                                )}
                            </TabPane>
                        </Tabs>
                    )}
                </Modal>

                <div className="filter-child-content">
                    <div className="titletop">
                        <Divider orientation="left">Guías De Despacho</Divider>
                    </div>

                    <Form
                        className="ant-advanced-search-form"
                        onSubmit={this.handleSearch}
                    >
                        <div className="input-filter">{this.getFields()}</div>
                        <div>
                            <div className="buttom-content">
                                <a
                                    href="##"
                                    style={{ marginLeft: 8, fontSize: 12 }}
                                    onClick={this.toggle}
                                >
                                    Búsqueda Avanzada
                                    <Icon
                                        type={this.state.expand ? 'up' : 'down'}
                                    />
                                </a>
                                <div>
                                    <Button type="primary" htmlType="submit">
                                        Buscar
                                    </Button>
                                    <Button
                                        style={{ marginLeft: 8 }}
                                        onClick={this.handleReset}
                                    >
                                        Limpiar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="table-child-content">
                    <Table
                        columns={this.state.columns}
                        rowKey={record => record.id}
                        scroll={{ x: 1000, y: 440 }}
                        footer={() => tableFooter()}
                        dataSource={
                            this.props.documents.data
                                ? this.props.documents.data.content
                                : []
                        }
                        pagination={this.state.pagination}
                        loading={this.props.documents.pending}
                        rowSelection={rowSelection}
                        onChange={this.handleTableChange}
                    />
                    <Button
                        type="primary"
                        disabled={this.state.showPrintBtn}
                        shape="round"
                        loading={this.props.pdf.pending}
                        style={{ marginBottom: '10px' }}
                        onClick={this.printPdf}
                    >
                        Imprimir selección
                    </Button>
                </div>
            </Content>
        )
    }
}
const mapStateToProps = state => {
    return {
        documents: state.documents,
        statusPrinter: state.statusPrinter,
        documentsById: state.documentsById,
        documentType: state.documentType,
        status: state.status,
        store: state.store,
        myStore: state.myStore,
        pdf: state.pdf,
        department: state.department,
        user: state.AuthReducer.user,
        entity: state.entity,
    }
}
const mapDispatchToProps = dispatch => ({
    getDocuments: value => dispatch(docServices.documents(value)),
    getDepartment: value => dispatch(departmentServices.department(value)),
    getDocumentsByID: value => dispatch(docServices.documentsById(value)),
    statusPrinter: value => dispatch(docServices.statusPrinter(value)),
    getStatus: value => dispatch(statusServices.status(value)),
    getPdf: value => dispatch(pdfServices.pdf(value)),
    pdfReset: value => dispatch(PdfReset(value)),
    DocReset: value => dispatch(getDocReset(value)),
    cleanEntityData: () => dispatch(entityServices.cleanEntityData()),
})

const WrappedSearch = Form.create({ name: 'advanced_search' })(Search)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedSearch)
