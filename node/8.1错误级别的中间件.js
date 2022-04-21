/* 错误级别中间件的作用:专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
格式∶错误级别中间件的 function处理函数中，必须有4个形参，形参顺序从前到后，分别是(err, req, res, next)。
 */
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    throw new Error('404 Not found')//抛出一个自定义的错误
    res.send('Home page')
})
app.use((err,req,res,next)=>{//错误级别的中间件
    console.log('error'+err.message);
    res.send('Error!'+err.message)
})

app.listen(8080,()=>{
console.log('server running at http://127.0.0.1:8080');
})