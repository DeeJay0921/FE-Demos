Vue.components('com1',{
    template: '<div>com1</div>',
    methods: {
        com1Deal() {
            this.$emit('com1', 'deejay')
        }
    }
})
Vue.components('com2',{
    template: '<div>com2</div>',
    methods: {
        com2Deal(s) {
            console.log(s)
        }
    }
})
var vm = new Vue({

})