'use strict';

const path = require('path');

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {
      '/api':{
        target:'http://192.169.40.99:7088',//配置地址
        changeOrigin:true,
        pathRewrite:{
          '^/api': ''
        }
      }},
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },
//修改打包位置和是否有反斜杠前缀
  build: {
    index: path.resolve(__dirname, '../../memory/memory/www/index.html'),
    assetsRoot: path.resolve(__dirname, '../../memory/memory/www/'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
