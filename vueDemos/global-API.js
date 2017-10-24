
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
//