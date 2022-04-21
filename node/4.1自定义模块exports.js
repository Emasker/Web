// 在一个自定义模块中，默认情况下， exports=module.exports = {}

// 向 module.exports 对象上挂载 username 属性
exports.username = 'zs'
// 向 module.exports 对象上挂载 sayHello 方法
exports.sayHello = function() {
  console.log('Hello!')
}
exports.age = 20

// 让 module.exports 指向一个全新的对象
/* module.exports = {
  nickname: '小黑',
  sayHi() {
    console.log('Hi!')
  }
} */

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象