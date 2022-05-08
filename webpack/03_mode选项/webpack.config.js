var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports={
    entry:'./src/index.js',//入口文件
    output:{
        filename:'bundle.js',//打包后的文件名
        path:path.resolve(__dirname,'./dist'),//打包后的文件路径
        clean:true// 打包前清理 dist 文件夹
    },
    mode:'development',// 开发模式
    devtool:'inline-source-map',// 在开发模式下追踪代码
    plugins: [new HtmlWebpackPlugin({
        template:'./index.html',//原文件根路径
        filename:'app.html',//重命名
        inject:'body'//script标签写入位置
    })],
    devServer:{
        static:'./dist'//告知 dev server，从什么位置查找文件
    }
}