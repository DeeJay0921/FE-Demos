import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        num: -1
    },
    getters: {
        ddNum: (s) => s.num * 2
    },
    mutations: {
        increament: (s,payload) => {
            s.num += payload.incr
        }
    },
    actions: {
        addSync: (context,payload) => {
            return new Promise ( (res,rej) => {
                setTimeout( () => {
                    context.state.num += payload.incr
                    res('asdas')
                },1000)
            })
        }
    }
})
export default store