import React from 'react'
import { Result, Button, Layout } from 'antd'

const { Content } = Layout

const NotFound = ({ history }) => {
    return (
        <Content style={styles.contentNotFound}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" onClick={() => history.push('/')}>
                        Volver
                    </Button>
                }
            />
        </Content>
    )
}

const styles = {
    contentNotFound: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default NotFound
