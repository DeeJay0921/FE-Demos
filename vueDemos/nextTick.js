var vm = new Vue ({
    el: '#example',
    data: {
        msg: 'daisy'
    }
})
// setTimeout(function () {
//     vm.msg = 'new Daisy'
// },1000 )

vm.msg = 'new Daisy'
console.log(vm.$el.textContent  == 'new Daisy')
Vue.nextTick(function () {
    vm.$el.textContent === 'new Daisy'
})
console.log(vm.$el.textContent  == 'new Daisy')


// new Vue({
//     el: '#example',
//     data: {
//         msg: 'no update'
//     },
//     methods: {
//         updateMsg() {
//             this.msg = 'updated success'
//             console.log(this.$el.textContent)
//             this.$nextTick(function () {
//                 console.log(this.$el.textContent)
//             })
//         }
//     }
// })
