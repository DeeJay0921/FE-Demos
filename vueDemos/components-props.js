Vue.component('daisy',{
	template: '<div> {{ daisyMessage }} </div>',
	props: ['daisyMessage']
})
new Vue({
	el: '#app',
	data() {
		return {
			appMsg: '',
			appObjMsg: {
				name: '如果传递的是对象。那么v-bind可以不写props-name，直接v-bind="targetObj"',
				explain: '这样就等价于依次把属性写完，即v-bind:name="appObjMsg.name" v-bind:explain="appObjMsg.explain"'
			}
		}a
	}
})

