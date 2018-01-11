let log = (str) => {
    console.log(str)
}

// let [a,b,c] = [1,2]  不完全解构
// console.log(a,b,c) // 1 2 undefined

// let [a,b = 2, c] = [1,undefined,3] // 默认值
// console.log(a,b,c) // 1 2 3

// function fn() {
//     return 2
// }
// let [x = fn()] = [undefined]
// console.log(x) // 2

// let {name, age} = {name: 'deejay', age: 21}
// console.log(name,age) // deejay 21

// let {age, name} = {name: 'deejay', age: 21}
// console.log(age,name) // 21 'deejay'

// let {name: N, age} = {name: 'Deejay'}
// console.log(N) // Deejay
// console.log(name) // ReferenceError

// let {sin, cos, tan} = Math

// [[1, 2], [3, 4]].map(([a, b]) => {console.log(a + b)});

// function fn (x,x,y) {
//     console.log(x,x,y)
// }
// fn(1,2,3)
// console.log(fn.length)

// var x = 1
// function Test (x,y) {
//     this.x = x
//     this.y = y
// }
// Test.prototype.say = function () {
//     console.log(this.x)
// }
// let y = new Test ('name','age')

// class Test {
//     constructor(x,y) {
//         this.x = x
//         this.y = y
//     }
//     say() {
//         console.log(this.x)
//     }
// }
// let y = new Test('deejay',21)
// y.say()

// function fn (superArr,subArr) {
//     subArr.forEach((e)=> {
//         superArr.splice(superArr.indexOf(e),1)
//     })
//     return superArr
// }
// let res = fn([1,2,3,4,5],[1,2,4])
// console.log(res)

// function fn (superArr,subArr) {
//     return superArr.filter((e) => {
//         return !subArr.includes(e)
//     })
// }
// var res = fn([1,2,3,4,5], [1,2,4])
// console.log(res)

// function rest (...vals) { // vals本身就是一个数组   所以以后可以不用写 [].splice.call(arguments,1,1)这种函数了
//     console.log(vals) // array
// }
// rest(1,2,3,4,5)

// let fn = () => {
//     console.log(1111)
//     return undefined
// }
// fn()

// let x = 1
// function fn (x,y = x) { // 默认值的函数参数（）也是一个作用域
//     console.log(x,y)
// }
// fn(1,2) // 1 2
// fn(1) // 1

// let x = 1
// function fn (y = x) {
//     let x = 2
//     console.log(y)
// }
// fn() // 没传参 (y = x)也是一个作用域，其中没有定义x  那么去找外部作用域的x  既输出1

// let x = 1
// function fn (x, y = function () {x = 2}) {
//     x = 3  // 这里的x就是 参数 （）作用域中一开始声明的x
//     y()
//     console.log(x)
// }
// fn()
// console.log(x)

// function emptyFn () {
//     throw new Error('Empty params!')
// }
// function fn (targetParam = emptyFn()) { // 可以用来判断是否没有默认值
//     return targetParam
// }
// fn()

/*es6字符串的遍历*/
// let str = 'DeeJay'
// for (let targetStr of str) {
//     console.log(targetStr)// D e e J a y
// }

// 模板字符串
// let str = `In JavaScript, \\n is a line-feed`
// console.log(str)

//模板字符串中  加变量
// let num = 0
// setInterval(() => {
//     num ++
//     let str = `The number is ${num} now.` // 写到${}中
//     console.log(str)
// },1000)

// ... 扩展运算符
// function fn (...rest) {
//     console.log(rest) // [1,2,3]
//     console.log(...rest) // 1 2 3
// }
// fn(1,2,3)

// let arr = Array.of(3)
// console.log(arr)// [3]
// let arr2 = Array.of(3,1,1)
// console.log(arr2) // [3,1,1]


// let arr = [-1,-2,3,4]
// let res = arr.find((e) => { // 找到值
//     return e > 0
// })
// console.log(res)
// let res2 = arr.findIndex((e) => { // 找到index
//     return e > 0
// })
// console.log(res2)

