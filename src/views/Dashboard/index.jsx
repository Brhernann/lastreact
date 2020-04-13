import React, { Component, Fragment } from 'react'
import { Layout, Menu, Icon, Avatar, Dropdown, Spin } from 'antd'
import { BrowserRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { myStoreReset } from '../../redux/Action/catalogs/store'
import {
    storeServices,
    regionServices,
    productServices,
    docTypeServices,
    docServices,
} from '../../services'
import Create from '../Create/index'
import Search from '../Search'
import logo from '../../components/Logo/logo.jpeg'
import './index.dashboard.css'
// import Entity from '../Entity'
import PropTypes from 'prop-types'
import { logout } from '../../services/auth'

const { Sider } = Layout

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
            selected: '1',
            tips: 'Cargando datos...',
            emittersAddressesIds: [],
            navigate: false,
            loading: false,
        }
    }

    componentDidMount() {
        this.props.getStore({ size: 1000 })
        this.props.getDocumentType({ size: 50 })
        this.props.getRegion({ size: 50 })
        this.props.getProduct({ size: 50 })
    }
    logoutUser() {
        this.props.myStoreReset()
        this.props.logout()
    }
    onCollapse = collapsed => {
        this.setState({ collapsed })
    }
    onSelect = selected => {
        this.setState({ selected: selected.key })
    }
    reloadDocuments() {
        const { emittersAddressesIds } = this.props.myStore.data
        this.props.getDocuments({
            page: 0,
            size: 20,
            sort: `folioNumber,desc`,
            filters: emittersAddressesIds,
        })
    }
    renderComponent(value) {
        switch (value) {
            case '1':
                return <Search />
            case '2':
                return <Create />
            default:
                return
        }
    }
    render() {
        const { navigate } = this.state
        let name = this.props.user && this.props.user.user
        let firstName = 'Shipper'
        let firstWord = 'S'

        if (name) {
            firstName = name.toLocaleUpperCase()
            firstWord = firstName.charAt(0)
        }

        if (navigate || !this.props.user) {
            return <Redirect to="/" push={true} />
        }

        const menuInUsername = (
            <Menu onClick={() => this.logoutUser()}>
                <Menu.Item>
                    <span> Cerrar sesión</span>
                </Menu.Item>
            </Menu>
        )

        return (
            <BrowserRouter>
                <Fragment>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={[this.state.selected]}
                            mode="inline"
                            onSelect={this.onSelect}
                        >
                            {this.state.collapsed ? (
                                <div className="avatar">
                                    <Avatar src={logo} icon="user" />
                                    <Dropdown overlay={menuInUsername}>
                                        <span style={{ marginTop: '20px' }}>
                                            {firstWord} <Icon type="down" />
                                        </span>
                                    </Dropdown>
                                </div>
                            ) : (
                                <div className="avatar">
                                    <div className="margin20">
                                        <Avatar
                                            src={logo}
                                            size={64}
                                            icon="user"
                                        />
                                    </div>
                                    <Dropdown overlay={menuInUsername}>
                                        <span>
                                            {firstName} <Icon type="down" />
                                        </span>
                                    </Dropdown>
                                </div>
                            )}
                            <Menu.Item
                                key="1"
                                onClick={() => this.reloadDocuments()}
                            >
                                <Icon type="search" />
                                <span>Busqúeda</span>
                            </Menu.Item>
                            {this.props.user &&
                                (this.props.user.authorities.includes(
                                    'documents:create'
                                ) ||
                                    this.props.user.authorities.includes(
                                        'documents:all'
                                    )) && (
                                    <Menu.Item key="2">
                                        <Icon type="snippets" />
                                        <span>Generar Guía Servicio</span>
                                    </Menu.Item>
                                )}
                            {/* {this.props.user &&
                                (this.props.user.authorities.includes(
                                    'entity:create'
                                ) ||
                                    this.props.user.authorities.includes(
                                        'entity:all'
                                    )) && (
                                    <Menu.Item key="3">
                                        <Link to="/entity">
                                            <Icon type="home" />
                                            <span>Entidades</span>
                                        </Link>
                                    </Menu.Item>
                                )} */}
                        </Menu>
                    </Sider>

                    <Layout>
                        <Spin
                            tip={this.state.tips}
                            spinning={this.state.loading}
                        >
                            {this.renderComponent(this.state.selected)}
                        </Spin>
                    </Layout>
                </Fragment>
            </BrowserRouter>
        )
    }
}

Dashboard.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    store: state.store,
    user: state.AuthReducer.user,
    myStore: state.myStore,
})

const mapDispatchToProps = dispatch => ({
    getDocuments: value => dispatch(docServices.documents(value)),
    getDocumentType: value => dispatch(docTypeServices.documentType(value)),
    getRegion: value => dispatch(regionServices.region(value)),
    myStoreReset: () => dispatch(myStoreReset()),
    getStore: value => dispatch(storeServices.store(value)),
    getProduct: value => dispatch(productServices.product(value)),
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
