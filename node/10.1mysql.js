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
/* client.query("select * from  student where age>20 and college='软件学院'",function(err,results){
    if(err) throw  err
    console.log(results)
}) */
/* client.query("insert into student values (5,'2019213196','梁子琛','软件学院','20','男')",
    function (err, results) {
        console.log(results)
        console.log("增加了记录个数为：" + results.affectedRows)
    }) */
/*     client.query("update student set college=? where sex='女'",['女子学院'],
    function (err, results) {
        console.log(results)
        console.log("增加了记录个数为：" + results.affectedRows)
    }) */
client.query("delete from student where age>30", function (err, results) {
    console.log("删除记录个数为：" + results.affectedRows)
})