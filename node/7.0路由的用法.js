const express = require('express')
const app = express()
/* 
//最简单的路由挂载,不方便模块化管理
app.get('/', (req, res) => {
    res.send(' succeed get')
})
app.post('/', (req, res) => {
    res.send(' succeed post')
}) */

//导入路由
const router=require('./7.1.router')
//注册路由
app.use('/api',router)

app.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080');
})