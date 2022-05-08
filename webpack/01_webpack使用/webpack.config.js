const path=require('path')
module.exports={
    entry:'./src/index.js',//入口文件
    output:{
        filename:'bundle.js',
        // 输出文件夹必须定义为绝对路径
        path:path.resolve(__dirname,'./dist')
    },
    mode:'none'
}