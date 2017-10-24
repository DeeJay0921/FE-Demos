// new Vue({
//     el: '.test',
//     data () {
//         return {
//             show: true
//         }
//     }
// })

// var mixinComponent = {
//     created() {
//         console.log('mixin')
//     }
// }
// new Vue ({
//     mixins: [mixinComponent],
//     created() {
//         console.log('component')
//     }
// })


new Vue ({
    el: '.filter',
    data() {
        return {
            msg: '1'
        }
    },
    filters: {
        add1 (val,args) {
            return val + args
        },
    }
})