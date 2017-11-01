'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(helloWorldGenerator);

// for (var i = 0; i < 10; i ++) {
//     console.log(i)
// }
// console.log(i) //10
//
//
//
// for (let i = 0; i < 10; i ++) {
//     console.log(i)
// }
// console.log(i) //此时i为undefined
//
// for (var _i = 0; _i < 10; _i ++) {
//     console.log(_i)
// }
// console.log(i)

// function fn () {
//     var n = 0
//     if (true) {
//         var n = 1
//     }
//     console.log(n) //1
// }
// fn()
//
// function fn () {
//     let n = 0
//     if (true) {
//         let n = 1
//     }
//     console.log(n) // 0
// }
// fn()
//
// function fn () {
//     var n = 0 // 这里的let编译成var 因为es5本身函数就是作用域
//     if (true) {
//         var _n = 1 //这里的let就是通过替换变量生成了if的作用域
//     }
//     console.log(n) // 0
// }
// fn()

// const b = 0;

// b = 1; //报错 常量不能再进行改写 为read-only

// const c = {
//     a: 1
// }
// c.a = 2 // 不报错 因为JS中的对象仅仅是个指针，c中存储的地址并没有改变

// c = {
//     a: 2
// } // 此时就会报错 因为地址变为了另外一个对象的地址


// let [a, b, c] = [1, 2, 3]
// //编译为
// var a = 1,
//     b = 2,
//     c = 3

// let { d,e } = { d: 1,e: 2 }
// //编译为
// var _d$e = { d: 1,e: 2 },
//     d = _d$e.d,
//     e = _d$e.e;

// let obj = {
//     p: [
//         'Hello',
//         {y: 'World'}
//     ]
// };
// let { p: [x, { y }] } = obj;
// 编译为
// var obj = {
//     p: ['Hello', { y: 'World' }]
// };
// var _obj$p = _slicedToArray(obj.p,2),
//     x = _obj$p[0],
//     y = _obj$p[1].y;


//解构赋值的应用

// function add ([x,y]) {
//     return x + y;
// }
// add([1,2]);  //3

// 字符串的解构赋值
// const [a,b,c,d,e] = 'hello';

//rest

// const {p,...rest } = {p: 1,a: 2,c: 3}
//
// function log (x, y = 'world') {
//     console.log(x, y)
// }

// function add (a,...values) {
//     console.log(values)
// }
// add (2,5,3);

// var f = v => v;
// var f1 = v => {
//     return v
// }

//
// var f1 = () => {
//     console.log(this) //undefined
// }
// var f2 = function () {
//     console.log(this)  //window
// }

// var f3 = function () {
//     return () => {
//         console.log(this)
//     }
// }

// let p = new Promise( (resolve,reject) => {
//     // resolve(1);
//     reject(2);
// })
// // console.log(p)
// // // p ===> fulfilled 1
// // // Promise的状态 fulfilled pending rejected
// // // Promise的值  有值 一直为空 有值
//
// let p1 = p.then(val => { //如果是then 那么这个函数作为resolve进行执行
//     console.log(val) //1
// })
// let p2 = p.then(val => {
//     console.log(val) //1  再调用一次 值还是1 只要状态不是pending时，这个状态就永久的保持并且不会改变了
// //    所以再次调用也不会改变p，只是将其值输出
// })
// let p3 = p.catch(val => {
//     console.log(val)
// })

// let p = new Promise((resolve,reject) => {
//     resolve(1)
// })
// let p1 = p.then(val => { //如果then里面的回调函数return出来一个值，那么这个值作为p1的promise value，并且状态变为fulfilled
//     return 2
// //
// })

// let t = [1,2,3];
//
// for(let val of t) {
//     console.log(val)
// }

// const s = (...rest) => {
//     for(let val of rest) { // 可以遍历数组
//         console.log(val)
//     }
// }
// s(1,2,3,4)

// const s = function() {
//     for(let val of arguments) {  //可以遍历 类数组对象
//         console.log(val)
//     }
// }
// s(1,2,3,4)

// const s = {
//     a: 1,
//     b: 2
// }
// for (let val of s) { //报错
//     console.log(val)
// }

// class Test {
//     constructor () {
//         this.a = 'a';
//         this.b = 'b'
//     }
//     c () {
//         console.log('C')
//     }
// }

// //es5的写法为：
// var Test = function () {
//     this.a = 'a';
//     this.b = 'b';
// }
// Test.prototype.c = function () {
//     console.log('c');
// }

function helloWorldGenerator() {
    return regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'hello';

                case 2:
                    _context.next = 4;
                    return 'world';

                case 4:
                    return _context.abrupt('return', 'ending');

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}
var hw = helloWorldGenerator();
var a = hw.next();
var b = hw.next();
var c = hw.next();
console.log(a, b, c);
//{ value: 'hello', done: false } //done 为false代表还可以往下next()
// { value: 'world', done: false }
// { value: 'ending', done: true }
