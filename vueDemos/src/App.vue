<template>
  <div id="app" >
    <h1>Hello Vue </h1>
    <!--<TestCom @hello="excuteHello"></TestCom>-->
    <!--<TestProps :propsObj="propsObj"></TestProps>-->
    <!--<TestVmodel></TestVmodel>-->
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
  import TestCom from './components/TestCom.vue'
  import TestProps from './components/TestProps.vue'
  import TestVmodel from './components/TestVmodel.vue'
  export default {
    components: {TestCom,TestProps,TestVmodel},
    data() {
      return {
        propsObj: {
          name: 'DeeJay',
          content: 'this is props content'
        }
      }
    },
    methods: {
      excuteHello(str) {
        alert('hello Vue!' + str)
      }
    }
  }
</script>
