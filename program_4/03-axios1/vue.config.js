module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 设置代理服务器
                target: 'https://www.baidu.com/',
                // 允许跨域
                changeOrigin: true,
            }
        }
    }
}