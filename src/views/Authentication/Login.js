import React, { useEffect } from 'react'
import { Form, Icon, Input, Button, Layout, message } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login, loadUser, cleanError } from '../../services/auth'

const { Content } = Layout

const Login = ({
    loading,
    isAuthenticated,
    loadUser,
    login,
    form,
    history,
    error,
    cleanError,
}) => {
    const { getFieldDecorator } = form

    useEffect(() => {
        loadUser()

        if (isAuthenticated) history.push('/dashboard')
        if (error) message.error(error, 2, cleanError())
        // eslint-disable-next-line
    }, [isAuthenticated, history, error])

    const handleSubmit = e => {
        e.preventDefault()
        form.validateFields((err, values) => {
            if (!err) {
                let user = {
                    password: values.password,
                    username: values.username.toLowerCase(),
                }

                login(user)
            }
        })
    }

    return (
        <Content style={styles.loginContent}>
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: 'Porfavor ingresa un username!',
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Por favor ingresa una contraseña!',
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="lock"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={styles.loginFormButton}
                        loading={loading}
                    >
                        Acceder
                    </Button>
                </Form.Item>
            </Form>
        </Content>
    )
}

const styles = {
    loginContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginFormButton: {
        width: '100%',
    },
}

Login.propTypes = {
    loading: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loadUser: PropTypes.func.isRequired,
    error: PropTypes.string,
    cleanError: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    loading: state.AuthReducer.loading,
    isAuthenticated: state.AuthReducer.isAuthenticated,
    error: state.AuthReducer.error,
})

const mapDispatchToProps = dispatch => ({
    login: value => dispatch(login(value)),
    loadUser: () => dispatch(loadUser()),
    cleanError: () => dispatch(cleanError()),
})

const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedNormalLoginForm)
