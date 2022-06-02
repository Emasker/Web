var mysql = require("mysql")
var client = mysql.createConnection({
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: 'admin123',
    database: 'library'
})
client.connect(function (err) {
    if (err) throw err
    console.log("连接数据库成功")
})
//查询全部
/* client.query("select * from  books",function(err,results){
    if(err) throw  err
    console.log(results)
}) */
/* var  name="张三"
var  press="清华大学出版社"
client.query("select * from  books where author=? and press=?",[name,press],function(err,results){
    if(err) throw  err
    console.log(results)
}) */
//查询id等于3的记录，并用console.log输出查询id等于3的记录，并用console.log输出
/* client.query("select * from  books where id=?",[3],function(err,results){
    if(err) throw  err
    console.log(results)
}) */
//查询书名中包含“程序设计”的记录，并用console.log输出
/* client.query("select * from  books where bookname like '%程序设计%'",function(err,results){
    if(err) throw  err
    console.log(results)
}) */
//记录增加-增加一条记录
/* client.query("insert into books values (7,?,?,?)",['nodeweb平台开发', '张三', '东华理工'],
    function (err, results) {
        console.log(results)
        console.log("增加了记录个数为：" + results.affectedRows)
    }) */
//记录修改--将id为6的记录的书名、作者改为："web程序设计","李四"

/* client.query("update  books set  bookname=? ,author=?  where id=?",
    ["web程序设计", "李四", 7],
    function (err, results) {
        console.log(results);
        console.log("修改记录个数为：" + results.affectedRows)
    }
) */
//记录删除--删除出版社为“清华大学出版社”的所有记录
/* client.query("delete from books where press=?", ["清华大学出版社"], function (err, results) {
    console.log("删除记录个数为：" + results.affectedRows)
}) */