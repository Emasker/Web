const http = require('http')
//创建web服务器实例
const server= http.createServer()
//绑定request事件
server.on('request',(req,res)=>{
    //req.url是客户端请求的URL地址req.method是客户端请求的method类型
    const str=`请求地址为 ${req.url},请求类型为${req.method}`
    console.log(str);
    let content = '<h1>404 Not found！</h1>'
    if(req.url==='/'||req.url==='/index.html'){
        content='<h1>首页</h1>'
    }else if(req.url==='/about.html'){
        content='<h1>关于页面</h1>'
    }
    //防止中文显示乱码问题设置响应头
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //调用res.end(),向客户端响应一些内容
    res.end(str+content)
})
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080');
})
