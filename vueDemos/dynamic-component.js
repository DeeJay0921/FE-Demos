var vm = new Vue({
    el: '#example',
    data() {
        return {
            currentView: 'home'
        }
    },
    components: {
        home: {
            template: '<div> home </div>'
        },
        posts: {
            template: '<div> posts </div>'
        }
    },
    methods: {
        change () {
            if(this.currentView == 'home') {
                this.currentView = 'posts'
            }
            else {
                this.currentView = 'home'
            }
        }
    }
})