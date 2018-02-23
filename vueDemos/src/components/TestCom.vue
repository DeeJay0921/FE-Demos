<template>
  <div class="testCom" @click='emitHello'>hello Component</div>
</template>
<style>
  .testCom {
    color: green;
  }
</style>
<script>
  export default {
    methods: {
      emitHello() {
//        自定义事件  子组件--->父组件
        this.$emit('hello','DeeJay')
      }
    }
  }
</script>
