import React from 'react'
import { Layout } from 'antd'
import AppRouter from './Router'

const App = () => {
    return (
        <Layout style={styles.layout}>
            <AppRouter />
        </Layout>
    )
}

const styles = {
    layout: {
        height: '100vh',
    },
}

export default App
