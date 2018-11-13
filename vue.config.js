const index = require('./data/index.json');
module.exports = {
    baseUrl:'/',//根路径
    outputDir:'dist',//打包的时候生成的一个文件名
    assetsDir:'assets',//静态资源目录(js,css,img,fonts)这些文件都可以写里面
    lintOnSave:true,//是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
    devServer:{
        before(app){//配置本地的json,json文件和src同级
            //http://localhost:8080/api/index
            app.get('/api/index',(req,res) =>{
 
                res.json(index)
            });
        }
        
    }
 };
