module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@': 'src' // 默认已经配置过的别名
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'store': '@/store'
                // 无需配置router和store, 因为引用的地方不是很多
            }
        }
    }
}