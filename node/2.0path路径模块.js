//导入模块
const path = require('path')
const fs=require('fs')

//path.join()路径拼接
const pathStr=path.join('/a','/b/c','../','/d','e')//"../"会撤销上一层路径
console.log(pathStr);//a/b/d/e

const pathStr2=path.join(__dirname,'./files/1.txt')
console.log(pathStr2);//D:\Code\web\node\files\1.txt

fs.readFile(path.join(__dirname,'./files/1.txt'),'utf8',(err,dataStr)=>{
    if(err){
        return console.log(err.message);
    }
    console.log(dataStr);
})

//path.basename()获取文件名
const fullName= path.basename(pathStr2)
console.log(fullName);//1.txt,只输入一个参数 会返回路径后的文件全名
const nameWithoutExt=path.basename(pathStr2,'.txt')
console.log(nameWithoutExt);//1,第二个参数是后缀名，输入后只会返回不带后缀的文件本名

//path.extname()获取文件拓展名
const ext=path.extname(pathStr2)
console.log(ext);//.txt