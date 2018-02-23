<template>
  <div class="testProps" >
    <div>name: {{propsObj.name}}</div>
    <div>content: {{propsObj.content}}</div>
  </div>
</template>
<style>

</style>
<script>
  export default {
    props: ['propsObj'],
  }
</script>
