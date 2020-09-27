/*
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-17 16:26:44
 * @Description: vue-cli配置文件
 */
const path = require('path')
module.exports = {
    outputDir: 'dist',//打包的时候生成的一个文件名
    assetsDir: 'assets',//静态资源目录(js,css,img,fonts)这些文件都可以写里面
    lintOnSave: true,//是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
    chainWebpack: (config) => {
        config.resolve.alias.set('styles', path.join(__dirname, './src/assets/styles'))
    }
};
