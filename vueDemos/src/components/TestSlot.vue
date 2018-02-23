<template>
  <div class="testSlot">
    <!--<h3>Child Component title</h3>-->
    <!--匿名插槽-->
    <!--<slot></slot>-->
    <!--带name的插槽-->
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>
<style>
.testSlot{
  border: 1px solid #cccccc;
}
</style>
<script>

</script>
