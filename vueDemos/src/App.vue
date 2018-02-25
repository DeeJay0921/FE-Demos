<template>
    <div id="app">
        <h1>Hello Vue </h1>
        <div> {{ num }}</div>
        <button @click="add"> CLick to add</button>
        <div>{{num2}}</div>
        <button @click="add2"> CLick to add222</button>
        <!--<TestCom @hello="excuteHello"></TestCom>-->
        <!--<TestProps :propsObj="propsObj"></TestProps>-->
        <!--<TestVmodel></TestVmodel>-->
        <!--匿名插槽-->
        <!--<TestSlot><ul><li>parent content</li><li>parent content</li></ul></TestSlot>-->
        <!--具名插槽-->
        <!--<TestSlot>-->
        <!--<h3 slot="title">parent title</h3>-->
        <!--<div slot="content">parent content</div>-->
        <!--</TestSlot>-->


    </div>
</template>
<style lang="less">
    div {
        h1 {
            color: red;
        }
    }
</style>
<script>
    //    import TestCom from './components/TestCom.vue'
    //    import TestProps from './components/TestProps.vue'
    //    import TestVmodel from './components/TestVmodel.vue'
    //    import TestSlot from './components/TestSlot.vue'
    //import store from './store'
    export default {
//        components: {TestCom, TestProps, TestVmodel, TestSlot},
        data() {
            return {
//                propsObj: {
//                    name: 'DeeJay',
//                    content: 'this is props content'
//                }
            }
        },
        computed: {
            num() {
                return this.$store.getters.ddNum
            },
            num2() {
                return this.$store.state.num
            }
        },
        methods: {
//            excuteHello(str) {
//                alert('hello Vue!' + str)
//            }
            add() {
                this.$store.commit('increament', {
                    incr: 4
                })
            },
            add2() {
                this.$store.dispatch('addSync', {
                    incr: 30
                }).then((str) => {
                    console.log(str)
                })
            }
        },
    }
</script>
