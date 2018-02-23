<template>
  <div class="testVmodel">
    <input type="text"
           @input="inputValue = $event.target.value"
           :value="inputValue">
    <span>{{ inputValue }}</span>
  </div>
</template>
<style>

</style>
<script>
  export default {
    data() {
      return {
        inputValue: ''
      }
    }
  }
</script>
