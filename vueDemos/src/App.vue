<template>
  <div id="app" >
    <h1>Hello Vue </h1>
    <!--<TestCom @hello="excuteHello"></TestCom>-->
    <!--<TestProps :propsObj="propsObj"></TestProps>-->
    <!--<TestVmodel></TestVmodel>-->
    <!--匿名插槽-->
    <!--<TestSlot><ul><li>parent content</li><li>parent content</li></ul></TestSlot>-->
    <!--具名插槽-->
    <TestSlot>
      <h3 slot="title">parent title</h3>
      <div slot="content">parent content</div>
    </TestSlot>
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
  import TestSlot from './components/TestSlot.vue'
  export default {
    components: {TestCom,TestProps,TestVmodel,TestSlot},
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
