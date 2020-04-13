const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@menu-dark-bg':' rgb(9, 90, 165)', // background sidebar (replacing dark theme)
            '@layout-sider-background':'rgb(9, 90, 165)', // background sidebar (space no use)
            '@layout-trigger-background':'rgb(9, 90, 165)', //footer sidebar
        },
    })
)