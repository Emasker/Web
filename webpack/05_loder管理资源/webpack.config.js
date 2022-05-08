const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')// 抽离和压缩CSS
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    entry: './src/index.js', //入口文件

    output: {
        filename: 'bundle.js', //打包后的文件名
        path: path.resolve(__dirname, './dist'), //打包后的文件路径
        clean: true, //设置打包后清理dist
        assetModuleFilename: 'images/[contenthash][ext]' //配置图片路径
    },

    mode: 'development',

    devtool: 'inline-source-map',

    plugins: [new HtmlWebpackPlugin({
            template: './index.html', //原文件根路径
            filename: 'app.html', //重命名
            inject: 'body' //script标签写入位置
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        }) //抽离和压缩css
    ],

    devServer: {
        static: './dist' //根目录
    },

    module: { //导入其他文件类型
        rules: [{
                test: /\.png$/,
                type: 'asset/resource', //发送一个单独文件并导出url
                generator: {
                    filename: 'images/[contenthash][ext]' //配置图片路径，此处配置的优先级高于output，两者可同时配置
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline' //导出一个资源的data Url
            },
            {
                test: /\.txt$/,
                type: 'asset/source' //导出资源的源代码
            },
            {
                test: /\.jpg$/,
                type: 'asset', //在resource和inline之间自动选择,默认文件大小大于8k时创建resource类型
                /*  parser: {//更改默认大小
                     dataUrlCondition: {
                       maxSize: 4 * 1024 * 1024
                     }
                   } */
            },
            {
                test: /\.(css|less)$/,
                //定义出在进行转换时，应该使用哪个 loader。
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },

        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin() //压缩css代码
        ]
    }
}