// 对象的简写方法
// let date = new Date()
// const obj = {
//     name: 'DeeJay',
//     date, // 同名简写
//     sayHi() { // 方法简写
//         console.log(this.name)
//     }
// }
// console.log(obj)
// 简写也可以用在返回值中
// function fn (x,y) {
//     return {x,y}
// }
// let res = fn(1,2)
// console.log(res) // {x: 1,y: 2}

// Object.assign() 对象合并
// let source1 = {
//     a: 1
// }
// let source2 = {
//     b: 2
// }
// let target = {}
// Object.assign(target,source1,source2)
// console.log(target) // {a: 1,b: 2}

// Object.assign()在创建构造函数的时候可以用来进行属性的赋值
// class Cat {
//     constructor (name,age) {
//         Object.assign(this,{name,age})// 相当于 this.name = name; this.age = age
//     }
// }
// let cc = new Cat('cc',18)

// ES6对原型进行的操作Object.setPrototypeOf() Object.getPrototypeOf()   以及ES5的Object.create()
// function Person (name,age) {
//     Object.assign(this,{name,age})
// }
// let p = new Person('Jay',21)
// Object.getPrototypeOf(p) === Person.prototype //true
// Object.setPrototypeOf(p,Object.prototype) // 这时候p的__proto__不再是Person.prototype
//Object.setPrototypeOf 相当于修改__ptoto__

// super关键字
// 和this相对的，this指向的是函数所在的当前对象  super指向的是当前对象的原型对象 super只能用在对象的简写方法之中
// let sup = {
//     name: 'sup',
// }
// let sub = {
//     logSuper() {
//         console.log(super.name) // 这里的super,在进行了setPrototypeOf()之后，super就指向sub的原型对象
//     }
// }
// Object.setPrototypeOf(sub,sup)
// console.log(sub.prototype === sup.prototype) // true
// sub.logSuper() // sup


//Object.keys() 的扩展 Object.values()以及Object.entries()
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let keys = Object.keys(obj)
// let values = Object.values(obj)
// let entries = Object.entries(obj)
// console.log(keys)
// console.log(values)
// console.log(entries)

// const {a,b,...c} = {a:1,b:2,z:3,d:4,dd:5}
// console.log(a)
// console.log(b)
// console.log(c)

// // Symbol
// let s1 = Symbol() // Symbol 不是对象  不能new
// let s2 = Symbol('s2') // Symbol可以传入字符串作为标识
// let obj = {
//     [s1]: 'hi Symbol~', // Symbol作为对象属性
//     [s2]() { // Symbol作为对象方法
//         console.log('hello,Symbol function')
//     }
// }
// obj[s2]()
// let Symbols = Object.getOwnPropertySymbols(obj)
// log(Symbols) //[ Symbol(), Symbol(s2) ]
//
// let s3 = Symbol.for('same') // Symbol.for()可以创建相同的Symbol值
// let s4 = Symbol.for('same')
// log(s3 === s4) //true
// // Symbol.for()创建的symbol会被登记在全局环境中供搜索 而Symbol()不会
// log(Symbol.keyFor(s3)) // same  Symbol.for()创建的会被keyFor()读到key
// let s5 = Symbol('s5')
// log(Symbol.keyFor(s5)) // undefined  Symbol()创建的不会

// Set数据结构
// let set = new Set()
// let arr = [2,1,1,1,1,2,3,4,5,4,5]
// arr.forEach((e) => {
//     set.add(e) // Set和数组类似  但是所有成员都是唯一的
// })
// log(set) //Set { 2, 1, 3, 4, 5 }
// log(set.constructor) // constructor默认指向Set构造函数函数
// log(set.size) // 返回实例的成员总数
// set.delete(2) // 返回一个boolean值 删除传入的值
// log(set) //Set { 1, 3, 4, 5 }
// log(set.has(3)) //true  返回一个boolean值
// set.clear() // clear() 清空实例中的所有值
// log(set) // Set {}
// Array.from()可以转换Set实例为数组  实现数组去重
let dupeArr = [1,1,1,2,2,3]
let dedupeArr = Array.from(new Set(dupeArr))
log(dedupeArr) // [1,2,3]