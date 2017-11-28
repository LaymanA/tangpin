<template>
  <div class="cWrap">
    <img :src="src" alt="">
    <p>{{name}}</p>
  </div>
</template>
<script>
  export default {
    props:['src','name']
  }
</script>
<style>
  .cWrap{
    text-align: center;
  }
  .cWrap img{
    border-radius: 50%;
  }
</style>
