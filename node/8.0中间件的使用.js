const express = require('express')
const app = express()
//通过app.use()或 app.get()或 app.post()，绑定到app实例上的中间件，叫做应用级别的中间件
//绑定到express.Router0实例上的中间件，叫做路由级别的中间件。

// // 定义一个最简单的中间件函数
// const mw = function (req, res, next) {
//   console.log('这是最简单的中间件函数')
//   // 把流转关系，转交给下一个中间件或路由
//   next()
// }

// // 将 mw 注册为全局生效的中间件
// app.use(mw)

// 定义第一个全局中间件
//这是定义全局中间件的简化形式
app.use((req, res, next) => {
    console.log('调用了第1个全局中间件')
    // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
    const time = Date.now()
    req.startTime = time
    next()
})

// 定义第二个全局中间件
app.use((req, res, next) => {
    console.log('调用了第2个全局中间件')
    next()
  })

  // 定义局部中间件函数,不使用use调用
const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件')
    next()
  }
const mw2 = (req, res, next) => {
    console.log('调用了第二个局部生效的中间件')
    next()
  }

  app.get('/part', [mw1,mw2], (req, res) => {
    res.send('Part page.')
  })

//中间件会根据先后顺序调用
app.get('/', (req, res) => {
    console.log('调用了 / 这个路由')
    res.send('Home page.' + req.startTime)
})
app.get('/user', (req, res) => {
    console.log('调用了 /user 这个路由')
    res.send('User page.' + req.startTime)
})

app.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})