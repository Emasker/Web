const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },

  mode: 'none',

  plugins: [
    new HtmlWebpackPlugin({// 实例化 html-webpack-plugin 插件
      template: './index.html',// 打包生成的文件的模板
      filename: 'app.html',// 打包生成的文件名称。默认为index.html
      inject: 'body'// 设置所有资源文件注入模板的位置。可以设置的值true|'head'|'body'|false，默认值为 true
      
    })
  ]
}