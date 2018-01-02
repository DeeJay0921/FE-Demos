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

// function rest (...vals) {
//     console.log(vals) // array
// }
// rest(1,2,3,4,5)