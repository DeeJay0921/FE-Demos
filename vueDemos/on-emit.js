Vue.component('button-child',{
    template: '<button @click="childDeal">{{childNum}}</button>',
    data() {
        return {
            childNum: 0
        }
    },
    methods: {
        childDeal () {
            this.childNum += 1
            this.$emit('childevent') // 这里在子组件里把childemit提交出去，父组件可以选择监听这个自定义事件
        }
    }
})
new Vue({
    el: '.event-example',
    data() {
        return {
            parentNum: 0
        }
    },
    methods: {
        parentDeal () {
            this.parentNum += 1
        }
    }
})