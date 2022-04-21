const express=require('express')
const app=express()

//调用 express.static() 方法，快速的对外提供静态资源
// app.use(express.static('./files/clock'))
// app.use(express.static('./files'))
//托管多个静态资源目录，会优先访问前面的目录

//通过添加挂载路径名才能访问目标目录
app.use('/files',express.static('./files'))

app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1:8080')
  })