const webpackMerge= require("webpack-merge");
const webpack = require('webpack')
const baseConfig=require('./base.config')
module.exports = webpackMerge.merge(baseConfig, {
    plugins:[
        new webpack.BannerPlugin('All rights reserved@Shi. '),
    ],
})
