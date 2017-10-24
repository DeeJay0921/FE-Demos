Vue.component('child',{
    template: '<div>child</div>'
})
var vm = new Vue ({
    el: '#parent',
    data() {
        return {

        }
    }
})
var deejay = vm.$refs.daisy;
// $refs 得等到组件加载完成之后才填充  而且也并不是响应式的
console.log(deejay)