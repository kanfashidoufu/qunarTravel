/*
 * @Date: 2020-09-17 15:15:26
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2020-09-17 15:21:22
 * @Description: 
 */
const index = require('./data/index.json');
const city = require('./data/city.json');
const detail = require('./data/detail.json');
module.exports = {
    baseUrl:'/',//根路径
    outputDir:'dist',//打包的时候生成的一个文件名
    assetsDir:'assets',//静态资源目录(js,css,img,fonts)这些文件都可以写里面
    lintOnSave:true,//是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
    devServer:{
        before(app){//配置本地的json,json文件和src同级
            //http://localhost:8080/api/index
            app.get('http://www.easy-mock.com/mock/5c08c719539281325f2a1cae/travel/api/index',(req,res) =>{
 
                res.json(index)
            });
            app.get('http://www.easy-mock.com/mock/5c08c719539281325f2a1cae/travel/api/city',(req,res) =>{
 
                res.json(city)
            });
            app.get('http://www.easy-mock.com/mock/5c08c719539281325f2a1cae/travel/api/detail',(req,res) =>{
 
                res.json(detail)
            });
        }
        
    }
 };
