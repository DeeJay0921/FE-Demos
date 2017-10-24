
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

//Vue.nextTick  进行数据的立即修改
var testNextTick = new Vue ({
    data: {
        msg: 'Vue'
    }
})
testNextTick.msg = 'React'
//DOM没更新
Vue.nextTick(function () {
    /*DOM更新了*/
})