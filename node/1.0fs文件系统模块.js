const fs=require('fs')
//参数1:读取文件的存放路径
//参数2:读取文件时候采用的编码格式，一般默认指定utf8
//参数3:回调函数，拿到读取失败和成功的结果err dataStr
fs.readFile('./files/1.txt','utf-8',(err,dataStr)=>{
    //如果读取成功，则err的返回值为null
    if(err){
        return console.log('读取失败'+err.message);
        //读取失败ENOENT: no such file or directory, open 'D:\Code\web\node\files\11.txt'
    }
    console.log('读取成功'+dataStr);
})
//参数2：要写入的内容
fs.writeFile('./files/1.txt','Hello Node.js',(err)=>{
    //如果文件已存在会覆盖原文件，如果不存在则会创建一个新文件
    if(err){
        return console.log('写入失败'+err.message);
    }
    console.log('写入成功');
   
})

fs.readFile(__dirname+'/files/1.txt','utf-8',(err,dataStr)=>{
    console.log(__dirname);//D:\Code\web\node
    if(err){
        return console.log('读取失败'+err.message);
    }
    console.log('2读取成功'+dataStr);
})