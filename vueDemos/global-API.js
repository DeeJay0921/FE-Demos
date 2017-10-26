
// Vue.extend  使用基础的Vue构建器创建一个子类   参数为一个组件的选项的对象  （data还是必须为函数）
var testExtend = Vue.extend({
    template: '<div>{{msg}} world!</div>',
    data() {
        return {
            msg: 'hello'
        }
    }
})

new testExtend().$mount('#testExtend')

//Vue.nextTick(function)  进行数据的立即修改
var testNextTick = new Vue ({
    data: {
        msg: 'Vue'
    }
})
testNextTick.msg = 'React'
//DOM没更新
Vue.nextTick(function () {
    /*DOM更新了*/
    console.log()
})

//Vue.set(target,key,value) 用于添加新的属性，可以进行Vue的响应式并且引起视图更新

//Vue.delete(target,key)   删除对象的属性，如果对象是响应式的，那么也是触发视图的更新

//Vue.directive(id,[definition])  用于进行Vue的自定义指令的创建

//Vue.filter(id,[definition])  注册或者获取全局过滤器

//Vue.use(plugin)  安装Vue插件

// Vue.compile(template)  在render函数中编译模板字符串   只在独立构建时有效

//--------------------------  Vue选项/数据  -------------------------------------

// data 对象或者函数   对于组件只接受函数    vm.msg === vm.$data.msg   不能对data使用箭头函数(data中的this指向当前实例)
// props 对象或者数组
// propsData  只能用在new Vue中，创建实例是传递props,主要是用于方便测试
// computed methods watch  同样的 也不能使用箭头函数
// watch
var testWatch = new Vue({
    data: {
        a: 1
    },
    watch: {
        a: function (val,oldVal) { // 用来监听data中的a的变化
            console.log('oldVal: '+ oldVal)
            console.log('Val: '+ val)
        }
    }
})
testWatch.a = 2

// ------------------------------- Vue选项/DOM  ------------------------------------------

// el  只能在由new Vue创建的实例中遵守  挂载之后可以使用 vm.$el 访问
// template   一个字符串模板作为Vue实例的标识使用， 如果没有内容分发(slot)，那么模板将直接替换挂载的元素，挂在元素的内容都将被忽略
// render  renderError
// ----------------------------  Vue选项/生命周期钩子   ----------------------------------------
//  所有的生命周期钩子都是绑定this到实例中  所以不能使用箭头函数
// beforeCreate  实例初始化之后  data和event/watch配置之前
// created  实例被创建  data,methods,event/watch等都已被配置      但是挂载阶段还没开始 $el属性目前不可见
// beforeMount 挂载开始之前被调用  相关的render函数首次被调用
// mounted  el被新建的vm.$el替换，并挂载到实例上去之后（不承诺所有的子组件也被挂载） 可以使用vm.$nextTick()
// beforeUpdate  数据更新时调用 发生在虚拟DOM重新渲染和打补丁之前 可以进一步的修改状态 并不会触发重新渲染
// updated  组件DOM已经更新，可以执行依赖DOM的操作  不过在大部分情况下，应该避免在此阶段更改状态，如果要改变，使用computed或者watch
//                  一样的 mounted/updated 都不保证所有的子组件都已经处理完毕 所以有需求可以使用vm.$nextTick()
// beforeDestroy  实例销毁前调用  在这一步 实例仍然可以完全调用
// destroyed  Vue实例销毁后调用 所有数据解绑定 所有子实例也销毁所有事件监听器也被移除
// errorCaptured    捕获一个来自子孙组件的错误时被调用

// ----------------------------  Vue的实例上的属性     ------------------------------------------
// var vm = new Vue ({})
// vm.$data  vm.$props  vm.$el vm.$options  vm.$parent  vm.$root  vm.$children  vm.$slots
// var testOptions = new Vue(
//     {
//         el: '#testOptions',
//         data: {
//             msg: 'test'
//         },
//         methods: {
//             add() {}
//         }
//
//     }
// )
// console.log(testOptions.$options)

// vm.$attrs 除了class和style,包含了不是props的所有特性
// vm.$listeners
// new Vue ({
//     el: '#app',
//     data: {
//         none: false
//     },
//     methods: {
//         change() {
//             this.none = true
//         }
//     }
// })
var test = new Vue ({
    el: '.test',
    data: {
        seen: true
    },
    methods: {
        change() {
            if(this.seen) {
                this.seen = false
            }
            else {
                this.seen = true
            }
        }
    }
})
