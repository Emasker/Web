const fs=require('fs')
fs.readFile('./files/2.成绩.txt','utf8',(err,data)=>{
    if(err){
        return console.log('读取失败'+err.message);
    }
    console.log('读取成功'+data);

    const oldArr=data.split(' ')
    const newArr=[]
    oldArr.forEach(item=>{
        newArr.push(item.replace('=',':'))
    })
    
    const newStr=newArr.join('\r\n')
    console.log(newStr);

    fs.writeFile('./files/2.处理后的成绩.txt',newStr,err=>{
        if(err){
            return console.log("写入失败"+err.message);
        }
        console.log('写入成功');
    })
})
